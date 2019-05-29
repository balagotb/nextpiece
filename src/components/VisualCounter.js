import React from 'react';
import './VisualCounter.css';

const VisualCounter = ({grabBag}) => {
    return (
        <div className='counterContainer'>
            <div className='counter'>
                <img className={'smallPiece ' + (grabBag['I'] ? 'bright' : 'dim')} src={require('./img/tetris_I.png')} alt={grabBag['I']}/>
                <img className={'smallPiece ' + (grabBag['O'] ? 'bright' : 'dim')} src={require('./img/tetris_O.png')} alt={grabBag['O']}/>
                <img className={'smallPiece ' + (grabBag['T'] ? 'bright' : 'dim')} src={require('./img/tetris_T.png')} alt={grabBag['T']}/>
                <img className={'smallPiece ' + (grabBag['J'] ? 'bright' : 'dim')} src={require('./img/tetris_J.png')} alt={grabBag['J']}/>
                <img className={'smallPiece ' + (grabBag['L'] ? 'bright' : 'dim')} src={require('./img/tetris_L.png')} alt={grabBag['L']}/>
                <img className={'smallPiece ' + (grabBag['S'] ? 'bright' : 'dim')} src={require('./img/tetris_S.png')} alt={grabBag['S']}/>
                <img className={'smallPiece ' + (grabBag['Z'] ? 'bright' : 'dim')} src={require('./img/tetris_Z.png')} alt={grabBag['Z']}/>
            </div> 
        </div>
         
    )
}

export default VisualCounter;