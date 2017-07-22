import React, {Component} from 'react';
import './MainNavigations.css';

class MainNavigations extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabBars: [
                "Home", 
                "Battle", 
                "Popular"
            ]
        }
    }
    render() {
        return (
            <div className="main-navigations">
                <ul className="list-of-bars">
                    {
                        this.state.tabBars.map((tabBar, index, tabBars) => {
                            return (
                                <li className="bar" key={index}> 
                                    <a href="#"> {tabBar}  </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default MainNavigations;