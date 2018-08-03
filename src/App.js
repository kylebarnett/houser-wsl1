import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Header from './components/Header';
import House from './components/House';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {route}
      </div>
    );
  }
}

export default App;
