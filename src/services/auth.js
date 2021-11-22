import http from "../axios";

export default {
  login(credentials) {
    return http.post('/sign_in', credentials);
  },
};
