import axios from "axios";

const localStorage = window.localStorage;

const loadSearchList = async ({ keyword, pageIndex, pageSize}) => {
  const response = await axios.get(process.env.REACT_APP_BEEP_API + '/api/rentee/search', {
    params: {
      name: keyword,
      pageIndex: pageIndex,
      pageSize: pageSize
    }
  })

  return response.data;
}

const loadBookList = async ({ keyword, pageIndex, pageSize }) => {
  const response = await axios.get(
    process.env.REACT_APP_BEEP_API + "/api/rentee/search/book",
    {
      params: {
        name: keyword,
        pageIndex: pageIndex,
        pageSize: pageSize,
      },
    }
  );

  return response.data;
};

const loadDeviceList = async ({ keyword, pageIndex, pageSize }) => {
  const response = await axios.get(
    process.env.REACT_APP_BEEP_API + "/api/rentee/search/device",
    {
      params: {
        name: keyword,
        pageIndex: pageIndex,
        pageSize: pageSize,
      },
    }
  );

  return response.data;
};

const loadRenteeDetail = async (renteeId) => {
  const response = await axios.get(
    process.env.REACT_APP_BEEP_API + "/api/rentee/" + renteeId,
    {
      params: {
        accessToken: localStorage?.getItem("accessToken"),
      },
    }
  );

  return response.data;
};

const putBookmark = async (renteeId) => {
  const response = await axios.put(
    process.env.REACT_APP_BEEP_API +
    "/api/rentee/" +
    renteeId +
    "/bookmark?accessToken=" +
    localStorage.getItem("accessToken")
  );

  return response;
};

const deleteBookmark = async (renteeId) => {
  const response = await axios.delete(
    process.env.REACT_APP_BEEP_API + "/api/rentee/" + renteeId + "/bookmark",
    {
      params: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }
  );

  return response;
};



export default {loadSearchList, loadBookList, loadDeviceList, loadRenteeDetail, putBookmark, deleteBookmark}
