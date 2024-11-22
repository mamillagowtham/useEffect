import React, { useState } from 'react'
 
const Ternary = () => {
    const [timer,setTimer] = useState(true)
  return (
    <div>Ternary
        {timer && <p>welcome to new topic</p>}
        <button onClick={()=>setTimer(!timer)}>
           
       {timer ? "hide " : "show"}
        </button>
    </div>
  )
}

export default Ternary