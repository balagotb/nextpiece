import React from 'react';
import './VisualQueue.css';

const VisualQueue = ({pieceCount, pieceQueue, onNextPiece}) => {
    return (
        <div>
            <h1>pieceQueue: {pieceQueue.toString()}</h1>
            <h1>{pieceCount}-Piece Queue: {pieceQueue.slice(0,pieceCount).toString()}</h1>
            <button onClick={onNextPiece}>Next</button>
        </div>
    )
}

export default VisualQueue;