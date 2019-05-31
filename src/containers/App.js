import React, { Component } from 'react';
// import logo from './logo.svg';
import * as shuffle from 'array-shuffle';
import './App.css';

import Main from './Main';
import VisualQueue from '../components/VisualQueue';
import VisualCounter from '../components/VisualCounter';
import Info from './Info';

let pieceCount = 4;
let counter = 0;
const pieceSet = ['I', 'O', 'T', 'J', 'L', 'S', 'Z'];
const clearValues = {
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
      grabBag: clearValues
    }
  }

  componentDidMount() {
    const { pieceQueue } = this.state;
    if(pieceCount >= 7) pieceCount = 7;
    else if(pieceCount <= 1) pieceCount = 1;
    const tempQueue = pieceQueue.concat(shuffle(pieceSet));
    this.setState({pieceQueue: tempQueue, grabBag: this.updateCounter(tempQueue[0])});
  }

  render(){
    const { pieceQueue, grabBag } = this.state;
    return(
      <div className='App'>
        <Main>
          <VisualQueue pieceQueue={pieceQueue.slice(0, pieceCount)} onNextPiece={this.onNextPiece} />
          <VisualCounter grabBag={grabBag} />
        </Main>
        <Info />
      </div>
    )
  }

  onNextPiece = () => {
    let tempQueue = this.state.pieceQueue;
    tempQueue.shift();
    if(tempQueue.length <= (pieceCount - 1)) tempQueue = tempQueue.concat(shuffle(pieceSet));
    this.setState({pieceQueue: tempQueue, grabBag: this.updateCounter(tempQueue[0])});
  }

  updateCounter = (piece) => {
    let tempBag;
    if(counter >= 7){
      counter = 1;
      tempBag = {...clearValues};
    }else {
      counter += 1;
      tempBag = {...this.state.grabBag};
    }
    tempBag[piece] += 1;
    return tempBag;
  }
}

export default App;
