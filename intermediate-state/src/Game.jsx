import { useState } from "react";
import './Game.css'
export default function Game(){
    const [scores , setScore] = useState({p1Score:0 , p2Score:0})
    const [totalClicks, setTotalClicks] = useState(0);
    function p1Increase(){
        setScore((oldScores)=>{
            const newScores = {...oldScores, p1Score: oldScores.p1Score+1 };
            return newScores;
        });
        setTotalClicks((prevCount) => prevCount + 1);
    }
    function p2Increase(){
        setScore((oldScores)=>{
            const newScores = {...oldScores, p2Score: oldScores.p2Score+1 };
            return newScores;
        });
        setTotalClicks((prevCount) => prevCount + 1);
    }


    if (totalClicks === 10) {
        var winner = "";
        if (scores.p1Score > scores.p2Score) {
          winner = "Player 1 wins";
        } else if (scores.p1Score < scores.p2Score) {
          winner = "Player 2 wins";
        } else {
          winner = "It's a tie!";
        }
      }
    return(
        <>
        <p>Player 1 : {scores.p1Score}</p>
        <p>Player 2 : {scores.p2Score}</p>
        <p>Total Clicks: {totalClicks}</p>
        <button className="p1btn" onClick={p1Increase}>Player 1</button>
        <button className="p2btn" onClick={p2Increase}>Player 2</button>
        <h1 className="tag">{winner}</h1>
        </>
    )
}