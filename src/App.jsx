import { BrowserRouter as Router, Routes, Route, useLocation, Navigate,  } from "react-router-dom";  
import LoginPage from "./Pages/loginPage";  
import SignUpPage from "./Pages/signUpPage";  
import Navbar from "./components/navbar";  
import NavPage from "./components/navPage";  
import Dashboard from "./Pages/dashboard";  
import AdminPage from "./Pages/adminPage";  
import UserPage from "./Pages/userPage";  
import MessagesPage from "./Pages/messagesPage";  
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import useGetCookie from "./Hooks/Cookie";
import { ToastContainer } from "react-toastify";

function AppContent() {  
  const {getCookie}=useGetCookie();
  
  const location = useLocation();  
  const noNavbarRoutes = ["/login", "/signUp"]; 
  return (  
    <div className="app-container">  
      {/* تنها در صورتی که کاربر در یکی از مسیرهایی باشد که نوار ناوبری نمی‌خواهد، Navbar را نمایش ندهید */}  
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}  
      <div className={`content ${noNavbarRoutes.includes(location.pathname) ? "ml-[0px]" : "ml-[256px]"}`}>  
        <NavPage />  
        <Routes>  
          <Route path="/login" element={getCookie('accessToken')?<Navigate to='/dashboard'/>:<LoginPage />} />  
          {/* <Route path="/signUp" element={<SignUpPage />} />   */}
          <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute> 
          } />
          <Route path="/managers" element={
            <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
          }
           />  
          <Route path="/users" element={
            <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
          }/>  

          <Route path="/messages" element={
            <ProtectedRoute>
            <MessagesPage />
           </ProtectedRoute> 
        } />  
          <Route path="*" element={<Navigate to='/login' />} />  
        </Routes>  

        <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={() =>
          "bg-transparent shadow-none relative left-[130px] p-0 m-0"
        }
        bodyClassName={() => "p-0 m-0"}
        className="bg-transparent"
      />
      </div>  
    </div>  
  );  
}  

function App() {  
  return (  
    <Router>  
      <AppContent />  
    </Router>  
  );  
}  

export default App;