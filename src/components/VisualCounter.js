import React from 'react';
import './VisualCounter.css';

const VisualCounter = ({grabBag}) => {
    return (
        <div>
            <h1 className='counterTest'>
                <span style={{color: 'cyan'}}>{grabBag['I']}</span>
                <span style={{color: 'yellow'}}>{grabBag['O']}</span>
                <span style={{color: 'purple'}}>{grabBag['T']}</span>
                <span style={{color: 'blue'}}>{grabBag['J']}</span>
                <span style={{color: 'orange'}}>{grabBag['L']}</span>
                <span style={{color: 'green'}}>{grabBag['S']}</span>
                <span style={{color: 'red'}}>{grabBag['Z']}</span>
            </h1>
        </div>  
    )
}

export default VisualCounter;