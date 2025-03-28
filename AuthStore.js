import { create } from "zustand";
import { loginUser, registerUser, logoutUser, fetchWhoAmI } from "../api/api"; 
import useGetCookie from "../Hooks/Cookie";
const {setCookie,removeCookie}=useGetCookie()
const AuthStore = create((set) => ({
  user: {}, 
  loading: false,  
  error: null,  
  login: async (username, password,rememberMe) => {
    set({ loading: true, error: null });
    const response = await loginUser({username, password});
    if (response.error) {
      set({ error: response.error, loading: false });
    } else {
      const Data=response.data.data
      // eslint-disable-next-line react-hooks/rules-of-hooks
      if (rememberMe) {
      await setCookie('accessToken',Data.access,{expires: 7})
        set({ user: response, loading: false });
      } else {
       await setCookie('accessToken',Data.access,{expires: 1})
        await fetchWhoAmI()
        set({ user: response, loading: false });
      }
    }
  },
  register: async (username, password) => {
    set({ loading: true, error: null });
    const response = await registerUser(username, password);
    if (response.error) {
      set({ error: response.error, loading: false });
    } else {
      set({ user: response, loading: false });
    }
  },
  logout: async () => {
    set({ loading: true, error: null });
    const response = await logoutUser();
    if (response.error) {
      set({ error: response.error, loading: false });
    } else {
      removeCookie('accessToken')
      set({ user: null, loading: false });
    }
  }
 
}));

export default AuthStore;
