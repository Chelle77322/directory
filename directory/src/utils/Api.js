import axios from "axios";

const Api = {
  getUsers: function () {
    return axios.get("https://randomuser.me/api?results=300&nat=au");
  },
};
console.log(Api);
export default Api;
