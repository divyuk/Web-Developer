import { useState } from "react"

export default function Toggler(){
    const [emojiState , setemoji] = useState(true)
    const handler = ()=>{setemoji(!emojiState)
    }
    return(
        <>
            <p>{emojiState ?   "😀" : "😑" }</p>
            <button onClick={handler}  >Toggle</button>
        </>
    )
}