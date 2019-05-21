import React from 'react';
import './VisualCounter.css';

const VisualCounter = ({pieceCounter}) => {
    return (
        <div>
            <h1 className='counterTest'>
                <span style={{color: 'cyan'}}>{pieceCounter['I']}</span>
                <span style={{color: 'yellow'}}>{pieceCounter['O']}</span>
                <span style={{color: 'purple'}}>{pieceCounter['T']}</span>
                <span style={{color: 'blue'}}>{pieceCounter['J']}</span>
                <span style={{color: 'orange'}}>{pieceCounter['L']}</span>
                <span style={{color: 'green'}}>{pieceCounter['S']}</span>
                <span style={{color: 'red'}}>{pieceCounter['Z']}</span>
            </h1>
        </div>  
    )
}

export default VisualCounter;