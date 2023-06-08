import './Box.css'
import { useState } from 'react'

const randomNumber = ()=>{
    return Math.floor(Math.random()*16);
}

export default function Box(onebox){ 
    const [filling, setFilling] = useState(randomNumber());
    const handler = ()=>{
        setFilling(randomNumber())   
    };

    return(
        <div
           onClick={handler} className="one" style={{ backgroundColor: onebox[filling] }}>
        </div>
    )
}