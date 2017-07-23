import axios from 'axios';

const getPopularReposByLanguage = (language) => {
	return axios.get('https://api.github.com/search/repositories?q=stars%3E1+language:all&sort=stars&order=desc&type=Repositories')
}

export default getPopularReposByLanguage;