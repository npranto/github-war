import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Home.css';

class Home extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                <h1> Home </h1>
                <h2 className="text-center"> GitHub War </h2>
                <p className="text-center"> Welcome to the GitHub battlefield! </p>
                <div className="battle-button-container text-center">
                    <Link to="/battle" className="battle-button"> Battle </Link>
                </div>
            </div>
        )
    }
}

export default Home;
