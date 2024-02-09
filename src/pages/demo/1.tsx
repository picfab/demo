import React, { useEffect, useState } from "react"
import { getDatabase, ref, set, onValue } from "firebase/database"
import { db } from "../../firebase"
import { Ripple, initTE } from "tw-elements"
import { Button } from "../../components/Button"
import { useAdmin } from "../../tools"
import { navigate } from "gatsby"

export default function Home() {
  const [value, setValue] = useState<any>({})
  const [nbUsers, setNbUsers] = useState<any>(0)
  const [email, setEmail] = useState<any>("")
  const isAdmin = useAdmin()
  useEffect(() => {
    const query = ref(db, "users/2")
    const unsubscribe = onValue(query, snapshot => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        setValue(data)
      }
    })

    const queryNbUser = ref(db, "users/nb")

    const unsubscribeNbUser = onValue(queryNbUser, snapshot => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        console.log(data)

        setNbUsers(data.nbUsers)
      }
    })

    // Nettoyer l'écouteur lorsque le composant est démonté
    return () => {
      unsubscribe()

      unsubscribeNbUser()
    }
  }, [])

  useEffect(() => {
    initTE({ Ripple })
    if(isAdmin) navigate("/demo/2")
  }, [])

  function testOnclick() {
    set(ref(db, "users/2"), {
      username: "OOOOO",
      email: email,
    })
  }

  function addUser() {
    console.log(nbUsers)

    set(ref(db, "users/nb"), {
      nbUsers: (nbUsers || 0) + 1,
    })
  }
  return (
    <div className="bg-[#262626] w-screen h-screen">
      <div className="container py-24 md:px-6">
        <section className="mb-32 text-center">
          <div className="flex justify-center">
            <div className="max-w-[800px]">
              <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
                Are you ready <br />
                <span className="text-primary dark:text-primary-400">
                  for an demo?
                </span>
              </h2>
              <Button onClick={addUser}>Button {nbUsers}</Button>
              {isAdmin && "Admin"}
            </div>
          </div>
        </section>
      </div>
      <div>
        test: {value?.email}
        <br />
        <button onClick={testOnclick}>Test click</button>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
    </div>
  )
}
