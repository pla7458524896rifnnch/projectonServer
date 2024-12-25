 
import MessagesPageStore from "../store/MessagesPageStore";
const useGetMassagesPageStore = () => {
  const { messages,loading,data,error,fetchAllMessages,fetchAllAdmins,users,deleteMessagesById,fetchAllUsers,SendDirect}=MessagesPageStore()
  return { messages,loading,data,error,fetchAllMessages,fetchAllAdmins,users,deleteMessagesById,fetchAllUsers,SendDirect}
};
export default useGetMassagesPageStore;
