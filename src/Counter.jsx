import { useState } from "react"



export const Counters=()=>{
    console.log("zeros phase")
    const [count,setCount]=useState(0)
    const UpdateNum=()=>{
        setCount(count+1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={UpdateNum}>Change Me</button>
        </>
    )
}