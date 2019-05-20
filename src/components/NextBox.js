import React from 'react';
import './NextBox.css';

const NextBox = ({piece, leading=false, onNextPiece}) => {
    let pieceImg;
    switch(piece){
        case 'I': pieceImg = require('./img/tetris_I.png'); break;
        case 'J': pieceImg = require('./img/tetris_J.png'); break;
        case 'L': pieceImg = require('./img/tetris_L.png'); break;
        case 'O': pieceImg = require('./img/tetris_O.png'); break;
        case 'S': pieceImg = require('./img/tetris_S.png'); break;
        case 'T': pieceImg = require('./img/tetris_T.png'); break;
        case 'Z': pieceImg = require('./img/tetris_Z.png'); break;
        default: pieceImg = null; break;
    }

    return (
        <div className={'box ' + (leading ? 'leading' : 'next')} onClick={onNextPiece}>
            <img src={pieceImg} alt={piece} /> 
        </div>
    )
}

export default NextBox;