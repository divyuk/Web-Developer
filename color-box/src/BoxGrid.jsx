import ColorBoxes from "./ColorBoxes"
export default function BoxGrid(){
    const boxes = []
    for (let i = 0; i < 25; i++) {
            boxes.push(<ColorBoxes colors={colors}/>)
    }
    console.log(boxes)
    return(
    <div>
        {boxes}
    </div>

    )
}