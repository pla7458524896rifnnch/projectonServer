import { apiClient } from "../instace/axiosSettings";  
const fetchData = async (url) => {  
  try {  
    const response = await apiClient.get(url);     
      return response.data;   
  } catch (error) {  
    console.error(`Error in getting data from ${url}:`, error);  
    return { error: error.message || "خطای ناشناخته" };  
  }  
};  
const deleteData = async (url, body) => {  
  try {  
    const response = await apiClient.delete(url,{ data: { user_ids: body } });  
    return response.data;  
  } catch (error) {  
    return { error: error.message || "خطای ناشناخته" };  
  }  
};  
const postData = async (url, body='') => {  
  try {  
    const response = await apiClient.post(url, body);  
    return response.data;  
  } catch (error) {  
    console.error(`Error in adding data at ${url}:`, error);  
    return { error: error.message || "خطای ناشناخته" };  
  }  
};  
const putData = async (url, body='') => {  
  try {  
    const response = await apiClient.put(url, body);  
    return response.data;  
  } catch (error) {  
    console.error(`Error in adding data at ${url}:`, error);  
    return { error: error.message || "خطای ناشناخته" };  
  }  
};  
// Fetch Functions  
export const fetchWhoAmI=()=>fetchData('/api/v1/accounts/me_admin/')
export const fetchAllUsers = () => fetchData("/api/v1/accounts/all_users/");  
export const fetchAllAdmins = () => fetchData("/api/v1/accounts/all_specialist_admin/");  
export const fetchAllAdminsByDirect = () => fetchData("/api/v1/accounts/all_specialist/");  
export const fetchAllMessages = () => fetchData("/accounts/all_Massages/");  
export const fetchProcessSystem = () => fetchData("/ProcessSystem/");  
export const fetchBarChart = () => fetchData("/BarChart/");  
export const fetchCircleChart = () => fetchData("/CircleChart/");  
export const fetchAdminById= (id)=> fetchData(`/accounts/admin/${id}`)
export const fetchUserById=(id)=> fetchData(`/accounts/user/${id}`)
// Delete Functions  
export const deleteUsers = (body) => deleteData("/api/v1/accounts/delete_group/",body);  
export const deleteUser = (id) => deleteData(` /api/v1/accounts/delete_user/${id}/`);   
export const deleteAdmins = (body) => deleteData("/accounts/delete_admins/", body);  
export const deleteMessages = (body) => deleteData("/accounts/delete_messages/", body);   
// Add Functions  
export const AddUser = (body) => postData("/api/v1/accounts/register_user/", body);  
export const AddAdmin = (body) => postData("/api/v1/accounts/add_specialist/", body);  
//Update && Edit
export const EditUser = (id,body) => putData(`/api/v1/accounts/update_admin_user/${id}/`, body);  
export const EditAdmin = (id,body) => putData(`/api/v1/accounts/update_admin/${id}/`, body);  
//auth
export const loginUser = (body)=>{
 try {
  const res= postData('/api/v1/accounts/login/',body)
  return res
 } catch (error) {
  console.log(error)
 }
}
export const registerUser = (body)=>postData('/api/Register',body)
export const logoutUser=async()=>{
  try {  
    const response = await apiClient.post('/api/v1/accounts/logout/');  
    return response.data;  
  } catch (error) {  
    console.error(`Error   :`, error);  
    return { error: error.message || "خطای ناشناخته" };  
  }  
}
//get and create function socket 
export const createRoom=(body)=>postData('/chat/createroom/',body) 
export const getChats=(user)=>fetchData(`/chat/getchats/${user}`)
export const SendDirectAdmin=(body)=>postData('/chat/changeadmin/',body)