import { Link } from 'react-router-dom';
import ll from '../assets/logo2.png';
import CustomSVG from '../components/coustomsvg';

function SignUpPage() {
  return (
    <div className="font-custom">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section */}
        <div className="flex-1 bg-[#00572C] flex items-center justify-center w-full lg:w-[570px] h-[300px] lg:h-[674px] rounded-br-[50px] relative overflow-hidden">
          {/* Background Waves */}
          <div className="absolute w-full h-full">
            <div className="absolute top-5">
              <CustomSVG />
            </div>
            <div className='relative right-2 scale-5 rotate-45 -top-[350px]'>
            <CustomSVG />
            </div>
          </div>
          {/* Logo and Text */}
          <div className="relative flex  gap-4 items-center justify-center z-10 text-center text-white">
            <h1 className="text-xl md:text-3xl font-bold">گیـــاهپزشـک</h1>
            <img src={ll} className="w-[100px] md:w-[160px] h-auto" alt="Logo" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col mt-8 lg:mt-[100px] mr-4 lg:mr-[70px] px-6 sm:px-12" dir="rtl">
          <div className="flex flex-col items-center px-6 py-8 sm:py-12 min-h-screen">
            <div className="max-w-sm w-full">
              {/* Main Title */}
              <h2 className="text-[#00572C] text-xl md:text-3xl font-bold mb-8 ">ثبت‌نام در گیاهپزشک</h2>
              <p
                className="text-gray-700 w-[500px] mb-16 text-sm md:text-base "
                style={{ fontWeight: 'lighter' }}
              >
                برای ایجاد حساب کاربری ، فرم زیر را تکمیل کنید.
              </p>

              {/* Login Form */}
              <form className="space-y-4">
                {/* fName & LName */}
                <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                  <svg  width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1605 12.12C12.1305 12.12 12.1105 12.12 12.0805 12.12C12.0305 12.11 11.9605 12.11 11.9005 12.12C9.00055 12.03 6.81055 9.75 6.81055 6.94C6.81055 4.08 9.14055 1.75 12.0005 1.75C14.8605 1.75 17.1905 4.08 17.1905 6.94C17.1805 9.75 14.9805 12.03 12.1905 12.12C12.1805 12.12 12.1705 12.12 12.1605 12.12ZM12.0005 3.25C9.97055 3.25 8.31055 4.91 8.31055 6.94C8.31055 8.94 9.87055 10.55 11.8605 10.62C11.9105 10.61 12.0505 10.61 12.1805 10.62C14.1405 10.53 15.6805 8.92 15.6905 6.94C15.6905 4.91 14.0305 3.25 12.0005 3.25Z" fill="#868686"/>
<path d="M12.1696 23.05C10.2096 23.05 8.23961 22.55 6.74961 21.55C5.35961 20.63 4.59961 19.37 4.59961 18C4.59961 16.63 5.35961 15.36 6.74961 14.43C9.74961 12.44 14.6096 12.44 17.5896 14.43C18.9696 15.35 19.7396 16.61 19.7396 17.98C19.7396 19.35 18.9796 20.62 17.5896 21.55C16.0896 22.55 14.1296 23.05 12.1696 23.05ZM7.57961 15.69C6.61961 16.33 6.09961 17.15 6.09961 18.01C6.09961 18.86 6.62961 19.68 7.57961 20.31C10.0696 21.98 14.2696 21.98 16.7596 20.31C17.7196 19.67 18.2396 18.85 18.2396 17.99C18.2396 17.14 17.7096 16.32 16.7596 15.69C14.2696 14.03 10.0696 14.03 7.57961 15.69Z" fill="#868686"/>
</svg>

                  </span>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="w-full py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00572C]"
                  />
                </div>
{/* phoneNumber */}
                <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.28872 2.58785L1.36127 2.51204C3.28869 0.58444 4.54385 0.0735119 5.88307 0.843622C6.2683 1.06515 6.62945 1.37523 7.12054 1.87401L8.62691 3.43603C9.45894 4.34393 9.64808 5.21478 9.37716 6.23465L9.33984 6.36967L9.29841 6.50392L9.09704 7.09474C8.66602 8.41972 8.84597 9.16728 10.3795 10.7004C11.9742 12.2947 12.7186 12.4251 14.1457 11.9264L14.4001 11.838L14.7077 11.7381L14.8423 11.7007C15.9263 11.4115 16.842 11.6423 17.8132 12.6128L19.0269 13.7852L19.3842 14.1366C19.7803 14.5405 20.0421 14.8606 20.2355 15.1989C21.0008 16.5377 20.4893 17.7921 18.5063 19.7677L18.3177 19.9589C18.0216 20.2442 17.745 20.4486 17.3386 20.6416C16.6565 20.9655 15.8506 21.0876 14.9142 20.9573C12.6067 20.6364 9.68016 18.8158 5.97188 15.1085C5.67002 14.8067 5.3809 14.5107 5.10425 14.2205L4.56748 13.6476C-0.462377 8.18285 -0.906112 4.82588 1.15518 2.7205L1.28872 2.58785ZM5.90641 2.78093C5.58062 2.45973 5.34396 2.26394 5.13532 2.14396C4.67379 1.87856 4.1755 1.99074 3.25329 2.78448L2.96353 3.04334C2.91299 3.09 2.86129 3.13843 2.80838 3.18868L2.47611 3.51231L2.44617 3.54972L2.22091 3.77603C1.67656 4.33204 1.41871 5.01064 1.6409 6.17767C2.00551 8.09269 3.67442 10.6905 7.0324 14.0477C10.5313 17.5456 13.1972 19.2041 15.1208 19.4716C16.2422 19.6276 16.8142 19.356 17.3975 18.7584L17.8424 18.3095C18.051 18.0912 18.2292 17.8933 18.3797 17.7126L18.585 17.4539C19.1097 16.7551 19.1576 16.3358 18.9332 15.9433C18.8479 15.7939 18.7237 15.6302 18.5429 15.43L18.2977 15.171L18.1525 15.0258L16.6213 13.5472C16.1096 13.0753 15.7599 13.0084 15.229 13.15L15.0757 13.1941L14.4414 13.4094C12.6013 14.0037 11.2738 13.7155 9.31894 11.7612C7.29429 9.73705 7.05685 8.38537 7.73522 6.43917L7.77874 6.31411L7.89908 5.95153L7.95823 5.72043C8.06314 5.21746 7.94337 4.86677 7.40269 4.32601C7.38043 4.30375 7.35555 4.27866 7.32847 4.2512L5.90641 2.78093Z" fill="#868686"/>
</svg>

                  </span>
                  <input
                    type="number"
                    placeholder="شماره موبایل"
                    className="w-full py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00572C]"
                  />
                </div>
{/* email */}
<div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10.7777 11.9648C10.1087 11.9648 9.44171 11.7438 8.88371 11.3018L4.39871 7.6858C4.07571 7.4258 4.02571 6.9528 4.28471 6.6308C4.54571 6.3098 5.01771 6.2588 5.33971 6.5178L9.82071 10.1298C10.3837 10.5758 11.1767 10.5758 11.7437 10.1258L16.1797 6.5198C16.5017 6.2568 16.9737 6.3068 17.2357 6.6288C17.4967 6.9498 17.4477 7.4218 17.1267 7.6838L12.6827 11.2958C12.1207 11.7418 11.4487 11.9648 10.7777 11.9648Z" fill="#868686"/>

<path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H21.4999V20H0V0.5Z" fill="white"/>
<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M10.7777 11.9648C10.1087 11.9648 9.44171 11.7438 8.88371 11.3018L4.39871 7.6858C4.07571 7.4258 4.02571 6.9528 4.28471 6.6308C4.54571 6.3098 5.01771 6.2588 5.33971 6.5178L9.82071 10.1298C10.3837 10.5758 11.1767 10.5758 11.7437 10.1258L16.1797 6.5198C16.5017 6.2568 16.9737 6.3068 17.2357 6.6288C17.4967 6.9498 17.4477 7.4218 17.1267 7.6838L12.6827 11.2958C12.1207 11.7418 11.4487 11.9648 10.7777 11.9648Z" fill="#868686"/>
</svg>
<g mask="url(#mask0_236_1114)">
<path fillRule="evenodd" clipRule="evenodd" d="M5.839 18.5H15.659C15.661 18.498 15.669 18.5 15.675 18.5C16.816 18.5 17.828 18.092 18.604 17.317C19.505 16.42 20 15.131 20 13.688V6.82C20 4.027 18.174 2 15.659 2H5.841C3.326 2 1.5 4.027 1.5 6.82V13.688C1.5 15.131 1.996 16.42 2.896 17.317C3.672 18.092 4.685 18.5 5.825 18.5H5.839ZM5.822 20C4.279 20 2.901 19.44 1.837 18.38C0.652 17.198 0 15.532 0 13.688V6.82C0 3.217 2.511 0.5 5.841 0.5H15.659C18.989 0.5 21.5 3.217 21.5 6.82V13.688C21.5 15.532 20.848 17.198 19.663 18.38C18.6 19.439 17.221 20 15.675 20H15.659H5.841H5.822Z" fill="#868686"/>
</g>
</svg>

                  </span>
                  <input
                    type="email"
                    placeholder="ایمیل"
                    className="w-full py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00572C]"
                  />
                </div>
                {/* password */}
<div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.17916 23.25C6.07916 23.25 5.96916 23.24 5.87916 23.23L3.70916 22.93C2.66916 22.79 1.72916 21.86 1.56916 20.8L1.26916 18.61C1.16916 17.91 1.46916 17 1.96916 16.49L6.35916 12.1C5.64916 9.25998 6.46916 6.25998 8.55916 4.18998C11.7992 0.959984 17.0692 0.949984 20.3192 4.18998C21.8892 5.75998 22.7492 7.84998 22.7492 10.07C22.7492 12.29 21.8892 14.38 20.3192 15.95C18.2192 18.03 15.2292 18.85 12.4092 18.13L8.00916 22.52C7.58916 22.96 6.83916 23.25 6.17916 23.25ZM14.4292 3.25998C12.6792 3.25998 10.9392 3.91998 9.60916 5.24998C7.80916 7.03998 7.15916 9.65999 7.90916 12.1C7.98916 12.37 7.91916 12.65 7.71916 12.85L3.01916 17.55C2.84916 17.72 2.70916 18.16 2.73916 18.39L3.03916 20.58C3.09916 20.96 3.50916 21.39 3.88916 21.44L6.06916 21.74C6.30916 21.78 6.74916 21.64 6.91916 21.47L11.6392 16.76C11.8392 16.56 12.1292 16.5 12.3892 16.58C14.7992 17.34 17.4292 16.69 19.2292 14.89C20.5092 13.61 21.2192 11.89 21.2192 10.07C21.2192 8.23998 20.5092 6.52998 19.2292 5.24998C17.9292 3.92998 16.1792 3.25998 14.4292 3.25998Z" fill="#868686"/>
<path d="M9.19008 21.04C9.00008 21.04 8.81008 20.97 8.66008 20.82L6.36008 18.52C6.07008 18.23 6.07008 17.75 6.36008 17.46C6.65008 17.17 7.13008 17.17 7.42008 17.46L9.72008 19.76C10.0101 20.05 10.0101 20.53 9.72008 20.82C9.57008 20.97 9.38008 21.04 9.19008 21.04Z" fill="#868686"/>
<path d="M14.5 12.25C13.26 12.25 12.25 11.24 12.25 10C12.25 8.76 13.26 7.75 14.5 7.75C15.74 7.75 16.75 8.76 16.75 10C16.75 11.24 15.74 12.25 14.5 12.25ZM14.5 9.25C14.09 9.25 13.75 9.59 13.75 10C13.75 10.41 14.09 10.75 14.5 10.75C14.91 10.75 15.25 10.41 15.25 10C15.25 9.59 14.91 9.25 14.5 9.25Z" fill="#868686"/>
</svg>


                  </span>
                  <input
                    type="password"
                    placeholder="انتخاب رمز عبور"
                    className="w-full py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00572C]"
                  />
                </div>
{/* password E */}
<div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4237 9.9478V7.8008C16.4237 5.2878 14.3857 3.2498 11.8727 3.2498C9.35973 3.2388 7.31373 5.2668 7.30273 7.7808V7.8008V9.9478" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.683 21.7496H8.042C5.948 21.7496 4.25 20.0526 4.25 17.9576V13.6686C4.25 11.5736 5.948 9.87659 8.042 9.87659H15.683C17.777 9.87659 19.475 11.5736 19.475 13.6686V17.9576C19.475 20.0526 17.777 21.7496 15.683 21.7496Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.8633 14.7027V16.9237" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  </span>
                  <input
                    type="password"
                    placeholder="تکرار رمز عبور"
                    className="w-full py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00572C]"
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-[#00572C] text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                 ایجاد حساب کاربری
                </button>
              </form>

              {/* Signup Link */}
              <p className="text-gray-600 mt-4 text-sm">
              در حال حاضر حساب کاربری دارید؟{' '}
                <Link to='/login' className="text-[#00572C] font-semibold">
                 ورود
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-5 text-sm text-gray-500">
        تهیه شده توسط کلینیک تخصصی و مرکز مشاوره کشاورزی دانشگاه جهرم
      </footer>
    </div>
  );
}

export default SignUpPage;
