
import React from 'react'
import { useEffect } from 'react'

const Count = () => {


    useEffect(()=>{
       let id = setInterval(()=>{
            // console.log(Date.now())
        },1000)
    },[])

   
  return (
    <div>Count</div>
  )
}

export default Count