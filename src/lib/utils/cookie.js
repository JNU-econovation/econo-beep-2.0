import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = () => {
  return cookies.get(name);
};
