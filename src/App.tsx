import React, {useState} from 'react';
import './styles.css';
import {Route, Switch} from 'react-router-dom';
import StartingPage from './pages/StartingPage/StartingPage';
import GamePage from './pages/GamePage/GamePage';
import WinPage from './pages/WinPage/WinPage';

function App() {

  const [playerName, setPlayerName] = useState<string>('Player')
  const [winner, setWinner] = useState<string>("");
  const [loser, setLoser] = useState<string>("")

  return (
    <Switch>
      <Route exact path='/' render={()=><StartingPage setPlayerName={setPlayerName} />}/>
      <Route exact path='/game' render={()=><GamePage wAndL={(x:string,y:string):void=>{setWinner(x); setLoser(y)}} playerName={playerName} />}/>
      <Route exact path='/end' render={()=><WinPage winner={winner} loser={loser} playerName={playerName} />}/>
    </Switch>
  );
}

export default App;
