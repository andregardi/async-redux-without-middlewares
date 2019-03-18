import reposService from "../services/repos";
import {
  REPOS_REQUEST,
  REPOS_EMPTY,
  REPOS_SUCCESS,
  REPOS_NOT_FOUND,
  REPOS_ERROR
} from "../constants/ActionTypes";

export const getReposByUsername = async (dispatch, reposService, username) => {
  //Set the applications to a "Loading" state
  dispatch({ type: REPOS_REQUEST });

  try {
    const response = await reposService.getResposByUserName(username);
    const repos = response.data;
    const isReposEmpty = repos.length === 0;
    if (isReposEmpty) dispatch({ type: REPOS_EMPTY });
    else
      dispatch({
        type: REPOS_SUCCESS,
        repos
      });
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    if (isError404) dispatch({ type: REPOS_NOT_FOUND });
    else dispatch({ type: REPOS_ERROR });
  }
};

export const getReposByUsernameInjector = dispatch => {
  return username => {
    getReposByUsername(dispatch, reposService, username);
  };
};
