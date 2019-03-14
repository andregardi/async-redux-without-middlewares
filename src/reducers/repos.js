import { REPOS_SUCCESS } from "../constants/ActionTypes";

const initialState = {
  repos: [],
  status: null
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case REPOS_SUCCESS:
      return { ...state, repos: action.repos, status: action.type };
    default:
      return { ...state, status: action.type };
  }
}
