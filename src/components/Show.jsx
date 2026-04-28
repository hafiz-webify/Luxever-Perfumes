import {useState} from "react";
function Show() { 
    const[show,setShow]=useState(false)
    return <>
    
    <button onClick={()=>setShow(!show)}>Login</button>
    {show && <h3>Login</h3>}
    </>
}
export default Show;



