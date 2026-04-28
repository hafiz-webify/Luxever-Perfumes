import { useState } from "react"

function App() {
  const [color , setColor] = useState("White")
const changeColor = ()=> {if (color==="White") {
    setColor("Blue")
} else if(color==="Blue"){
    setColor("Green")
}else{
setColor("White")
}}
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h2>Color: {color}</h2>

      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  )
}

export default App