import React from 'react';
import './VisualCounter.css';

const VisualCounter = ({grabBag}) => {
    return (
        <div className='counterContainer'>
            <div className='counter'>
                <img className={'smallPiece ' + (grabBag['I'] ? 'bright' : 'dimmed')} src={require('./img/tetris_I.png')} alt='I'/>
                <img className={'smallPiece ' + (grabBag['O'] ? 'bright' : 'dimmed')} src={require('./img/tetris_O.png')} alt='O'/>
                <img className={'smallPiece ' + (grabBag['T'] ? 'bright' : 'dimmed')} src={require('./img/tetris_T.png')} alt='T'/>
                <img className={'smallPiece ' + (grabBag['J'] ? 'bright' : 'dimmed')} src={require('./img/tetris_J.png')} alt='J'/>
                <img className={'smallPiece ' + (grabBag['L'] ? 'bright' : 'dimmed')} src={require('./img/tetris_L.png')} alt='L'/>
                <img className={'smallPiece ' + (grabBag['S'] ? 'bright' : 'dimmed')} src={require('./img/tetris_S.png')} alt='S'/>
                <img className={'smallPiece ' + (grabBag['Z'] ? 'bright' : 'dimmed')} src={require('./img/tetris_Z.png')} alt='Z'/>
            </div> 
        </div>
         
    )
}

export default VisualCounter;