import axios from 'axios';

const getGitHubUserScore = (username) => {
    return axios.get(`https://api.github.com/search/users?q=${username}`)
}

export default getGitHubUserScore;