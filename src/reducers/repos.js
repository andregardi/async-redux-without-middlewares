import {
  REPOS_REQUEST,
  REPOS_SUCCESS,
  REPOS_ERROR,
  REPOS_NOT_FOUND
} from "../actions/repos";

const initialState = {
  repos: [],
  status: null
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case REPOS_REQUEST:
      return { ...state, status: REPOS_REQUEST };
    case REPOS_SUCCESS:
      const { repos } = action;
      return { ...state, repos, status: REPOS_SUCCESS };
    case REPOS_ERROR:
      return { ...state, status: REPOS_ERROR };
    case REPOS_NOT_FOUND:
      return { ...state, status: REPOS_NOT_FOUND };
    default:
      return state;
  }
}
