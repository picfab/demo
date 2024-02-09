import React, { useEffect, useRef } from "react"
import { Ripple } from "tw-elements"
import { classNames } from "../tools"

export const Button = ({ children,onClick }) => {
  const ref = useRef(null)
  useEffect(() => {
    new Ripple(ref.current)
  }, [])

  return (
    <button
      ref={ref}
      type="button"
      data-te-ripple-color="light"
      onClick={onClick}
      className={classNames(
        "inline-block rounded bg-primary px-6 py-2.5",
        "text-xs font-medium uppercase leading-tight",
        "text-white shadow-md transition duration-150 ease-in-out",
        "hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700",
        "focus:shadow-lg focus:outline-none focus:ring-0",
        "active:bg-primary-800 active:shadow-lg",
        "overflow-hidden"
      )}
    >
      {children}
    </button>
  )
}
