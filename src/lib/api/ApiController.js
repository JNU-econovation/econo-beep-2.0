import axios from "axios";
import { getCookie } from "../utils/cookie";

const IS_DEBUG_MODE = true;

const apiController = axios.create({
  baseURL: import.meta.env.VITE_BEEP_API,
});

apiController.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";

    if (localStorage.getItem("accessToken")) {
      config.headers["Authorization"] = `Bearer ${
        IS_DEBUG_MODE
          ? import.meta.env.VITE_ADMIN_DEBUG_TOKEN
          : localStorage?.getItem("accessToken")
      }`;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

apiController.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;
    if (err.response && err.response.status === 401) {
      try {
        await refreshAccessToken();
        return apiController.request(originalConfig);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

const refreshAccessToken = async () => {
  const response = await axios({
    url: import.meta.env.VITE_ECONO_AUTH + "/api/accounts/cookie/re-issue",
    method: "GET",
    headers: { Authorization: `Bearer ${getCookie("refresh_token")}` },
  });

  localStorage.setItem("accessToken", response.data.access);
};

export default apiController;
