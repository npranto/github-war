import React, {Component} from 'react';
import './Repo.css';

class Repo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="repo">
                <h3 className="rank"> {this.props.rank} </h3>
                <img src={this.props.repo.owner.avatar_url} alt="repo-image" className="repo-picture"/>
                <h5 className="repo-name"> {this.props.repo.name} </h5>
                <p className="stars"> Stars: {this.props.repo.stargazers_count}</p>
                <div className="repo-owner">
                    <p className="repo-owner-name"> @{this.props.repo.owner.login} </p>
                </div>
            </div>
        )
    }
}

export default Repo;