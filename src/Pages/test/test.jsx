import   { useEffect, useState } from "react";
import { AddUserModal, ConfirmationModalDeleteUser, EditUSerModal} from "../../components/modals";
import useGetUsersPageStore from "../../Hooks/UserPage";
import { ArrowDownIcon, CheckboxIcon,  DownFlashIcon, EditIcon, PlusIcon, ProfileIcon, Trash2Icon, TrashIcon } from "../../components/icons";

function UserPage() {
  const { loading, users, fetchAllUsers, AddUser, deleteUsers,EditUser ,userById,fetchUser } = useGetUsersPageStore(); 
  const [hasFetchedUsers, setHasFetchedUsers] = useState(false);
   useEffect(()=>{
    if (!hasFetchedUsers) {  
      fetchAllUsers();  
      setHasFetchedUsers(true);
  } 
   },[])

   const [isModalOpen, setModalOpen] = useState(false);
  const [isModalAddOpen, setModalAddOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);  
  const [isModalEditOpen,setModalEditOpen]=useState(false)
  const [idSelectedEdit,setidSelectedEdit]=useState(null)
  const [selectedItems, setSelectedItems] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData =users&&(users).slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = users&& Math.ceil((users).length / rowsPerPage);
  const handleReloadUsers = () => {  
    fetchAllUsers();
    setHasFetchedUsers(false)
};
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // modal and chart variables and functions
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);  
    } else {
      setSelectedItems((users).map((item) => item.user));  
    }
    setSelectAll(!selectAll);
  };
  const handleItemClick = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id)); 
    } else {
      setSelectedItems([...selectedItems, id]);  
    }
  };
  const handleConfirm = () => {
    if (users) {
      if ((users).length==selectAll.length) {
        deleteUsers(selectAll)
      }else{
        deleteUsers(selectedItems)
      }
      setModalOpen(false);
    }
   
  };
  
 
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-custom" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row mb-7 relative sm:space-x-4 rtl:space-x-reverse">
        <div className="flex items-center justify-center sm:justify-start">
          <button className="flex items-center border border-gray-300 text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
            <span>مرتب سازی</span>
            <DownFlashIcon />
          </button>
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <button onClick={() => setModalAddOpen(true)} className="flex items-center bg-[#024227] pl-7 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-900">
            <span className="text-xl font-bold ml-2">
              <PlusIcon />
            </span> افزودن کاربر
          </button>
        </div>
        <p className="absolute flex items-center text-[#C30000] text-[14px] left-5 top-5">
          <span>{selectedItems.length > 0 && `${selectedItems.length} ردیف انتخاب شدند`}</span>
          {selectedItems.length > 0 && <TrashIcon onClick={() => setModalOpen(true)} />}
        </p>
      </div>
  
  {!hasFetchedUsers?(
    <div className='flex items-center relative top-[150px] h-[100%] justify-center'>
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#00572C]" />
          </div>
  ):(
<>
{/* Table */}
<div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow">
          <thead className="rounded-lg">
            <tr className="bg-[#EDEDED] text-[#606060] rounded-lg">
              <th className="pt-2 text-center">
                <div className="inline-flex items-center my-5">
                  <label className="flex items-center cursor-pointer relative">
                    <input checked={selectAll} onChange={handleSelectAll} type="checkbox" className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-[7px] bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-[#003A06] checked:border-[#003a06a9]" id="check-custom-style" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <CheckboxIcon />
                    </span>
                  </label>
                </div>
              </th>
              <th className="p-3 text-right font-light">
                <div className="flex gap-2">
                  <span>
                    <ArrowDownIcon/>
                  </span>
                  <span>کاربران</span>
                </div>
              </th>
              <th className="p-3 text-right font-light">
                <div className="flex gap-2">
                  <span>
                    <ArrowDownIcon />
                  </span>
                  <span>شماره موبایل</span>
                </div>
              </th>
              <th className="p-3 text-right font-light">
                <div className="flex gap-2">
                  <span>
                    <ArrowDownIcon />
                  </span>
                  <span>پیام ها</span>
                </div>
              </th>
              <th className="p-3 text-right font-light">
                <div className="flex gap-2">
                  <span>
                    <ArrowDownIcon />
                  </span>
                  <span>پرداختی ها</span>
                </div>
              </th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {users&&(currentData).map((row, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="p-3 text-center">
                  <div className="inline-flex items-center">
                    <label className="flex items-center cursor-pointer relative">
                      <input checked={selectedItems.includes(row.user)} onChange={() => handleItemClick(row.user)} type="checkbox" className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-[7px] bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-[#003A06] checked:border-[#003a06a9]" id="check-custom-style" />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <CheckboxIcon />
                      </span>
                    </label>
                  </div>
                </td>
                <td className="p-3 text-right">
                  <div className="flex gap-3">
                    {row.profile_img ? (
                      <img src={row.profile_img} alt="Profile" className="w-12 h-12 rounded-full" />
                    ) : (
                      <ProfileIcon />
                    )}
                    <div>
                      <div>{row.fullName}</div>
                      <div className="text-sm text-gray-500">{row.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-right" dir="ltr">{row.phoneNumber}</td>
                <td className="p-3 text-right">0</td>
                <td className="p-3 text-right flex mt-2">
                  <h6>0</h6> <h6 className="text-[#ADADAD] pr-2 text-[15px] ">ریال</h6>
                </td>
                <td className="p-3 text-right">
                  <button className="px-2" onMouseDown={() => setidSelectedEdit(row.user)} onClick={() => { fetchUser(idSelectedEdit); setModalEditOpen(true); }}><EditIcon /></button>
                  <button onClick={() => setModalOpen(true)} className="text-red-500 mx-2">
                    <Trash2Icon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-b-sm py-4 border border-t-0 border-gray-300">
        <button onClick={handlePrevious} disabled={currentPage === 1} className={`px-4 py-2 mx-3 bg-gray-100 rounded-md ${currentPage === 1 && 'disabled:opacity-40'}`}>قبلی</button>
        <div>صفحه {currentPage} از {totalPages}</div>
        <button onClick={handleNext} disabled={currentPage === totalPages} className={`px-4 py-2 mx-3 bg-gray-100 rounded-md ${currentPage === totalPages && 'disabled:opacity-40'}`}>بعدی</button>
      </div>
  
</>
  )}
      
      <ConfirmationModalDeleteUser isOpen={isModalOpen} onClose={() => setModalOpen(false)} onConfirm={handleConfirm} />
      <AddUserModal isOpen={isModalAddOpen} onClose={() => setModalAddOpen(false)} onAddUser={AddUser} />
      <EditUSerModal data={users&&users.find(i=>i.user==idSelectedEdit)} isOpen={isModalEditOpen} onClose={() => setModalEditOpen(false)} onEditUser={EditUser} />
    </div>
  );
  
  
}

export default UserPage;
