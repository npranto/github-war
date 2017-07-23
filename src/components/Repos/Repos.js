import React, {Component} from 'react';
import './Repos.css';

class Repos extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="repos"> 
				<ul>
					{
						this.props.popularReposByLanguage.map((repo, index, repos) => {
							return <li key={index}> {index+1}: {repo.name} by {repo.owner.login} </li>
						})
					}
				</ul>
			</div>	
		)
	}
}

export default Repos