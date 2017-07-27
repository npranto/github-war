import React, {Component} from 'react';
import FaStarO from 'react-icons/lib/fa/star-o';
import './Repo.css';

class Repo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="repo">
                <a href={this.props.repo.html_url}>
                    <h3 className="rank"> {this.props.rank} </h3>
                    <img src={this.props.repo.owner.avatar_url} alt="repo-image" className="repo-picture"/>
                    <h5 className="repo-name"> {this.props.repo.name} </h5>
                    <p className="stars"> <FaStarO /> {this.props.repo.stargazers_count}</p>
                    <div className="repo-owner">
                        <p className="repo-owner-name"> @{this.props.repo.owner.login} </p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Repo;