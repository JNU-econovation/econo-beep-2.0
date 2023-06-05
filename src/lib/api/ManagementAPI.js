import ApiController from "./ApiController";

const loadBooks = async ({ keyword, sort, pageIndex, pageSize }) => {
  const response = await ApiController({
    url: "/api/management/books",
    method: "GET",
    params: {
      name: keyword,
      sort: sort,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });

  return response.data;
};

const createBook = async (bookForm) => {
  return await ApiController({
    url: "/api/management/books",
    method: "POST",
    data: bookForm,
  });
};

const editBook = async (bookForm, bookId) => {
  return await ApiController({
    url: "/api/management/books/" + bookId,
    method: "PUT",
    data: bookForm,
  });
};

const deleteBook = async (bookId) => {
  return await ApiController({
    url: "/api/management/books/" + bookId,
    method: "DELETE",
  });
};

const loadDevices = async ({ keyword, sort, pageIndex, pageSize }) => {
  const response = await ApiController({
    url: "/api/management/devices",
    method: "GET",
    params: {
      name: keyword,
      sort: sort,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });

  return response.data;
};

const createDevice = async (deviceForm) => {
  return await ApiController({
    url: "/api/management/devices",
    method: "POST",
    data: deviceForm,
  });
};

const editDevice = async (deviceForm, deviceId) => {
  return await ApiController({
    url: "/api/management/devices/" + deviceId,
    method: "PUT",
    data: deviceForm,
  });
};

const deleteDevice = async (deviceId) => {
  return await ApiController({
    url: "/api/management/devices/" + deviceId,
    method: "DELETE",
  });
};

export default {
  loadBooks,
  createBook,
  editBook,
  deleteBook,
  loadDevices,
  createDevice,
  editDevice,
  deleteDevice,
};
