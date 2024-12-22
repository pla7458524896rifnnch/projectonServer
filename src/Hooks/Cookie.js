 import Cookies from "js-cookie";
const useGetCookie = () => {
  const setCookie = (name, value, options = {}) => {
    Cookies.set(name, value, options);
  };
  const getCookie = (name) => {
    return Cookies.get(name);
  };

  const removeCookie = (name, options = {}) => {
    Cookies.remove(name, options);
  };
  const getAllCookies = () => {
    return Cookies.get();
  };
  return {
    setCookie,
    getCookie,
    removeCookie,
    getAllCookies,
  };
};

export default useGetCookie ;
