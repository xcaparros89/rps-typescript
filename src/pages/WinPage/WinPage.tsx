import React from 'react';
import { Link } from 'react-router-dom';
import './WinPage.css'

function WinPage(props:any){
    return(
        <div className="w-container">
            <h1>{props.winner[0]} won the game!</h1>
            <p>{`${props.winner[0]} won the game with ${props.winner[1]} points vs ${props.loser[0]} with ${props.loser[1]} points`}</p>
            <div className='w-buttons-container'><Link to={'/'}><button>Return</button></Link><Link to={'/game'}><button>Play again</button></Link></div>
        </div>
    )
}

export default WinPage