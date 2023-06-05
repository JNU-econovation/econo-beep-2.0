import ApiController from "./ApiController";

const loadSearchList = async ({ keyword, pageIndex, pageSize }) => {
  const response = await ApiController({
    url: "/api/rentees",
    method: "GET",
    params: {
      name: keyword,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });

  return response.data;
};

const loadBookList = async ({ keyword, pageIndex, pageSize }) => {
  const response = await ApiController({
    url: "/api/rentee/books",
    method: "GET",
    params: {
      name: keyword,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });

  return response.data;
};

const loadDeviceList = async ({ keyword, pageIndex, pageSize }) => {
  const response = await ApiController({
    url: "/api/rentee/devices",
    method: "GET",
    params: {
      name: keyword,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });

  return response.data;
};

const loadRenteeDetail = async (renteeId) => {
  const response = await ApiController({
    url: `/api/rentees/${renteeId}`,
    method: "GET",
  });

  return response.data;
};

const putBookmark = async (renteeId) => {
  return await ApiController({
    url: `/api/rentees/${renteeId}/bookmark`,
    method: "PUT",
  });
};

const deleteBookmark = async (renteeId) => {
  return await ApiController({
    url: `/api/rentees/${renteeId}/bookmark`,
    method: "DELETE",
  });
};

export default {
  loadSearchList,
  loadBookList,
  loadDeviceList,
  loadRenteeDetail,
  putBookmark,
  deleteBookmark,
};
