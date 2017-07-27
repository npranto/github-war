import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import MainNavigations from './components/MainNavigations/MainNavigations.js';
import Pages from './components/Pages/Pages.js';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <MainNavigations />
            <Pages />
          </div>
        </Router>
    );
  }
}

export default App;
