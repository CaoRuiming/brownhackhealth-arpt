import React, { Component } from 'react';
import logo from './logo.svg';
import Webcam from 'react-webcam';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<Webcam
					audio={ false }
					height={ 460 }
					width={ 760 }
					style={{  }}
				/>
      </div>
    );
  }
}

export default App;
