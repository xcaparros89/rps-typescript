import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './StartingPage.css'
import {IStartProps} from '../../interfaces'

function StartingPage(props:IStartProps):JSX.Element{
    let [name, setName] = useState<string>('Player')
    let handleChange = (e:any):void => setName(e.target.value.trim())
    let history = useHistory();
    let startGame = () =>{
        name? props.setPlayerName(name):props.setPlayerName('Player');
        history.push("/game");
    }
    
    return(
        <div className="s-container">
            <h1>Rock Paper and Scissors</h1>
            <div className='s-buttons-container'>
            <input type='text' placeholder='Choose a name' onChange={handleChange} />
            <button onClick={startGame}>Let's play</button>
            </div>
        </div>
    )
}

export default StartingPage