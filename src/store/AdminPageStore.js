import { create } from "zustand";
import { AddAdmin, deleteAdmins, deleteUser, deleteUsers, EditAdmin, fetchAdminById, fetchAllAdmins, fetchWhoAmI } from "../api/api";

const AdminPageStore = create((set) => ({
  admins: null,  
  loading: false,
  adminById:{},
  data: null,
  error: null,
  me:[],
  // Fetch all admins
  fetchAllAdmins: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetchAllAdmins();
      const res = await fetchWhoAmI();
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ admins: response.data,me:[res.data], loading: false });  // Renamed from Admins to admins
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  fetchAdmin:async(id)=>{
    set({ loading: true, error: null });
    try {
      const response = await fetchAdminById(id);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ adminById: response.data, loading: false });  
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  // Delete admins
  deleteAdmins: async (body) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteAdmins(body);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ data: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  deleteAdmin:async(id)=>{
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
  // Add admin
  AddAdmin: async (body) => {
    set({ loading: true, error: null });
    try {
      const response = await AddAdmin(body);
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ data: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  EditAdmin:async(id,body)=>{
    set({ loading: true, error: null });
    try {
      const response = await EditAdmin(id,body);
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

export default AdminPageStore;
