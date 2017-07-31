import React, {Component} from 'react';
import './Result.css';

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username
        }
        console.log(this.state.username)
    }

    render() {
        return (
            <div className="result">
                <div className="user-profile">
                    <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt=""/>
                    <h3> @npranto </h3>
                </div>
                <div className="stats">
                    <p> Nazmuz Shakib Pranto </p>
                    <p> Cambridge, MA </p>
                    <p> Lexia Learning </p>
                    <p> Followers: 10 </p>
                    <p> Following: 17 </p>
                    <p> Public Repos: 116 </p>
                    <p>
                        <a href="http://nsp.surge.sh/" className="blog-url"> http://nsp.surge.sh/ </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Result;