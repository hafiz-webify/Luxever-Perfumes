import { useState } from "react"

function Live() {
  const [text, setText] = useState("")

  return (
    <>
      <textarea 
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
    </>
  )
}

export default Live