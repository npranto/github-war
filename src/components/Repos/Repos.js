import React from 'react';
import './Repos.css';
import Repo from './../Repo/Repo.js';
import Loading from './../Loading/Loading.js';


const Repos = (props) => {
	let renderLoading = () => {
		return (
			<Loading />
		)
	}

	let renderPopularReposByLanguage = () => {
		return (
			<ul className="popular-repos">
				{
					props.popularReposByLanguage
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
				!props.popularReposByLanguage
					? renderLoading()
						: renderPopularReposByLanguage()
			}
		</div>
	)
}

export default Repos