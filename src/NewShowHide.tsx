import { useState } from "react"


export default function NewShowHide(){
    const [isVisible,setIsVisible]= useState(false)
    

    return (


        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button> 
      {isVisible && <p>This is the hidden message!</p>}
        </div>
    )
}