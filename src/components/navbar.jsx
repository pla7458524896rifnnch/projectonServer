import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ll from "../assets/logo.png";
import { ConfirmationModalExit } from "./modals";
import useGetAuth from "../Hooks/Auth";
import useGetCookie from "../Hooks/Cookie";
import {
  AdminsNoIcon,
  AdminsYesIcon,
  DashboardNoIcon,
  DashboardYesIcon,
  ExitIcon,
  MessagesNoIcon,
  MessagesYesIcon,
  OncloseIcon,
  UsersNoIcon,
  UsersYesIcon,
} from "./icons";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false); // برای حالت موبایل
  const { logout } = useGetAuth();
  const navigate = useNavigate();
  const { removeCookie } = useGetCookie();

  const handleConfirm = () => {
    removeCookie("accessToken");
    window.location.reload();
    setModalOpen(false);
  };

  const navLinks = [
    { path: "/dashboard", label: "داشبورد", iconY: <DashboardYesIcon />, iconN: <DashboardNoIcon /> },
    { path: "/managers", label: "مدیران", iconN: <AdminsNoIcon />, iconY: <AdminsYesIcon /> },
    { path: "/users", label: "کاربران", iconN: <UsersNoIcon />, iconY: <UsersYesIcon /> },
    { path: "/messages", label: "پیام‌ها", iconN: <MessagesNoIcon />, iconY: <MessagesYesIcon /> },
  ];

  return (
    <>
      {/* دکمه همبرگر برای موبایل */}
      <button
        className="sm:hidden fixed top-4 left-4 z-20 text-2xl py-1 px-2 pb-0 bg-[#024227] text-white rounded-md"
        onClick={() => setMobileNavOpen(!isMobileNavOpen)}
      >
        ☰
      </button>

      {/* نوار ناوبری */}
      <aside
        className={`navbar h-screen Z-20 bg-green-50 flex flex-col justify-between transition-transform ${
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-64`}
      >
        {/* لوگو و نام */}
        <div className="p-6 flex flex-col items-center">
          <img src={ll} alt="لوگو گیاه‌پزشک" className="w-[85px] h-[88px] mb-2" />
          <span className="text-2xl font-bold text-[#404040]">گیاهپزشک</span>
        </div>
        <hr />

        {/* لینک‌ها */}
        <nav className="flex-grow mt-6">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li onClick={()=>setMobileNavOpen(false)} key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-4 mx-4 rounded-lg font-medium flex items-center transition ${
                    location.pathname === link.path
                      ? "bg-[#024227] text-white"
                      : "text-green-900 hover:bg-green-100"
                  }`}
                >
                  <span className="mr-2">{location.pathname === link.path ? link.iconY : link.iconN}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* خروج */}
        <div className="p-6">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full flex items-center justify-center text-[#C30000] py-2"
          >
            <span className="inline-block w-5 h-5 mr-2">
              <ExitIcon />
            </span>
            خروج از حساب
          </button>
       
        </div>
      </aside>

      {/* پوشش برای بستن نوار در موبایل */}
      {isMobileNavOpen && (
        <div
          className="fixed    top-5 left-5 z-50 cursor-pointer  sm:hidden"
          onClick={() => setMobileNavOpen(false)}
        >
          <OncloseIcon/>
        </div>
      )}
         <ConfirmationModalExit
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onConfirm={handleConfirm}
          />
    </>
  );
};

export default Navbar;
