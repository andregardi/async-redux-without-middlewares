import axios from "axios";

export const reposServiceFunction = axios => ({
  getResposByUserName: async username =>
    axios.get(`https://api.github.com/users/${username}/repos`)
});

export default reposServiceFunction(axios);
