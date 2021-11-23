import http from "../axios";

export default {
  index() {
    return http.get('api/v1/students');
  },
};
