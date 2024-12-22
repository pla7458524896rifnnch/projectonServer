import {apiClient} from "../instace/axiosSettings"

 
export const loginUser = async (username, password) => {
    try {
      const response = await apiClient.post("/login/", { username, password });
      return response.data;  
    } catch (error) {
      console.error("خطا در ورود:", error.response?.data || error.message);
      return { error: error.response?.data || "خطای ناشناخته" };
    }
  };
  export const registerUser = async (username, password) => {
    try {
      const response = await apiClient.post("/register/", { username, password });
      return response.data;  
    } catch (error) {
      console.error("خطا در ثبت‌نام:", error.response?.data || error.message);
      return { error: error.response?.data || "خطای ناشناخته" };
    }
  };
  export const logoutUser = async () => {
    try {
      const response = await apiClient.post("/logout/");
      return response.data;  
    } catch (error) {
      console.error("خطا در خروج:", error.response?.data || error.message);
      return { error: error.response?.data || "خطای ناشناخته" };
    }
  };