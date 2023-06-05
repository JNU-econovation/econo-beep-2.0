import ApiController from "./ApiController";

const loadProfile = async () => {
  const response = await ApiController({
    url: "/api/user/my/profile",
    method: "GET",
  });

  return response.data;
};

const loadRented = async ({ userId }) => {
  const response = await ApiController({
    url: `/api/user/${userId}/rents`,
    method: "GET",
  });

  return response.data;
};

const loadReturned = async ({ userId }) => {
  const response = await ApiController({
    url: `/api/user/${userId}/returns`,
    method: "GET",
  });

  return response.data;
};

const loadBookmark = async ({ userId }) => {
  const response = await ApiController({
    url: `/api/user/${userId}/bookmarks`,
    method: "GET",
  });

  return response.data;
};

const loadUserRole = async () => {
  const response = await ApiController({
    url: "/api/user/my/role",
    method: "GET",
  });

  return response.data;
};

export default {
  loadProfile,
  loadRented,
  loadReturned,
  loadBookmark,
  loadUserRole,
};
