import { getReposByUsername as action } from "./repos";
import { REPOS_SUCCESS } from "../constants/ActionTypes";

describe("legalOpinion repos action", () => {
  const username = "user";

  it("should handle the success case", async () => {
    const mockService = {
      getResposByUserName: username => ["not empty data"]
    };
    const mockDispatch = jest.fn();
    await action(mockDispatch, mockService, username);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: REPOS_SUCCESS,
      repos: ["not empty data"]
    });
  });
});
