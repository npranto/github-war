import React, {Component} from 'react';
import './Repos.css';
import Repo from './../Repo/Repo.js';

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
				<ul className="popular-repos">
                    {
                        this.props.popularReposByLanguage
							.sort((a, b) => {
                        		return b.stargazers_count - a.stargazers_count;
							})
							.map((repo, index, repos) => {
                            return (
								<li key={index}>
									<Repo rank={index+1} repo={repo} />
								</li>
							)
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