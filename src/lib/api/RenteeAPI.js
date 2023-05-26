import axios from "axios";
const localStorage = window.localStorage;

const loadSearchList = async ({ keyword, pageIndex, pageSize }) => {
  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/rentees",
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

const loadBookList = async ({ keyword, pageIndex, pageSize }) => {
  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/rentee/books",
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
    import.meta.env.VITE_BEEP_API + "/api/rentee/devices",
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
  // const localStorage = window.localStorage;

  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/rentees/" + renteeId,
    // {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
    //   },
    // }
  );

  return response.data;
};

const putBookmark = async (renteeId) => {
  return await axios.request({
    url:
      import.meta.env.VITE_BEEP_API + "/api/rentees/" + renteeId + "/bookmark",
    method: "put",
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") },
  });
};

const deleteBookmark = async (renteeId) => {
  return await axios.delete(
    import.meta.env.VITE_BEEP_API + "/api/rentees/" + renteeId + "/bookmark",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
};

export default {
  loadSearchList,
  loadBookList,
  loadDeviceList,
  loadRenteeDetail,
  putBookmark,
  deleteBookmark,
};
