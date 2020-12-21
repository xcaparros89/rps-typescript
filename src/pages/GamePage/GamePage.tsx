import React, { useState } from "react";
import rockImg from "../../assets/rock.png";
import paperImg from "../../assets/paper.png";
import scissorsImg from "../../assets/scissors.png";
import { useHistory } from "react-router-dom";
import './GamePage.css';

type rpc = "rock" | "paper" | "scissors";

function GamePage(props: any) {
  let history = useHistory();
  const [scoreP, setScoreP] = useState<number>(0);
  const [scoreC, setScoreC] = useState<number>(0);
  const [img, setImg] = useState<{ player: string[]; computer: string[] }>({
    player: [rockImg, "rock"],
    computer: [rockImg, "rock"],
  });
  const [result, setResult] = useState<string>("Choose an option");

  const randomChoice = (): rpc => {
    let choices: rpc[] = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  };

  const assignImage = (choice: rpc) => {
    return choice === "rock"
      ? rockImg
      : choice === "paper"
      ? paperImg
      : scissorsImg;
  };

  const calcRoundWinner = (
    playerChoice: rpc,
    computerChoice: rpc,
    scoreP: number,
    scoreC: number,
    playerName: string
  ): { newScoreP: number; newScoreC: number; newResult: string } => {
    if (playerChoice === computerChoice) {
      return { newScoreP: scoreP, newScoreC: scoreC, newResult: "It's a tie" };
    }
    if (
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return {
        newScoreP: scoreP + 1,
        newScoreC: scoreC,
        newResult: `${playerName} wins the round`,
      };
    } else {
      return {
        newScoreP: scoreP,
        newScoreC: scoreC + 1,
        newResult: "Computer wins the round",
      };
    }
  };

  const choice = (playerChoice: rpc) => {
    let playerChoiceImg: string = assignImage(playerChoice);
    let computerChoice: rpc = randomChoice();
    let computerChoiceImg: string = assignImage(computerChoice);
    let { newScoreP, newScoreC, newResult } = calcRoundWinner(
      playerChoice,
      computerChoice,
      scoreP,
      scoreC,
      props.playerName
    );

    setImg({
      player: [playerChoiceImg, playerChoice],
      computer: [computerChoiceImg, computerChoice],
    });

    setScoreP(newScoreP);
    setScoreC(newScoreC);
    setResult(newResult);

    if (newScoreP === 5 || newScoreC === 5) {
      let winner =
        newScoreP === 5
          ? [props.playerName, newScoreP]
          : ["Computer", newScoreC];
      let loser =
        newScoreP === 5
          ? ["Computer", newScoreC]
          : [props.playerName, newScoreP];
      props.wAndL(winner, loser);
      setResult("");
      setImg({ player: [rockImg, "rock"], computer: [rockImg, "rock"] });
      setScoreP(0);
      setScoreC(0);
      history.push("/end");
    }
  };

  return (
    <div className="g-container">
      <div className="scores">
        <p>{`${props.playerName}: ${scoreP}`}</p>
        <p>{`Console: ${scoreC}`}</p>
      </div>
      <div className="g-container">
        <h1>{result}</h1>
        <div>
          <img
            className="player-hand"
            src={img.player[0]}
            alt={img.player[1]}
          />
          <img src={img.computer[0]} alt={img.computer[1]} />
        </div>
        <div>
          <button onClick={() => choice("rock")}>Rock</button>
          <button onClick={() => choice("paper")}>Paper</button>
          <button onClick={() => choice("scissors")}>Scissors</button>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
