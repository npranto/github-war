import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Battle.css';
import SearchGitHubUser from './../SearchGitHubUser/SearchGitHubUser.js';
import UserProfile from './../UserProfile/UserProfile.js';

class Battle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOne: {
                username: null
            },
            playerTwo: {
                username: null
            }
        }
    }

    // renderSearchGitHubUserInterface() {
    //     return (
    //         <section className="render-search-github-user-interface">
    //             <div className="player-one">
    //                 <SearchGitHubUser playerNumber="One" />
    //             </div>
    //             <div className="vs">
    //                 <img src="https://static.comicvine.com/uploads/original/13/135592/5270582-4644160274-vs.pn.png" alt="versus logo"/>
    //             </div>
    //             <div className="player-two">
    //                 <SearchGitHubUser playerNumber="Two" />
    //             </div>
    //         </section>
    //     )
    // }
    //
    // renderUserProfileInterface() {
    //     return (
    //         <section className="render-user-profile-interface">
    //             <div className="player-one">
    //                 <UserProfile />
    //             </div>
    //             <div className="vs">
    //                 <img src="https://static.comicvine.com/uploads/original/13/135592/5270582-4644160274-vs.pn.png" alt="versus logo"/>
    //             </div>
    //             <div className="player-two">
    //                 <UserProfile />
    //             </div>
    //         </section>
    //     )
    // }

    renderPlayerOne() {
        if(!this.state.playerOne.username){
            return (
                <div className="player-one">
                    <SearchGitHubUser playerNumber="One" onSubmitUsername={(newUsername) => this.updatePlayerUsername("One", newUsername)} />
                </div>
            )
        }else {
            return (
                <div className="player-one">
                    <UserProfile username={this.state.playerOne.username} />
                </div>
            )
        }
    }

    renderPlayerTwo() {
        if(!this.state.playerTwo.username){
            return (
                <div className="player-two">
                    <SearchGitHubUser playerNumber="Two" onSubmitUsername={(newUsername) => this.updatePlayerUsername("Two", newUsername)} />
                </div>
            )
        }else {
            return (
                <div className="player-one">
                    <UserProfile username={this.state.playerOne.username} />
                </div>
            )
        }
    }

    updatePlayerUsername(playerNumber, newUserName) {
        if(playerNumber === 'One') {
            this.setState({
                playerOne: {
                    username: newUserName
                }
            })
        }else {
            this.setState({
                playerTwo: {
                    username: newUserName
                }
            })
        }
    }

    render() {
        return (
            <div className="battle">
                <h1> Battle </h1>
                <div className="battle-arena">
                    {
                        this.renderPlayerOne()
                    }
                    <div className="vs">
                        <img src="https://static.comicvine.com/uploads/original/13/135592/5270582-4644160274-vs.pn.png" alt="versus logo"/>
                    </div>
                    {
                        this.renderPlayerTwo()
                    }
                </div>
            </div>
        )
    }
}

export default Battle;