import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './App.css';

class App extends Component {
  render() {
		const videoStyle = {
			transform: 'rotateY(180deg)',
			'WebkitTransform': 'rotateY(180deg)', /* Safari and Chrome */
			'MozTransform': 'rotateY(180deg)', /* Firefox */
		};
    const overlayStyle = {
       position:'absolute',
    };

    const video_src = "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4"
    const img_src = "https://d2r1vs3d9006ap.cloudfront.net/s3_images/1156266/26621-17fv8xg_inline.png"
    const width = window.innerWeight - 400
    const height = window.innerHeight - 100

    const tabs = {
      width: width,
      height: 60,
      background: '#1959C9',
      marginBottom: 20,
    };

    const logo = {
      height: 50,
      width: 50,
      padding: 5,
      marginRight: 20,
      float: 'left',
    };

     const tab = {
      height: 50,
      width: 100,
      padding: 5,
      paddingTop:10,
      fontSize: 30,
      verticalAlign: 'center',
      marginRight: 30,
      float: 'left',
     };

    return (
      <div className="App">
        <div style={tabs}>
          <img src={img_src} style={logo}/>
          <div style={tab}>Workout</div>
          <div style={tab}>Schedule</div>
        </div>

				<Webcam
					audio={ false }
					width={ width }
					height={ height }
					style={ videoStyle }
				/>


      </div>
    );
  }
}

export default App;
