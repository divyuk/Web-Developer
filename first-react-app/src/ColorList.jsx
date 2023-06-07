export default function ColorList({coloring}){
    console.log(coloring[0])
    const mycolors = coloring.map((e)=><li style={ {color:e}}> {e}</li>);
    return(
        <>
        <h1>My Colors</h1>
        <ul>{mycolors}</ul>
        
        </>
    )
};