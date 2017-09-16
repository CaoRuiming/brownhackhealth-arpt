import React, { Component } from 'react';
import logo from './logo.svg';
import Webcam from 'react-webcam';
import './App.css';

class App extends Component {
  render() {
		const videoStyle = {
			"transform": "rotateY(180deg)",
			"-webkit-transform": "rotateY(180deg)", /* Safari and Chrome */
			"-moz-transform": "rotateY(180deg)", /* Firefox */
		};

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
					style={ videoStyle }
				/>
      </div>
    );
  }
}

export default App;
