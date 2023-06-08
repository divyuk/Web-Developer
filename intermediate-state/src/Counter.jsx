import { useState } from "react";

export default function Counter(){
    const [count , setCount] = useState(0);

    const handler1 = ()=>{
        setCount(currCount => currCount+3);
    }
    const handler3 = ()=>{
        setCount(currCount => currCount+3);
    }

    return(
        <>
        <p>Count is {count}</p>
        <button onClick={handler1} >+1</button>
        <button onClick={handler3} >+3</button>
        </>
    )
}