import React, {useState} from 'react';
import './styles.css';
import {Route, Switch} from 'react-router-dom';
import StartingPage from './pages/StartingPage/StartingPage';
import GamePage from './pages/GamePage/GamePage';
import WinPage from './pages/WinPage/WinPage';
import {IGameProps, IStartProps, IWinProps} from './interfaces'

function App() {

  const [playerName, setPlayerName] = useState<string>('Player')
  const [winner, setWinner] = useState<[string, number]>(['', 0]);
  const [loser, setLoser] = useState<[string, number]>(['', 0])

  const winProps:IWinProps = {
    winner, loser, playerName
  }

  const gameProps:IGameProps = {
    setWinner, setLoser, playerName
  }

  const startProps:IStartProps = {
    setPlayerName
  }


  return (
    <Switch>
      <Route exact path='/' render={()=><StartingPage {...startProps} />}/>
      <Route exact path='/game' render={()=><GamePage {...gameProps} />}/>
      <Route exact path='/end' render={()=><WinPage {...winProps} />}/>
    </Switch>
  );
}

export default App;
