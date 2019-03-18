import { reposServiceFunction } from "./repos";

describe("legalOpinion repos service", () => {
  const mockAxios = {
    get: jest.fn()
  };

  it("should call axios with repos url", () => {
    const username = "user";
    reposServiceFunction(mockAxios).getResposByUserName(username);
    expect(mockAxios.get).toHaveBeenLastCalledWith(`https://api.github.com/users/${username}/repos`);
  });
});
