import Axios from "axios";

const reposService = axios => ({
  getResposByUserName: async username =>
    axios.get(`https://api.github.com/users/${username}/repos`)
});

export default reposService(Axios);
