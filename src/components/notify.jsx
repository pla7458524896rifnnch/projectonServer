import React from "react";
import { OncloseIcon } from "./icons";
import { Link } from "react-router-dom";
export const NotifMessage = ({ closeToast }) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm">پیام جدید از علی احمدی</span>
        <div className="flex flex-row-reverse items-center gap-6">
          <Link
          to='/messages'
            className="text-sm text-green-300  focus:outline-none" 
          >
            مشاهده
          </Link>
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };

  export const NotifUpdateUser = ({ closeToast }) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm">اطلاعات کاربر آپدیت شد</span>
        <div className="flex flex-row-reverse items-center gap-6">
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };
  export const NotifUpdateAdmin = ({ closeToast }) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm">اطلاعات ادمین آپدیت شد</span>
        <div className="flex flex-row-reverse items-center gap-6">
         
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };
  export const NotifDeleteUser = ({ closeToast }) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm">کاربر مورد نظر حذف شد</span>
        <div className="flex flex-row-reverse items-center gap-6">
          
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };
  export const NotifDeleteAdmin = ({ closeToast }) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm">ادمین مورد نظر حذف شد</span>
        <div className="flex flex-row-reverse items-center gap-6">
          
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };
  export const NotifAddUser = ({ closeToast }) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm">کاربر جدید اضافه شد</span>
        <div className="flex flex-row-reverse items-center gap-6">
          
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };
  export const NotifAddAdmin = ({ closeToast }) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm">ادمین جدید اضافه شد</span>
        <div className="flex flex-row-reverse items-center gap-6">
          
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };
  export const NotifDirectAdmin = ({ closeToast ,fullName}) => {
    return (
      <div className="flex items-center flex-row-reverse justify-between gap-4 bg-gray-800 text-white py-3 px-4 rounded-md shadow-lg">
        <span className="text-sm"> مکالمه مورد نظر به {fullName} ارجاع داده شد  </span>
        <div className="flex flex-row-reverse items-center gap-6">
          <button
            className="text-sm text-gray-300 hover:text-red-500 focus:outline-none"
            onClick={closeToast}
          >
            <OncloseIcon/>
          </button>
        </div>
      </div>
    );
  };