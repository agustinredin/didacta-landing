import { useState, useEffect } from "react"

export function RotateText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
    //   setIndex((prevIndex) => (prevIndex + 1) % .length) (Colocar el array de palabras detras del .length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

}