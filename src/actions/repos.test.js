import { getReposByUsername as action } from "./repos";
import {
  REPOS_SUCCESS,
  REPOS_EMPTY,
  REPOS_NOT_FOUND,
  REPOS_ERROR
} from "../constants/ActionTypes";

describe("repos action", () => {
  const username = "user";
  const mockDispatch = jest.fn();
  const mockService = {};

  beforeEach(() => {
    mockDispatch.mockReset();
  });

  it("should handle the success case", async () => {
    mockService.getResposByUserName = () => ({
      data: ["some data"]
    });

    await action(mockDispatch, mockService, username);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: REPOS_SUCCESS,
      repos: ["some data"]
    });
  });

  it("should handle the empty case", async () => {
    mockService.getResposByUserName = () => ({
      data: []
    });
    await action(mockDispatch, mockService, username);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: REPOS_EMPTY
    });
  });

  it("should handle the 404 case", async () => {
    mockService.getResposByUserName = () => {
      throw { response: { status: 404 } };
    };
    await action(mockDispatch, mockService, username);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: REPOS_NOT_FOUND
    });
  });

  it("should handle the connection error", async () => {
    mockService.getResposByUserName = () => {
      throw {};
    };
    await action(mockDispatch, mockService, username);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: REPOS_ERROR
    });
  });
});
