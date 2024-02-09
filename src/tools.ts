import { useEffect, useState } from "react"

export const classNames = (...classes) =>
  [...new Set(classes.filter(elt => typeof elt === "string"))].join(" ")

export const useAdmin = () => {
  const [admin, setAdmin] = useState("")
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAdmin(localStorage.getItem("admin") || "")
    }
  }, [])

  return admin === "yolo"
}
