import AdminPageStore from "../store/AdminPageStore";
const useGetAdminPageStore = () => {
  const {loading,data,error,fetchAllAdmins,admins,AddAdmin,EditAdmin ,deleteAdmins,fetchAdmin,adminById,deleteAdmin }=AdminPageStore()
  return {loading,data,error,fetchAllAdmins ,admins,AddAdmin, deleteAdmins,EditAdmin,fetchAdmin,adminById,deleteAdmin}
};

export default useGetAdminPageStore;
