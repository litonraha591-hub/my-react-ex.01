import { useState } from "react"


export default function ShowHide(){
    const [isVisible,seIsVisible]=useState(true);

    return(

        <div>
            <button onClick={()=>seIsVisible(!isVisible)}>{isVisible?'Hide':'Show'} Message</button>
            {isVisible && <p>This is the hidden message!</p>}
        </div>
    )
}