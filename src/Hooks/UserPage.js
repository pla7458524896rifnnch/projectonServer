import UserPageStore from "../store/UserPageStore";
const useGetUsersPageStore = () => {
  
  const {loading,data,error,fetchAllUsers,users,AddUser ,deleteUsers,EditUser ,userById,fetchUser,deleteUser}=UserPageStore()
  return {loading,data,error,fetchAllUsers ,users,AddUser, deleteUsers,EditUser,userById,fetchUser,deleteUser}
};
export default useGetUsersPageStore;
