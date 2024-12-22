 
import MessagesPageStore from "../store/MessagesPageStore";
const useGetMassagesPageStore = () => {
  const { messages,loading,data,error,fetchAllMessages,fetchAllAdmins,users,deleteMessagesById,fetchAllUsers}=MessagesPageStore()
  return { messages,loading,data,error,fetchAllMessages,fetchAllAdmins,users,deleteMessagesById,fetchAllUsers}
};
export default useGetMassagesPageStore;
