import React from 'react';
import './VisualQueue.css';
import NextBox from '../components/NextBox';

const VisualQueue = ({pieceQueue, onNextPiece}) => {
    return (
        <div className='queue'>
            {
                pieceQueue.map((piece, i) => {
                    return(<NextBox
                        key={i}
                        piece={piece}
                        leading={i ? false : true}
                        onNextPiece={onNextPiece} />)
                })
            }
        </div>  
    )
}

export default VisualQueue;