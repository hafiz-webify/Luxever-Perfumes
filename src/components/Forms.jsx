import { useState } from "react"

function Forms() {
  const [name, setName] = useState("")

  return (
    <>
      <input type="text"
      placeholder="Please Enter Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <h2>Your Name: {name}</h2>
    </>
  )
}

export default Forms