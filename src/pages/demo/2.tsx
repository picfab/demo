import React, { useEffect, useState } from "react"
import { getDatabase, ref, set, onValue } from "firebase/database"
import { db } from "../../firebase"
import { Ripple, initTE } from "tw-elements"
import { Button } from "../../components/Button"
import { useAdmin } from "../../tools"

export default function Home() {
  const isAdmin = useAdmin()

  return (
    <div className="bg-[#262626] w-screen h-screen">
      <div className="container py-24 md:px-6">
        <section className="mb-32 text-center">
          <div className="flex justify-center">
            <div className="max-w-[800px]">
              <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
                Page2
              </h2>
              {isAdmin && "Admin"}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
