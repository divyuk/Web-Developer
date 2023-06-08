import './ColorBoxes.css';
import Box from './Box';
export default function ColorBoxes({colors}){
    const boxes = []
    for (let i = 0; i < 25; i++) {
            boxes.push( <Box {...colors}/>)
    }
    return(
        <>
        <div className='Boxhorizontal'>
            {boxes}
        </div>

        
        </>
    )
}