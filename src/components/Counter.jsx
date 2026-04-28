import { useState } from "react";
function Counter() {
    const [count ,setCount]=useState(0)
    return <>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <button onClick={()=>setCount(count-1)}>decrease</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
}
export default Counter;





