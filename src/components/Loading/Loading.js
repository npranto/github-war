/*
 Title: Mitosis
 Author: Marquez, J
 Availability: https://codepen.io/arqex/pen/mKBcE
 */

import React, {Component} from 'react';
import randomColor from 'randomcolor';
import './Loading.css';

class Loading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            randomColors: []
        }

        // window.setInterval(() => {
        //     this.shuffleRandomColors()
        // }, 500);
    }

    componentDidMount() {
        this.setState({
            randomColors: [
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor()
            ]
        })
    }

    shuffleRandomColors() {

    }

    render() {
        return (
            <div className="loading">
                <div className="spinner">
                    <div className="ball ball-1" style={this.state.randomColors[0]}></div>
                    <div className="ball ball-2" style={this.state.randomColors[1]}></div>
                    <div className="ball ball-3" style={this.state.randomColors[2]}></div>
                    <div className="ball ball-4" style={this.state.randomColors[3]}></div>
                </div>
            </div>
        )
    }
}

export default Loading;