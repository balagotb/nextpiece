import React from 'react';
import './VisualQueue.css';
import NextBox from '../components/NextBox';

const VisualQueue = ({pieceCount, pieceQueue, onNextPiece}) => {
    return (
        <div>
            <h1>pieceQueue: {pieceQueue.toString()}</h1>
            <h1>{pieceCount}-Piece Queue: {pieceQueue.slice(0,pieceCount).toString()}</h1>
            <button onClick={onNextPiece}>Next</button>
            
            <div className='queue'>
                <NextBox piece={pieceQueue[0]} />
                <NextBox piece={pieceQueue[1]} />
                <NextBox piece={pieceQueue[2]} />
                <NextBox piece={pieceQueue[3]} />
            </div>  
        </div>
    )
}

export default VisualQueue;