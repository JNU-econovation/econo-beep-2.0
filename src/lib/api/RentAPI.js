import axios from "axios";
const localStorage = window.localStorage;

const rentRentee = async (id) => {
  return await axios.request({
    url: process.env.REACT_APP_BEEP_API + "/api/rentees/" + id + "/rent",
    method: "put",
    headers: {Authorization: "Bearer " + localStorage.getItem("accessToken")}
  })
};

const returnRentee = async (id) => {
  return await axios.request({
    url: process.env.REACT_APP_BEEP_API + "/api/rentees/" + id + "/return",
    method: "put",
    headers: {Authorization: "Bearer " + localStorage.getItem("accessToken")}
  })
};

export default {rentRentee, returnRentee}
