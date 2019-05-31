import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='regulartext'>
                <p>Made with ♥ by Bernard Balagot</p>
            </div>
            <div className='disclaimer'>
                <p>This site was created for demonstrational purposes only; it is not a valid substitution for an actual game of Tetris.</p>
                <p>NextPiece is not sponsored or endored by The Tetris Company or its subsidiaries.</p> 
            </div>
        </div>
    )
}

export default Footer;