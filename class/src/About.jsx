// import React from 'react'

import { useContext } from "react"
import { AppContext } from "./App"

function About() {
  const {count, setCount} = useContext(AppContext)
  return (
    <div onClick={() => setCount(count+1)}>
      {count}
    </div>
  )
}

export default About