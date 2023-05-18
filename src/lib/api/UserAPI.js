import axios from "axios";

const localStorage = window.localStorage;

const loadProfile = async () => {
  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/user/my/profile",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );

  return response.data;
};

const loadRented = async ({ userId }) => {
  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/user/" + userId + "/rents"
  );

  return response.data;
};

const loadReturned = async ({ userId }) => {
  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/user/" + userId + "/returns"
  );

  return response.data;
};

const loadBookmark = async ({ userId }) => {
  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/user/" + userId + "/bookmarks"
  );

  return response.data;
};

const loadUserRole = async () => {
  const response = await axios.get(
    import.meta.env.VITE_BEEP_API + "/api/user/my/role",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken"),
      },
    }
  );

  return response.data;
};

export default {
  loadProfile,
  loadRented,
  loadReturned,
  loadBookmark,
  loadUserRole,
};
