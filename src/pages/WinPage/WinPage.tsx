import React from 'react';
import { Link } from 'react-router-dom';
import './WinPage.css'

function WinPage(props:any){
    return(
        <div className="w-container">
            <p>{`The ${props.winner[0]} won the game with ${props.winner[1]} points vs the ${props.loser[0]} with ${props.loser[1]} points`}</p>
            <div className='w-buttons-container'><Link to={'/'}>Return</Link><Link to={'/game'}>Play again</Link></div>
        </div>
    )
}

export default WinPage