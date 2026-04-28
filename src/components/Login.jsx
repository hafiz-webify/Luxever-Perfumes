import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Email: ${email} | Password: ${password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input 
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input 
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login