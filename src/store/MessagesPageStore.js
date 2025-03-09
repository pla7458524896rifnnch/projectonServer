import { create } from "zustand";
import { deleteMessages, fetchAllAdmins, fetchAllAdminsByDirect, fetchAllMessages, fetchAllUsers, fetchWhoAmI, getChats, SendDirectAdmin} from "../api/api";

const MessagesPageStore = create((set) => ({
  messages: null,  
  loading: false,
  loadingAdmins:false,
  data: [],
  dt:null,
  error: null,
  users:[],
  // Fetch all messages
  fetchAllMessages: async () => {
    set({ loading: true, error: null });
    try {
      const res=await fetchWhoAmI();
      const response = await getChats(res.data.phoneNumber);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ messages: response,user:res.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
fetchAllUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetchAllUsers();
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ users: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  // Fetch all admins
  fetchAllAdmins: async () => {
    set({ loadingAdmins: true, error: null });
    try {
      const response = await fetchAllAdminsByDirect();
      if (response.error) {
        set({ loadingAdmins: false, error: response.error });
      } else {
        set({ data: response.data, loadingAdmins: false });
      }
    } catch (error) {
      set({ loadingAdmins: false, error: error.message });
    }
  },
  SendDirect:async(body)=>{
    set({ loading: true, error: null });
    try {
      const response = await SendDirectAdmin(body);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ dt:response, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  // Delete messages by ID
  deleteMessagesById: async (body) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteMessages(body);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ data: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
   
}));

export default MessagesPageStore;
