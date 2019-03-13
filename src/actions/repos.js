import reposService from "../services/repos";

export const REPOS_REQUEST = "REPOS_REQUEST";
export const REPOS_SUCCESS = "REPOS_SUCCESS";
export const REPOS_ERROR = "REPOS_ERROR";
export const REPOS_NOT_FOUND = "REPOS_NOT_FOUND";

const getReposByUsername = async (dispatch, reposService, username) => {
  dispatch({ type: REPOS_REQUEST });
  try {
    const response = await reposService.getResposByUserName(username);
    dispatch({
      type: REPOS_SUCCESS,
      repos: response.data
    });
  } catch (error) {
    if (error.response && error.response.status === 404)
      dispatch({ type: REPOS_NOT_FOUND });
    else dispatch({ type: REPOS_ERROR });
  }
};

export const getReposByUsernameInjector = dispatch => {
  return username => {
    getReposByUsername(dispatch, reposService, username);
  };
};
