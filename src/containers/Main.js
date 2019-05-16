import React from 'react';
import './Main.css';

const Main = (props) => {
    return (
        <div className='main'>
            <h1 className='tc title'>NextPiece.io</h1>
            {props.children}
            {/* <h1>grabBag: {grabBag.toString()}</h1> */}
            {/* <h1>pieceCounter: {Object.entries(this.state.pieceCounter).toString()}</h1> */}
        </div>
    )
}

export default Main;