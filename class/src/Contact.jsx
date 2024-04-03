// import React from 'react'

import { useAppStore } from "./store"

function Contact() {
  const {count, increase, handleSubmit} = useAppStore()
  return (
    <div>Contact
      <p onClick={increase}>{count}</p>
      <button onClick={increase}>Hi</button>
    </div>
  )
}

export default Contact