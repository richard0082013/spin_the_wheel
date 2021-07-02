import React, { Component } from "react";
import { TweenMax } from "gsap";
import "./style.css";
import pointers from "../../image/basic_pointer.png";

var Winwheel = require("WinWheel");

class Wheel extends Component {
  constructor() {
    super();
    this.state = {
      wheel: {},
      numb: []
    };
  }

  componentDidMount = () => {
    const _this = this;
    const onStopRotation = function (res) {
      _this.setState(currentState => {
        const newNumb = currentState.numb.slice(0, 4);
        return {
          ...currentState,
          numb: [res.text, ...newNumb]
        };
      });
    };

    var theWheel = new Winwheel({
      numSegments: 11, // Specify number of segments.
      outerRadius: 213, // Set outer radius so wheel fits inside the background.
      textFontSize: 28, // Set font size as desired.
      onStopRotation: onStopRotation,
      // Define segments including colour and text.
      segments: [
        { fillStyle: "#eae56f", text: "1" },
        { fillStyle: "#89f26e", text: "2" },
        { fillStyle: "#7de6ef", text: "3" },
        { fillStyle: "#e7706f", text: "4" },
        { fillStyle: "#eae56f", text: "5" },
        { fillStyle: "#89f26e", text: "6" },
        { fillStyle: "#7de6ef", text: "7" },
        { fillStyle: "#e7706f", text: "8" },
        { fillStyle: "#eae56f", text: "9" },
        { fillStyle: "#89f26e", text: "10" }
      ],
      // Turn pointer guide on.
      pointerGuide: {
        display: true,
        strokeStyle: "red",
        lineWidth: 3
      },
      // Specify the animation to use.
      animation: {
        type: "spinToStop",
        duration: 5, // Duration in seconds.
        spins: 5, // Number of complete spins.
        stopAngle: null,
        direction: "clockwise"
      }
    });

    var canvas = document.getElementById("canvas");
    canvas.onmousedown = function (evt) { };
    canvas.onmousemove = function (event) { };
    canvas.onmouseup = function (e) {
      theWheel.startAnimation();
      if (theWheel.stopAnimation) {
        resetWheel();
      }
    };
    function resetWheel() {
      theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
      theWheel.draw(); // Call draw to render changes to the wheel.
    }

    this.setState({
      wheel: theWheel
    });
  };
  render() {
    // console.log('Render new value', this.state.numb);
    return (
      <div align="center">
        <h1>Spin the Wheel</h1>
        <p>
          Here is a wheel which drag the mouse to start, and get a number for
          each spin.
        </p>
        <br />
        <br />
        <div className="the_wheel">
          <canvas id="canvas" width="434" height="434">
            <p style={{ color: "white" }} align="center">
              Sorry, your browser doesn't support canvas. Please try another.
            </p>
          </canvas>
          <img className="prizePointer" src={pointers} alt="V" />
        </div>
        <div>
          <p>Here is the results after last five spinning:</p>
          <p>{this.state.numb.join("-")}</p>
        </div>
      </div>
    );
  }
}

export default Wheel;
