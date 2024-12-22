import { create } from "zustand";
import { loginUser, registerUser, logoutUser, fetchWhoAmI } from "../api/api"; 
import useGetCookie from "../Hooks/Cookie";
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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      if (rememberMe) {
        const {setCookie}=useGetCookie();
        setCookie('accessToken',response.data.access,{expires: 1})
        set({ user: response, loading: false });
      } else {
        const {setCookie}=useGetCookie();
        setCookie('accessToken',response.data.access,{expires: 7})
        const res=await fetchWhoAmI()
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
      const {removeCookie}=useGetCookie();
      removeCookie('accessToken')
      set({ user: null, loading: false });
    }
  }
 
}));

export default AuthStore;
