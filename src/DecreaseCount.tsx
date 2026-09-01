import { useState } from "react"


export default function(){

    const [count,setCount]=useState(0);
    const handleDecrease =()=>{
        setCount((prevCount)=>prevCount-1)
    }
   
    return(

        <div>
             <p>Decrease Counter {count}</p>

            <button onClick={handleDecrease}>Increase</button>
           
            
        </div>
    )
}