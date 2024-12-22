import React, { useState } from "react";
import { DeleteIcon,
   EmailIcon,
   ExpertIcon,
   FileIcon,
   NumberIcon,
   OncloseIcon,
   PasswordIcon,
   ProfileIcon,
   UserNameIcon } from "./icons";

// eslint-disable-next-line react/prop-types
const ConfirmationModalDeleteAdmin = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white rounded-lg relative shadow-lg w-96 p-6">
      <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
       <OncloseIcon/>

        </button>
        <div className="flex items-center  justify-center text-[#C30000] text-2xl mb-4">
          <span className="mt-4">
          <DeleteIcon/>
          </span>
        </div>
        <h2 className="text-center text-sm py-4 font-bold mb-2">
          آیا از حذف مدیر اطمینان دارید؟
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-[#C30000] text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            بله، حذف
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-10 border border-gray-400 py-2 rounded hover:bg-gray-300 transition"
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};
const ConfirmationModalDeleteAdmins = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white rounded-lg relative shadow-lg w-96 p-6">
      <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
       <OncloseIcon/>

        </button>
        <div className="flex items-center  justify-center text-[#C30000] text-2xl mb-4">
          <span className="mt-4">
          <DeleteIcon/>
          </span>
        </div>
        <h2 className="text-center text-sm py-4 font-bold mb-2">
          آیا از حذف مدیر ها اطمینان دارید؟
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-[#C30000] text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            بله، حذف
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-10 border border-gray-400 py-2 rounded hover:bg-gray-300 transition"
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const ConfirmationModalDeleteUser = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white rounded-lg relative shadow-lg w-96 p-6">
      <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          <OncloseIcon/>

        </button>
        <div className="flex items-center  justify-center text-[#C30000] text-2xl mb-4">
          <span className="mt-4">
        <DeleteIcon/>
          </span>
        </div>
        <h2 className="text-center text-sm py-4 font-bold mb-2">
          آیا از حذف کاربر اطمینان دارید؟
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-[#C30000] text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            بله، حذف
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-10 border border-gray-400 py-2 rounded hover:bg-gray-300 transition"
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};
const ConfirmationModalDeleteUsers = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white rounded-lg relative shadow-lg w-96 p-6">
      <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          <OncloseIcon/>

        </button>
        <div className="flex items-center  justify-center text-[#C30000] text-2xl mb-4">
          <span className="mt-4">
        <DeleteIcon/>
          </span>
        </div>
        <h2 className="text-center text-sm py-4 font-bold mb-2">
          آیا از حذف کاربر ها اطمینان دارید؟
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-[#C30000] text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            بله، حذف
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-10 border border-gray-400 py-2 rounded hover:bg-gray-300 transition"
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};
const ConfirmationModalDeleteMessages = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white rounded-lg relative shadow-lg w-96 p-6">
      <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
         <OncloseIcon/>

        </button>
        <div className="flex items-center  justify-center text-[#C30000] text-2xl mb-4">
          <span className="mt-4">
          <DeleteIcon/>

          </span>
        </div>
        <h2 className="text-center text-sm py-4 font-bold mb-2">
          آیا از حذف پیغام های کاربر اطمینان دارید؟
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-[#C30000] text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            بله، حذف
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-10 border border-gray-400 py-2 rounded hover:bg-gray-300 transition"
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const ConfirmationModalExit = ({ isOpen, onClose, onConfirm }) => {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white rounded-lg relative shadow-lg w-96 p-6">
      <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
        <OncloseIcon/>
        </button>
        <div className="flex items-center  justify-center text-[#C30000] text-2xl mb-4">
          <span className="mt-4">
        <DeleteIcon/>
           </span>
        </div>
        <h2 className="text-center text-sm py-4 font-bold mb-2">
        آیا مطمئن هستید که می خواهید از <br></br> حساب کاربری خود خارج شوید؟
        </h2>
        <div className="flex justify-center gap-4 mt-4">
        <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-10 border border-gray-400 py-2 rounded hover:bg-gray-300 transition"
          >
            خیر
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#C30000] text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
         بله، خروج
          </button>
         
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const AddManagerModal = ({ isOpen, onClose, onAddAdmin,confirm }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    mobile: "",
    email: "",
    specialties:2
  });
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (file) {
      data.append("file", file);
    }
    const {fullName,password,mobile,email,specialties}=formData
   await onAddAdmin(formData)    
      onClose();
      confirm()
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-fit p-6 px-0 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
        <OncloseIcon/>
        </button>

        {/* Title */}
        <h2 className="text-start pb-1 pr-4 font-bold text-lg text-gray-800 mb-6">
          افزودن مدیر جدید
        </h2>
       <hr></hr>
        {/* Form Fields */}
        <form className="space-y-4 p-4 text-right"  >
  <div className="grid grid-cols-2 gap-4">
    {/* Full Name */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
              <UserNameIcon/>

                  </span>
                  <input
                    type="text"
                    name='fullName'
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="نام و نام خانوادگی"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
{/* expert */}
<div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                <ExpertIcon/>

                  </span>
                  <input
                    type="text"
                    name=''
                    value={formData.specialties}
                    onChange={handleChange}
                    placeholder="تخصص"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* password */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
            <PasswordIcon/>
                  </span>
                  <input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="رمز عبور"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
   

    {/* Mobile Number */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
          <NumberIcon/>
                  </span>
                  <input
                  onChange={handleChange}
                  value={formData.mobile}
                    type="number"
                    name='mobile'
                    placeholder="شماره موبایل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Email */}

    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
              <EmailIcon/>
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    name='email'
                    onChange={handleChange}
                    placeholder="ایمیل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Profile Upload */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
             <FileIcon/>
                  </span>
                  <div className="relative w-[245px] py-3 px-4 border rounded-lg text-gray-700  focus-within:ring-2 focus-within:ring-[#fff] cursor-pointer  ">
      <label
        htmlFor="file-upload"
        className="block text-start relative right-6 text-md text-[#404040] cursor-pointer opacity-55"
      >
       بارگذاری تصویر پروفایل
      </label>
      <input
        id="file-upload"
        onChange={handleFileChange}
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
    </div>
    <div className="relative w-full text-[#024227]  my-3 mx-2">
      {file&&'فایل آپلود شد'}
    </div>
  </div>


</form>
<hr></hr>
  {/* Submit Button */}
<button
    type="submit"
    onClick={handleSubmit}
    className="w-[245px] m-4 mb-2 relative right-[255px]  bg-[#024227] text-white py-3 rounded-md hover:bg-green-900 transition"
  >
    ثبت
  </button>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const AddUserModal = ({ isOpen, onClose, onAddUser,confirm }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    mobile: "",
    email: "",
  });
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (file) {
      data.append("file", file);
    }
      onAddUser({...formData,username:formData.email}); // Pass form data to the parent 
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-fit p-6 px-0 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          <OncloseIcon/>
        </button>

        {/* Title */}
        <h2 className="text-start pb-1 pr-4 font-bold text-lg text-gray-800 mb-6">
          افزودن کاربر جدید
        </h2>
       <hr></hr>
        {/* Form Fields */}
        <form className="space-y-4 p-4 text-right"  >
  <div className="grid grid-cols-2 gap-4">
    {/* Full Name */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
          <UserNameIcon/>

                  </span>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="fullName"
                    value={formData.fullName}
                    placeholder="نام و نام خانوادگی"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>

    {/* password */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
           <PasswordIcon/>
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="رمز عبور"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
   

    {/* Mobile Number */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
           <NumberIcon/>
                  </span>
                  <input
                  onChange={handleChange}
                  value={formData.mobile}
                  name="mobile"
                    type="number"
                    placeholder="شماره موبایل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Email */}

    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
            <EmailIcon/>
                  </span>
                  <input
                  name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ایمیل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Profile Upload */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
             <FileIcon/>
                  </span>
                  <div className="relative w-[245px] py-3 px-4 border rounded-lg text-gray-700  focus-within:ring-2 focus-within:ring-[#fff] cursor-pointer  ">
      <label
        htmlFor="file-upload"
        className="block text-start relative right-6 text-md text-[#404040] cursor-pointer opacity-55"
      >
       بارگذاری تصویر پروفایل
      </label>
      <input
        id="file-upload"
        onChange={handleFileChange}
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
    </div>
    <div className="relative w-full text-[#024227]  my-3 mx-2">
      {file&&'فایل آپلود شد'}
    </div>
  </div>


</form>
<hr></hr>
  {/* Submit Button */}
<button
    type="submit"
    onClick={handleSubmit}
    className="w-[245px] m-4 mb-2 relative right-[255px]  bg-[#024227] text-white py-3 rounded-md hover:bg-green-900 transition"
  >
    ثبت
  </button>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const SpecialistSelectionModal = ({ isOpen, onClose, onConfirm,selectedSpecialist,setIdSelected, specialists = [] }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="gradient-bg relative rounded-lg shadow-lg w-96 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
      <OncloseIcon/>
        </button>
        <h2 className="text-center text-lg py-3 font-bold mb-4">ارسال پیام به متخصص: تست</h2>
        {
          specialists.length<1?
          <div className='flex items-center h-[70%] justify-center'>
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#00572C]" />
          </div>
          :
          <ul className="space-y-2">
          {specialists.map((specialist) => (
            <li
              key={specialist.user}
              onClick={()=>setIdSelected(specialist.user)}
              className={`flex items-center justify-start p-2 rounded-[50px] cursor-pointer  ${
                selectedSpecialist === specialist.user ? 'bg-[#D2EFE3]' : ''
              }  hover:bg-[#D2EFE3] transition`}
            >
              <span>
             <ProfileIcon/>
              </span>
              <div className="pr-3">
                <p className="font-semibold">{specialist.fullName}</p>
                <p className="text-sm text-gray-600">{specialist.email}</p>
              </div>
              <span className="text-gray-400">
               
              </span>
            </li>
          ))}
        </ul>
        }
       
        <div className="mt-6 flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-[#024227] w-full text-white px-6 py-2 rounded hover:bg-green-900 transition"
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
};

const EditManagerModal=({data, isOpen, onClose, onEditAdmin,confirm })=>{
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    fullName: data.fullName||"",
    password: data.password||"",
    phoneNumber: data.phoneNumber||"",
    email: data.email||"",
    specialties:2
  });
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const form_Data = new FormData();
    for (const key in formData) {
      form_Data.append(key, formData[key]);
    }
    if (file) {
      form_Data.append("file", file);
    }
    await onEditAdmin(form_Data)    
      onClose();  
      confirm();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-fit p-6 px-0 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
         <OncloseIcon/>
        </button>

        {/* Title */}
        <h2 className="text-start pb-1 pr-4 font-bold text-lg text-gray-800 mb-6">
         ویرایش مدیر
        </h2>
       <hr></hr>
        {/* Form Fields */}
        <form className="space-y-4 p-4 text-right"  >
  <div className="grid grid-cols-2 gap-4">
    {/* Full Name */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
            <UserNameIcon/>
                  </span>
                  <input
                    type="text"
                    name='fullName'
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="نام و نام خانوادگی"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
{/* expert */}
<div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
               <ExpertIcon/>
                  </span>
                  <input
                    type="text"
                    name=''
                    value={formData.specialties}
                    onChange={handleChange}
                    placeholder="تخصص"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* password */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
               <PasswordIcon/>
                  </span>
                  <input
                    type="text"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=" رمز عبور جدید"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
   

    {/* Mobile Number */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                  <NumberIcon/>
                  </span>
                  <input
                  onChange={handleChange}
                  value={formData.phoneNumber}
                    type="number"
                    name='phoneNumber'
                    placeholder="شماره موبایل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Email */}

    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
             <EmailIcon/>
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    name='email'
                    onChange={handleChange}
                    placeholder="ایمیل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Profile Upload */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
              <FileIcon/>
                  </span>
                  <div className="relative w-[245px] py-3 px-4 border rounded-lg text-gray-700  focus-within:ring-2 focus-within:ring-[#fff] cursor-pointer  ">
      <label
        htmlFor="file-upload"
        className="block text-start relative right-6 text-md text-[#404040] cursor-pointer opacity-55"
      >
       بارگذاری تصویر پروفایل
      </label>
      <input
        id="file-upload"
        onChange={handleFileChange}
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
    </div>
    <div className="relative w-full text-[#024227]  my-3 mx-2">
      {file&&'تصویر پروفایل تغییر کرد'}
    </div>
  </div>


</form>
<hr></hr>
  {/* Submit Button */}
<button
    type="submit"
    onClick={handleSubmit}
    className="w-[245px] m-4 mb-2 relative right-[255px]  bg-[#024227] text-white py-3 rounded-md hover:bg-green-900 transition"
  >
    ثبت
  </button>
      </div>
    </div>
  );
}
const EditUSerModal=({data, isOpen, onClose, onEditUser,confirm })=>{
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    fullName: data.fullName||"",
    password: data.password||"",
    mobile: data.phoneNumber||"",
    email: data.email||"",
  });
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const form_Data = new FormData();
    for (const key in formData) {
      form_Data.append(key, formData[key]);
    }
    if (file) {
      form_Data.append("file", file);
    }
   await onEditUser(form_Data)    
      confirm()
      onClose();  
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-fit p-6 px-0 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          <OncloseIcon/>
        </button>

        {/* Title */}
        <h2 className="text-start pb-1 pr-4 font-bold text-lg text-gray-800 mb-6">
          ویرایش کاربر 
        </h2>
       <hr></hr>
        {/* Form Fields */}
        <form className="space-y-4 p-4 text-right"  >
  <div className="grid grid-cols-2 gap-4">
    {/* Full Name */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                <UserNameIcon/>

                  </span>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="fullName"
                    value={formData.fullName}
                    placeholder="نام و نام خانوادگی"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>

    {/* password */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
                  <PasswordIcon/>
                  </span>
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="رمز عبور جدید"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
   

    {/* Mobile Number */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
             <NumberIcon/>

                  </span>
                  <input
                  onChange={handleChange}
                  value={formData.mobile}
                  name="mobile"
                    type="number"
                    placeholder="شماره موبایل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Email */}

    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
              <EmailIcon/>
                  </span>
                  <input
                  name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ایمیل"
                    className="w-[245px] py-3 pr-10 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fff]"
                  />
                </div>
    {/* Profile Upload */}
    <div className="relative w-full">
                  <span className="absolute right-3  top-3 text-gray-400">
            <FileIcon/>
                  </span>
                  <div className="relative w-[245px] py-3 px-4 border rounded-lg text-gray-700  focus-within:ring-2 focus-within:ring-[#fff] cursor-pointer  ">
      <label
        htmlFor="file-upload"
        className="block text-start relative right-6 text-md text-[#404040] cursor-pointer opacity-55"
      >
       بارگذاری تصویر پروفایل
      </label>
      <input
        id="file-upload"
        onChange={handleFileChange}
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
    </div>
    <div className="relative w-full text-[#024227]  my-3 mx-2">
      {file&&'تصویر پروفایل تغییر کرد'}
    </div>
  </div>


</form>
<hr></hr>
  {/* Submit Button */}
<button
    type="submit"
    onClick={handleSubmit}
    className="w-[245px] m-4 mb-2 relative right-[255px]  bg-[#024227] text-white py-3 rounded-md hover:bg-green-900 transition"
  >
    ثبت
  </button>
      </div>
    </div>
  );
}
export {
  EditUSerModal,
  EditManagerModal,
  ConfirmationModalDeleteAdmin,
  ConfirmationModalDeleteAdmins,
  ConfirmationModalDeleteUser,
  ConfirmationModalDeleteUsers,
  ConfirmationModalDeleteMessages,
  ConfirmationModalExit,
  AddManagerModal,
  AddUserModal,
  SpecialistSelectionModal
};
