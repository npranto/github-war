import React, {Component} from 'react';
import './Result.css';
import getGitHubUserProfile from './../../utilities/getGitHubUserProfile.js';
import getGitHubUserScore from './../../utilities/getGitHubUserScore.js';
import Loading from './../Loading/Loading.js';

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            readyToRender: false
        }
    }

    sendScoreToDetermineWinner() {
        this.props.sendScoreToDetermineWinner(this.state.score);
    }

    componentDidMount() {
        getGitHubUserProfile(this.props.username)
            .then((profile) => {
                this.setState({
                    username: this.props.username,
                    name: profile.data.name,
                    avatar: profile.data.avatar_url,
                    location: profile.data.location,
                    followers: profile.data.followers,
                    following: profile.data.following,
                    publicRepos: profile.data.public_repos,
                    blog: profile.data.blog,
                    company: profile.data.company
                })
                getGitHubUserScore(this.state.username)
                    .then((score) => {
                        this.setState({
                            score: score.data.items[0].score.toFixed(2),
                            readyToRender: true
                        })
                        this.sendScoreToDetermineWinner();
                    })
            })
    }

    render() {

        let renderLoading = () => {
            return (
                <Loading />
            )
        };

        let renderResult = () => {
            return (
                <div className="result">
                    <div className="user-profile">
                        <p
                            className={`title ${(this.state.score >= this.props.opponentScore) ? 'winner' : 'loser'}`}>
                            {(this.state.score >= this.props.opponentScore) ? 'Winner' : 'Loser'}
                        </p>
                        <h3> Score: {this.state.score} </h3>
                        <img src={this.state.avatar} alt="github-avatar"/>
                        <h3> @{this.state.username} </h3>
                    </div>
                    <div className="stats">
                        <p> {this.state.name} </p>
                        <p> {this.state.location} </p>
                        <p> {this.state.company} </p>
                        <p> Followers: {this.state.followers} </p>
                        <p> Following: {this.state.following} </p>
                        <p> Public Repos: {this.state.publicRepos} </p>
                        <p>
                            <a href={this.state.blog} className="blog-url"> {this.state.blog} </a>
                        </p>
                    </div>
                </div>
            )
        }

        return (
            (!this.state.readyToRender)
                ? renderLoading()
                    : renderLoading()
        )
    }
}

export default Result;