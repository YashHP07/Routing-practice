import { useState } from "react"



export const FirstState=()=>{
    const [name,setName]=useState('Iron-man')
    const Updatename=()=>{
        setName('Captain America')
    }
    return(
        <>
            <h1>{name}</h1>
            <button onClick={Updatename}>Change Your Name</button>
        </>
    )
}