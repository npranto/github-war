import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './MainNavigation.css';

class MainNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabBars: [
                {
                    tabName: "Home",
                    url: '/'
                },
                {
                    tabName: "Battle",
                    url: '/battle'
                },
                {
                    tabName: "Popular",
                    url: '/popular'
                }
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
                                    <NavLink to={tabBar.url} activeClassName="active-tab" className="bar-link"> {tabBar.tabName} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default MainNavigation;