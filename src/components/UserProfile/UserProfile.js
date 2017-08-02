import React from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
    const onReset = () => {
        props.onReset();
    }

    return (
        <div className="user-profile">
            <img src={props.avatar} alt=""/>
            <h3> @{props.username} </h3>
            <sup>
                <a href="/" className="reddish" onClick={() => onReset()}> Reset </a>
            </sup>
        </div>
    )
}

export default UserProfile;