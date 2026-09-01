import { useState } from "react";

export default function (){
    const [count,setCount]=useState(0);
    // const setCount=()=>{
    //     return count+1
    // }
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}