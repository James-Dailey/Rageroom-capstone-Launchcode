import axios from "../axiosConfig";

class Routes {
  login(data) {
    return axios.post("/auth/login", data);
  }
  signup(data) {
    return axios.post("/auth/signup", data);
  }
}

export default new Routes();
