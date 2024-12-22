import { useEffect, useState } from 'react';  
import { Link, replace, useNavigate } from 'react-router-dom';  
import ll from '../assets/logo2.png';  
import CustomSVG from '../components/coustomsvg';  
import useGetAuth from '../Hooks/Auth';

function LoginPage() {  
 const { user, loading, error, login}=useGetAuth();
 const navigate=useNavigate();
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [rememberMe, setRememberMe] = useState(false);  
  useEffect(()=>{
    if (!loading &&user.data) {
     navigate('/dashboard');
    console.log(user)
    }
   },[loading])
  const handleSubmit = async(e) => {  
    e.preventDefault();  
  await login(email,password,rememberMe)
  };  

  return (  
    <div className="font-custom">  
      <div className="flex flex-col lg:flex-row min-h-screen">  
        {/* Left Section */}  
        <div className="flex-1 bg-[#00572C] flex items-center justify-center w-full lg:w-[570px] h-[300px] lg:h-[674px] rounded-br-[50px] relative overflow-hidden">  
          {/* Background Waves */}  
          <div className="absolute w-full h-full">  
            <div className="absolute scale-2 top-5">  
              <CustomSVG />  
            </div>  
            <div className='relative right-2 scale-5 rotate-45 -top-[350px]'>  
              <CustomSVG />  
            </div>  
          </div>  
          {/* Logo and Text */}  
          <div className="relative flex gap-4 items-center justify-center z-10 text-center text-white">  
            <h1 className="text-xl md:text-3xl font-bold">گیـــاهپزشـک</h1>  
            <img src={ll} className="w-[100px] md:w-[160px] h-auto" alt="Logo" />  
          </div>  
        </div>  

        {/* Right Section */}  
       
        <div className="flex-1 flex flex-col mt-8 lg:mt-[100px] mr-4 lg:mr-[70px] px-6 sm:px-12" dir="rtl">  
        {loading?(
          <div className='flex items-center h-[70%] justify-center'>
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#00572C]" />
          </div>
):(
  <div className="flex flex-col items-center px-6 py-8 sm:py-12 min-h-screen">  
  <div className="max-w-sm w-full">  
    {/* Main Title */}  
    <h2 className="text-[#00572C] text-xl md:text-3xl font-bold mb-4">خوش آمدید</h2>  
     
    <p  
      className="text-gray-700 w-[500px] text-sm md:text-base mb-6"  
      style={{ fontWeight: 'lighter' }}  
    >  
      برای ورود ایمیل یا شماره موبایل به همراه رمز عبور خود را وارد کنید.  
    </p>  

    {/* Login Form */}  
    <form className="space-y-4"  onSubmit={handleSubmit}>  
      {/* Email or Phone Field */}  
      <div className="relative w-full">  
        <span className="absolute right-3 top-3 text-gray-400">  
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">  
            <path d="M12.1605 12.12C12.1305 12.12 12.1105 12.12 12.0805 12.12C12.0305 12.11 11.9605 12.11 11.9005 12.12C9.00055 12.03 6.81055 9.75 6.81055 6.94C6.81055 4.08 9.14055 1.75 12.0005 1.75C14.8605 1.75 17.1905 4.08 17.1905 6.94C17.1805 9.75 14.9805 12.03 12.1905 12.12C12.1805 12.12 12.1705 12.12 12.1605 12.12ZM12.0005 3.25C9.97055 3.25 8.31055 4.91 8.31055 6.94C8.31055 8.94 9.87055 10.55 11.8605 10.62C11.9105 10.61 12.0505 10.61 12.1805 10.62C14.1405 10.53 15.6805 8.92 15.6905 6.94C15.6905 4.91 14.0305 3.25 12.0005 3.25Z" fill="#868686"/>  
            <path d="M12.1696 23.05C10.2096 23.05 8.23961 22.55 6.74961 21.55C5.35961 20.63 4.59961 19.37 4.59961 18C4.59961 16.63 5.35961 15.36 6.74961 14.43C9.74961 12.44 14.6096 12.44 17.5896 14.43C18.9696 15.35 19.7396 16.61 19.7396 17.98C19.7396 19.35 18.9796 20.62 17.5896 21.55C16.0896 22.55 14.1296 23.05 12.1696 23.05ZM7.57961 15.69C6.61961 16.33 6.09961 17.15 6.09961 18.01C6.09961 18.86 6.62961 19.68 7.57961 20.31C10.0696 21.98 14.2696 21.98 16.7596 20.31C17.7196 19.67 18.2396 18.85 18.2396 17.99C18.2396 17.14 17.7096 16.32 16.7596 15.69C14.2696 14.03 10.0696 14.03 7.57961 15.69Z" fill="#868686"/>  
          </svg>  
        </span>  
        <input  
          type="text"  
          placeholder="ایمیل"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          className="w-full py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00572C]"  
        />  
      </div>  

      {/* Password Field */}  
      <div className="relative w-full">  
        <span className="absolute right-3 top-3 text-gray-400">  
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">  
            <path fillRule="evenodd" clipRule="evenodd" d="M16.9237 10.7C16.5097 10.7 16.1737 10.364 16.1737 9.95001V7.80301C16.1737 5.70701 14.4687 4.00201 12.3727 4.00201H12.3567C11.3437 4.00201 10.3947 4.39201 9.67773 5.10301C8.95573 5.81701 8.55673 6.77001 8.55273 7.78601V9.95001C8.55273 10.364 8.21673 10.7 7.80273 10.7C7.38873 10.7 7.05273 10.364 7.05273 9.95001V7.80301C7.05873 6.36301 7.61573 5.03401 8.62073 4.03801C9.62673 3.04101 10.9547 2.46401 12.3757 2.50201C15.2957 2.50201 17.6737 4.88001 17.6737 7.80301V9.95001C17.6737 10.364 17.3377 10.7 16.9237 10.7Z" fill="#868686"/>  
            <path fillRule="evenodd" clipRule="evenodd" d="M8.542 10.6288C6.864 10.6288 5.5 11.9928 5.5 13.6708V17.9598C5.5 19.6378 6.864 21.0018 8.542 21.0018H16.183C17.86 21.0018 19.225 19.6378 19.225 17.9598V13.6708C19.225 11.9928 17.86 10.6288 16.183 10.6288H8.542ZM16.183 22.5018H8.542C6.037 22.5018 4 20.4648 4 17.9598V13.6708C4 11.1658 6.037 9.12878 8.542 9.12878H16.183C18.688 9.12878 20.725 11.1658 20.725 13.6708V17.9598C20.725 20.4648 18.688 22.5018 16.183 22.5018Z" fill="#868686"/>  
            <path fillRule="evenodd" clipRule="evenodd" d="M12.3613 17.6756C11.9473 17.6756 11.6113 17.3396 11.6113 16.9256V14.7046C11.6113 14.2906 11.9473 13.9546 12.3613 13.9546C12.7753 13.9546 13.1113 14.2906 13.1113 14.7046V16.9256C13.1113 17.3396 12.7753 17.6756 12.3613 17.6756Z" fill="#868686"/>  
          </svg>  
        </span>  
        <input  
          type="password"  
          placeholder="رمز عبور"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          className="w-full py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00572C]"  
        />  
      </div>  
      
      {/* Remember Me */}  
      <div className="flex items-center gap-3">  
        <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">  
          <input   
            type="checkbox"   
            id="toggle"   
            className="sr-only peer"   
            checked={rememberMe}  
            onChange={() => setRememberMe(!rememberMe)}  
          />  
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#00572C] transition-colors"></div>  
          <span className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></span>  
        </label>  
        <label htmlFor="toggle" className="text-gray-700 text-sm">  
          مرا به خاطر بسپار  
        </label>  
      </div>  

      {/* Login Button */}  
      <button  
      
        type="submit"  
        className="w-full bg-[#00572C] text-white py-3 rounded-lg hover:bg-green-700 transition"  
      >  
        ورود  
      </button>  
    </form>  

    {/* Signup Link */}  
    {/* <p className="text-gray-600 mt-4 text-sm">  
      هنوز ثبت نام نکرده‌اید؟{' '}  
      <Link to="/signup" className="text-[#00572C] font-semibold">  
        ثبت نام  
      </Link>  
    </p>   */}
  </div>  
</div>   
)}
        </div>  
      </div>  
      <footer className="text-center py-5 text-sm text-gray-500">  
        تهیه شده توسط کلینیک تخصصی و مرکز مشاوره کشاورزی دانشگاه جهرم  
      </footer>  
    </div>  
  );  
}  

export default LoginPage;