import React, { Component } from 'react';
import Header from '../components/header';
import Wheel from '../components/wheel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wheel />
      </div>
    );
  }
}

export default App;
