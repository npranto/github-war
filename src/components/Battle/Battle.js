import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './Battle.css';
import SearchGitHubUser from './../SearchGitHubUser/SearchGitHubUser.js';
import UserProfile from './../UserProfile/UserProfile.js';
import Result from './../Result/Result.js';

class Battle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOne: {
                username: null,
                avatar: null,
                score: null
            },
            playerTwo: {
                username: null,
                avatar: null,
                score: null
            }
        }
    }

    updatePlayer(playerNumber, newUserName) {
        if(playerNumber === 'One') {
            this.setState({
                playerOne: {
                    username: newUserName,
                    avatar: `https://github.com/${newUserName}.png?size=200`
                }
            })
        }else {
            this.setState({
                playerTwo: {
                    username: newUserName,
                    avatar: `https://github.com/${newUserName}.png?size=200`
                }
            })
        }
    }

    onReset(playerNumber) {
        if(playerNumber === 'One') {
            this.setState({
                playerOne: {
                    username: null
                }
            })
        }else{
            this.setState({
                playerTwo: {
                    username: null
                }
            })
        }
    }

    queryToObject(query) {
        console.log('QUERY: ', query);
        let splitEachKeyAndValuePair = query.slice().split('&');
        return splitEachKeyAndValuePair.map((keyValue, index, keyValues) => {
            let keyAndValue = keyValue.slice().split('=');
            let obj = {}
            obj[keyAndValue[0]] = keyAndValue[1];
            return obj;
        })
    }



    render() {
        const renderPlayer = (playerNumber, player) => {
            if(!player.username){
                return (
                    <div className={`player-${playerNumber.toLowerCase()}`}>
                        <SearchGitHubUser playerNumber={playerNumber} onSubmitUsername={(newUsername) => this.updatePlayer(playerNumber, newUsername)} />
                    </div>
                )
            }else {
                return (
                    <div className={`player-${playerNumber.toLowerCase()}`}>
                        <UserProfile username={player.username} avatar={player.avatar} onReset={() => {this.onReset(playerNumber)}} />
                    </div>
                )
            }
        }

        const renderVersusAndBattle = () => {
            return (
                <div className="vs text-center">
                    <img src="https://static.comicvine.com/uploads/original/13/135592/5270582-4644160274-vs.pn.png" alt="versus logo"/>
                    <br/>
                    <br/>
                    <Link to={{
                        pathname: '/battle/result',
                        search: `?playerOneName=${this.state.playerOne.username}&playerTwoName=${this.state.playerTwo.username}`
                    }} className="reddish battle-button"> Battle </Link>
                </div>
            )
        }


        return (
            <Switch>
                <Route exact path={`${this.props.match.url}`} render={(props) => {
                    return (
                        <div className="battle">
                            <h1> Battle </h1>
                            <div className="battle-arena">
                                {
                                    renderPlayer("One", this.state.playerOne)
                                }
                                {
                                    renderVersusAndBattle()
                                }
                                {
                                    renderPlayer("Two", this.state.playerTwo)
                                }
                            </div>
                        </div>
                    )
                }}/>
                <Route path={`${this.props.match.url}/result`} render={(props) => {
                    return (
                        <div className="battle">
                            <h1> Result </h1>
                            <div className="battle-arena">
                                <Result
                                    username={this.queryToObject(props.location.search.slice(1))[0].playerOneName}
                                    sendScoreToDetermineWinner={(score) =>
                                        this.setState({
                                            playerOne: {
                                                score: score
                                            }
                                        })
                                    }
                                    opponentScore={this.state.playerTwo.score}
                                />
                                {
                                    renderVersusAndBattle()
                                }
                                <Result
                                    username={this.queryToObject(props.location.search.slice(1))[1].playerTwoName}
                                    sendScoreToDetermineWinner={(score) =>
                                        this.setState({
                                            playerTwo: {
                                                score: score
                                            }
                                        })
                                    }
                                    opponentScore={this.state.playerOne.score}
                                />
                            </div>
                        </div>
                    )
                }}/>
            </Switch>

        )
    }
}

export default Battle;