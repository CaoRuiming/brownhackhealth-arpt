import React, { Component } from 'react';
import logo from './logo.svg';
import Webcam from 'react-webcam';
import './App.css';

class App extends Component {
  render() {
		const videoStyle = {
			padding: 20,
			transform: 'rotateY(180deg)',
			'-webkit-transform': 'rotateY(180deg)', /* Safari and Chrome */
			'-moz-transform': 'rotateY(180deg)', /* Firefox */
		};

    return (
      <div className="App">
				<Webcam
					audio={ false }
					width={ window.window.innerWidth - 100 }
					height={ window.window.innterheight - 100 }
					style={ videoStyle }
				/>
      </div>
    );
  }
}

export default App;
