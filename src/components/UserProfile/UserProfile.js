import React, {Component} from 'react';
import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-profile">
                <img src="https://avatars3.githubusercontent.com/u/13524077?v=4&s=400" alt=""/>
                <h3> @{this.props.username} </h3>
                <sup>
                    <a href="#" className="reddish"> Reset </a>
                </sup>
            </div>
        )
    }
}

export default UserProfile;