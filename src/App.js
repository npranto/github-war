import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MainNavigations from './components/MainNavigations/MainNavigations.js';
import Pages from './components/Pages/Pages.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavigations />
        <Pages />
      </div>
    );
  }
}

export default App;
