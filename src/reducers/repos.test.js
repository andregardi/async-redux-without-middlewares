import { REPOS_SUCCESS } from "../constants/ActionTypes";
import reposReducer from "./repos";

describe("repos service", () => {
  it("should handle REPOS_SUCCESS action", () => {
    const action = {
      type: REPOS_SUCCESS,
      repos: [{}]
    };
    const state = reposReducer(null, action);
    expect(state).toEqual({ repos: [{}], status: REPOS_SUCCESS });
  });
  it("should handle default case", () => {
    const action = {
      type: null
    };
    const state = reposReducer(null, action);
    expect(state).toEqual({ status: null });
  });
});
