import axios from 'axios';

const getGitHubUserProfile = (username) => {
    return axios.get(`https://api.github.com/users/${username}`);
}

export default getGitHubUserProfile;