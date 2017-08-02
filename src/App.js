import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import MainNavigation from './components/MainNavigation/MainNavigation.js';
import Pages from './components/Pages/Pages.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <MainNavigation />
                    <Pages />
                </div>
            </Router>
        );
    }
}

export default App;
