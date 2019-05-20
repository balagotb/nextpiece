import React from 'react';
import './Main.css';

const Main = (props) => {
    return (
        <div className='main'>
            <h1 className='tc title'>NextPiece.io</h1>
            {props.children}
        </div>
    )
}

export default Main;