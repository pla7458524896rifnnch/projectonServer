import { create } from "zustand";
import { AddUser, deleteUsers, EditUser, fetchAllUsers, fetchUserById } from "../api/api";

const UserPageStore = create((set) => ({
  users: null,  
  userById:{},
  loading: false,
  data: null,
  error: null,
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
   fetchUser:async(id)=>{
      set({ loading: true, error: null });
      try {
        const response = await fetchUserById(id);
        if (response.error) {
          set({ loading: false, error: response.error });
        } else {
          set({ userById: response.data, loading: false });  
        }
      } catch (error) {
        set({ loading: false, error: error.message });
      }
    },
  deleteUsers: async (body) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteUsers(body);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ data: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  deleteUser:async(id)=>{
    set({ loading: true, error: null });
    try {
      const response = await deleteUsers([id]);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ data: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  AddUser: async (body) => {
    set({ loading: true, error: null });
    try {
      const response = await AddUser(body);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ data: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  EditUser:async(id,body)=>{
      set({ loading: true, error: null });
      try {
        const response = await EditUser(id,body);
        if (response.error) {
          set({ loading: false, error: response.error });
        } else {
          set({ data: response.data, loading: false });
        }
      } catch (error) {
        set({ loading: false, error: error.message });
      }
    }
}));

export default UserPageStore;
