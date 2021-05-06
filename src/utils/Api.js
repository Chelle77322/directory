import axios from "axios";

const Api = {
  getUsers: function () {
    return axios.get("https://randomuser.me/api?results=200&nat=au");
  },
};
//console.log(Api);
export default Api;
