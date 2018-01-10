import React, { Component } from 'react';
import { TweenMax } from "gsap";
import './style.css';
import pointers from "../../image/basic_pointer.png"

var Winwheel = require('WinWheel');

class Wheel extends Component {
	constructor() {
		super();
		this.state = {
			wheel: {}
		}
	}

	componentDidMount = () => {

		const onStopRotation = function(res) {
			console.log('fuck you richard!', res.text);
		}

		var theWheel = new Winwheel (
			{
				'numSegments'  : 10,     // Specify number of segments.
				'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
				'textFontSize' : 28,    // Set font size as desired.
				'onStopRotation': onStopRotation,
				'segments'     :        // Define segments including colour and text.
				[
					 {'fillStyle' : '#eae56f', 'text' : '1'},
					 {'fillStyle' : '#89f26e', 'text' : '2'},
					 {'fillStyle' : '#7de6ef', 'text' : '3'},
					 {'fillStyle' : '#e7706f', 'text' : '4'},
					 {'fillStyle' : '#eae56f', 'text' : '5'},
					 {'fillStyle' : '#89f26e', 'text' : '6'},
					 {'fillStyle' : '#7de6ef', 'text' : '7'},
					 {'fillStyle' : '#e7706f', 'text' : '8'},
					 {'fillStyle' : '#eae56f', 'text' : '9'},
					 {'fillStyle' : '#89f26e', 'text' : '10'}
				],
				'pointerGuide' :        // Turn pointer guide on.
        {
            'display'     : true,
            'strokeStyle' : 'red',
            'lineWidth'   : 3
        },
				'animation' :           // Specify the animation to use.
				{
						'type'     : 'spinToStop',
						'duration' : 5,     // Duration in seconds.
						'spins'    : 5,     // Number of complete spins.
						'stopAngle'    : null,
						'direction'    : 'clockwise',
				}
		});

		var canvas = document.getElementById('canvas');
		canvas.onmousedown = function(evt) {
		};
		canvas.onmousemove = function(event) {
		};
		canvas.onmouseup = function(e) {
			theWheel.startAnimation();
			if(theWheel.stopAnimation) {
				resetWheel();
			}
		};
		function resetWheel()
		{
  // Stop the animation, false as param so does not call callback function.
				theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
				theWheel.draw();                // Call draw to render changes to the wheel.        // Reset to false to power buttons and spin can be clicked again.
		}
		// function alertPrize()
		// {
		// 	var numPointed = theWheel.getIndicatedSegment();
		// 	console.log(theWheel.segments[numPointed]);

		// }

		this.setState({
			wheel: theWheel
		})
	}
	render() {


		return (
			<div align="center">
							<h1>Spin the Wheel</h1>
							<p>Here is a wheel which drag the mouse to start, and get a number for each spin.</p>
							<br />
							<br />
							<div className="the_wheel">
									<canvas id="canvas" width="434" height="434" >
											<p style={{color: "white"}} align="center">Sorry, your browser doesn't support canvas. Please try another.</p>
									</canvas>
									<img className="prizePointer" src={pointers} alt="V" />
							</div>
					</div>
		);
	}
}

export default Wheel;
