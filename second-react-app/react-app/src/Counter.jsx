import { useState } from "react";

export default function Counter(){
    const [num, setNum ] = useState(0);
    const increase = ()=>{
        setNum(num+1)
    }
    return(
        <>
        <p>The count is {num} </p>
        <button onClick={increase}>CLick</button>
        </>
    )
}