import { REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE } from "../actions/repos";

const initialState = {
  repos: [],
  status: null
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case REPO_REQUEST:
      return { ...state, status: REPO_REQUEST };
    case REPO_SUCCESS:
      const { repos } = action;
      return { ...state, repos, status: REPO_SUCCESS };
    case REPO_FAILURE:
      return { ...state, status: REPO_FAILURE };
    default:
      return state;
  }
}
