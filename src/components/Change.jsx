import { useState } from "react";
function Change() {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
     return <>
<h1>{isLoggedIn ? "Logout" : "Login"}</h1>
<button onClick={()=> setIsLoggedIn (!isLoggedIn)}>Toggle</button>
</>
    
}
export default Change;

