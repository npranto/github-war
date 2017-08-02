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
        this.changeBallBackgroundByInterval();
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

    changeBallBackgroundByInterval() {
        window.setInterval(() => {
            this.setState({
                randomColors: this.shuffleRandomColors()
            })
        }, 1500);
    }

    shuffleRandomColors() {
        let copyOfRandomColors = this.state.randomColors.slice();
        for(let currentIndex=0; currentIndex<copyOfRandomColors.length; currentIndex++) {
            let randomIndex = Math.floor(Math.random() * (copyOfRandomColors.length));
            let copyOfCurrentIndexValue = copyOfRandomColors[currentIndex];
            copyOfRandomColors[currentIndex] = copyOfRandomColors[randomIndex];
            copyOfRandomColors[randomIndex] = copyOfCurrentIndexValue;
        }
        return copyOfRandomColors;
    }

    render() {
        return (
            <div className="loading">
                <div className="spinner">
                    <div className="ball ball-1" style={{backgroundColor: this.state.randomColors[0]}}></div>
                    <div className="ball ball-2" style={{backgroundColor: this.state.randomColors[1]}}></div>
                    <div className="ball ball-3" style={{backgroundColor: this.state.randomColors[2]}}></div>
                    <div className="ball ball-4" style={{backgroundColor: this.state.randomColors[3]}}></div>
                </div>
            </div>
        )
    }
}

export default Loading;