import axios from "axios";

const localStorage = window.localStorage;

const rentRentee = async (renteeId) => {
  return await axios.put(
    process.env.REACT_APP_BEEP_API +
    "/api/rentee/" +
    renteeId +
    "/rent?accessToken=" +
    localStorage.getItem('accessToken')
  );
};

const returnRentee = async (renteeId) => {
  return await axios.put(
    process.env.REACT_APP_BEEP_API +
    "/api/rentee/" +
    renteeId +
    "/return?accessToken=" +
    localStorage.getItem('accessToken')
  );
};

export default {rentRentee, returnRentee}
