import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './StartingPage.css'

function StartingPage(props:any){
    let [name, setName] = useState<string>('user')
    let handleChange = (e:any):void => setName(e.target.value)
    let history = useHistory();
    let startGame = () =>{
        props.setPlayerName(name);
        history.push("/game");
    }
    
    return(
        <div className="s-container">
            <h1>Rock Paper and Scissors</h1>
            <input type='text' placeholder='Choose a name' onChange={handleChange} />
            <button onClick={startGame}>Let's play</button>
        </div>
    )
}

export default StartingPage