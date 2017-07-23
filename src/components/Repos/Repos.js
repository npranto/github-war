import React, {Component} from 'react';
import './Repos.css';

class Repos extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const encodeURI = window.encodeURI(
			`https://api.github.com/search/repositories?q=stars%3E1+language:${this.props.currentLanguage}&sort=stars&order=desc&type=Repositories`
		)
		// installed axios
		// just create a get() request here...
	}

	render() {
		return (
			<div className="repos"> 
				<h1> Repos </h1>
			</div>	
		)
	}
}

export default Repos