import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Header from './components/Header';
import House from './components/House';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Dashboard />
          <House />
        </div>
        <Wizard />
        <Header />
      </div>
    );
  }
}

export default App;
