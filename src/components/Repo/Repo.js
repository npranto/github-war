import React from 'react';
import FaStarO from 'react-icons/lib/fa/star-o';
import './Repo.css';

const Repo = (props) => {
    return (
    <div className="repo">
        <a href={props.repo.html_url}>
            <h3 className="rank"> {props.rank} </h3>
            <img src={props.repo.owner.avatar_url} alt="repo-avatar" className="repo-picture"/>
            <h5 className="repo-name"> {props.repo.name} </h5>
            <p className="stars"> <FaStarO /> {props.repo.stargazers_count}</p>
            <div className="repo-owner">
                <p className="repo-owner-name"> @{props.repo.owner.login} </p>
            </div>
        </a>
    </div>
)
}

export default Repo;