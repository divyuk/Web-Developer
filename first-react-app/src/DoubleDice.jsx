export default function DoubleDice(){
    const dice1 = Math.floor(Math.random() * 3) +1;
    const dice2 = Math.floor(Math.random() * 3) +1;
    const styles = {color :dice1==dice2?"green":"red"};
    return(
        <div style={styles}>
            <h2>Double Dice</h2>
                {dice1 == dice2 && <h3>You Win </h3>}
            <p>Dice 1 : {dice1}</p>
            <p>Dice 2 : {dice2}</p>
        </div>
    )
}