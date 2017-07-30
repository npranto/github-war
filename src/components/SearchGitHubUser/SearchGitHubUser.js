import React, {Component} from 'react';
import './SearchGitHubUser.css';

class SearchGitHubUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        e.preventDefault();
        this.setState({
            username: e.target.value
        });
    }

    onSubmitUsername() {
        this.props.onSubmitUsername(this.state.username);
    }

    render() {
        return (
            <div className="search-github-user">
                <h2> Player {this.props.playerNumber} </h2>
                <input type="text" placeholder="Username" onChange={(e) => this.onChangeUsername(e)} />
                <a href="#" className="submit" onClick={() => this.onSubmitUsername()}> Submit </a>
            </div>
        )
    }
}

export default SearchGitHubUser;