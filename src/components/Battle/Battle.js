import React, {Component} from 'react';
import './Battle.css';
import SearchGitHubUser from './../SearchGitHubUser/SearchGitHubUser.js';
import UserProfile from './../UserProfile/UserProfile.js';

class Battle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOne: {
                username: null,
                avatar: null
            },
            playerTwo: {
                username: null,
                avatar: null
            }
        }
    }

    renderPlayer(playerNumber, player) {
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

    render() {
        return (
            <div className="battle">
                <h1> Battle </h1>
                <div className="battle-arena">
                    {
                        this.renderPlayer("One", this.state.playerOne)
                    }
                    <div className="vs text-center">
                        <img src="https://static.comicvine.com/uploads/original/13/135592/5270582-4644160274-vs.pn.png" alt="versus logo"/>
                        <br/>
                        <br/>
                        <a href="/" className="submit green"> Battle </a>
                    </div>
                    {
                        this.renderPlayer("Two", this.state.playerTwo)
                    }
                </div>
            </div>
        )
    }
}

export default Battle;