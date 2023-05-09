import axios from "axios";

export function requestGetRepos() {
  return axios.request({
    method: "get",
    url: "https://api.github.com/orgs/reactjs/repos",
  });
}
