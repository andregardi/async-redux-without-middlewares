import reposService from "../services/repos";

export const REPO_REQUEST = "REPO_REQUEST";
export const REPO_SUCCESS = "REPO_SUCCESS";
export const REPO_FAILURE = "REPO_FAILURE";

export const getReposByUsername = async (dispatch, username) => {
  dispatch({ type: REPO_REQUEST });
  try {
    const response = await reposService.getResposByUserName(username);
    dispatch({
      type: REPO_SUCCESS,
      repos: response.data
    });
  } catch (error) {
    dispatch({ type: REPO_FAILURE });
  }
};
