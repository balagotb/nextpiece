import React, { Component } from 'react';
// import logo from './logo.svg';
import * as shuffle from 'array-shuffle';
import './App.css';

import Main from './Main';
import VisualQueue from '../components/VisualQueue';
import VisualCounter from '../components/VisualCounter';

let pieceCount = 4;
let counter = 0;
const grabBag = ['I', 'O', 'T', 'J', 'L', 'S', 'Z'];
const clearCounter = {
  'I': 0,
  'O': 0, 
  'T': 0, 
  'J': 0, 
  'L': 0, 
  'S': 0, 
  'Z': 0
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      pieceQueue: [],
      pieceCounter: clearCounter
    }
  }

  componentDidMount() {
    const { pieceQueue } = this.state;
    if(pieceCount >= 7) pieceCount = 7;
    else if(pieceCount <= 1) pieceCount = 1;
    const tempQueue = pieceQueue.concat(shuffle(grabBag));
    this.setState({pieceQueue: tempQueue, pieceCounter: this.updatedCounter(tempQueue[0])});
  }

  render(){
    const { pieceQueue, pieceCounter } = this.state;
    return(
      <div className='App'>
        <Main>
          <VisualQueue pieceQueue={pieceQueue.slice(0, pieceCount)} onNextPiece={this.onNextPiece} />
          <VisualCounter pieceCounter={pieceCounter} />
          {/* <h1>pieceQueue: {pieceQueue.toString()}</h1> */}
        </Main>
      </div>
    )
  }

  onNextPiece = () => {
    let tempQueue = this.state.pieceQueue;
    tempQueue.shift();
    if(tempQueue.length <= (pieceCount - 1)) tempQueue = tempQueue.concat(shuffle(grabBag));
    this.setState({pieceQueue: tempQueue, pieceCounter: this.updatedCounter(tempQueue[0])});
  }

  updatedCounter = (piece) => {
    let tempCount;
    if(counter === 7){
      counter = 1;
      tempCount = {...clearCounter};
    }else {
      counter += 1;
      tempCount = {...this.state.pieceCounter};
    }
    tempCount[piece] += 1;
    return tempCount;
  }
}

export default App;
