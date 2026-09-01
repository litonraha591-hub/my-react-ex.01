import { useState } from "react"


export default function(){

    const [count,setCount]=useState(0);
   
    const handleIncrease =()=>{
        setCount((prevCount)=>prevCount+1)
    }
    return(

        <div>
            <p>Increase Counter {count}</p>
            <button onClick={handleIncrease}>Decrease</button>
        </div>
    )
}