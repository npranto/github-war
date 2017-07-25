import React, {Component} from 'react';
import './Repos.css';

class Repos extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let renderLoading = () => {
			return (
				<h1> Loading... </h1>
			)
		}

		let renderPopularReposByLanguage = () => {
			return (
				<ul>
                    {
                        this.props.popularReposByLanguage.map((repo, index, repos) => {
                            return <li key={index}> {index+1}: {repo.name} by {repo.owner.login} </li>
                        })
                    }
				</ul>
			)
		}

		return (
			<div className="repos">
				{
                    !this.props.popularReposByLanguage
						? renderLoading()
							: renderPopularReposByLanguage()
				}
			</div>	
		)
	}
}

export default Repos