import React, { Component } from 'react';
// import logo from './logo.svg';
import * as shuffle from 'array-shuffle';
import './App.css';

import Main from './Main';
import VisualQueue from '../components/VisualQueue';

let pieceCount = 4;
const grabBag = ['I', 'O', 'T', 'J', 'L', 'S', 'Z'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      pieceQueue: [],
      // pieceCounter: {
      //   'I': 0,
      //   'O': 0, 
      //   'T': 0, 
      //   'J': 0, 
      //   'L': 0, 
      //   'S': 0, 
      //   'Z': 0
      // }
    }
  }

  componentDidMount() {
    const { pieceQueue } = this.state;
    if(pieceCount >= 7) pieceCount = 7;
    else if(pieceCount <= 1) pieceCount = 1;
    let temp = pieceQueue.concat(shuffle(grabBag));
    this.setState({ pieceQueue: temp });
  }

  render(){
    const { pieceQueue } = this.state;
    return(
      <div className='App'>
        <Main>
          <VisualQueue pieceQueue={pieceQueue.slice(0, pieceCount)} onNextPiece={this.onNextPiece} />
          <h1>pieceQueue: {pieceQueue.toString()}</h1>
          {/* <h1>pieceCounter: {Object.entries(this.state.pieceCounter).toString()}</h1> */}
        </Main>
      </div>
    )
  }

  onNextPiece = () => {
    let temp = this.state.pieceQueue;
    temp.shift();
    if(temp.length <= (pieceCount - 1)) temp = temp.concat(shuffle(grabBag));
    this.setState({pieceQueue: temp});
  }

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
