import  { useEffect, useState } from "react";
import { AddManagerModal, ConfirmationModalDeleteAdmin, EditManagerModal  } from "../../components/modals";
import AdminPageStore from "../../store/AdminPageStore";
import { ArrowDownIcon, CheckboxIcon,   DownFlashIcon, EditIcon, PlusIcon, ProfileIcon, Trash2Icon, TrashIcon } from "../../components/icons";
import useDateToDate from "../../Hooks/DateToDate";
const dataDemo = [
  {
    id: 1,
    name: "فاطمه همایونفر",
    email: "homayoonfar@gmail.com",
    role: "مهندس کشاورزی",
    university: "دانشگاه شیراز",
    mobile: "+98 917 917 9179",
    responses: 634,
    lastVisit: "1402/09/14 - 21:57",
  },
  {
    id: 2,
    name: "علی رضایی",
    email: "ali.rezaei@gmail.com",
    role: "مهندس برق",
    university: "دانشگاه تهران",
    mobile: "+98 912 123 4567",
    responses: 120,
    lastVisit: "1402/09/14 - 15:43",
  },
  {
    id: 3,
    name: "سارا احمدی",
    email: "sara.ahmadi@gmail.com",
    role: "دکترای شیمی",
    university: "دانشگاه اصفهان",
    mobile: "+98 931 456 7890",
    responses: 450,
    lastVisit: "1402/09/13 - 09:30",
  },
  {
    id: 4,
    name: "رضا محمدی",
    email: "reza.mohammadi@gmail.com",
    role: "مهندس مکانیک",
    university: "دانشگاه صنعتی شریف",
    mobile: "+98 916 789 0123",
    responses: 300,
    lastVisit: "1402/09/12 - 22:10",
  },
  {
    id: 5,
    name: "نگار صادقی",
    email: "negar.sadeghi@gmail.com",
    role: "طراح گرافیک",
    university: "دانشگاه هنر",
    mobile: "+98 935 789 4561",
    responses: 520,
    lastVisit: "1402/09/11 - 11:15",
  },
  {
    id: 6,
    name: "محمد حسینی",
    email: "m.hosseini@gmail.com",
    role: "برنامه‌نویس",
    university: "دانشگاه امیرکبیر",
    mobile: "+98 921 987 6543",
    responses: 700,
    lastVisit: "1402/09/10 - 17:45",
  },
  {
    id: 7,
    name: "الهام شریفی",
    email: "elham.sharifi@gmail.com",
    role: "پژوهشگر علوم زیستی",
    university: "دانشگاه فردوسی",
    mobile: "+98 915 654 3210",
    responses: 360,
    lastVisit: "1402/09/09 - 19:20",
  },
  {
    id: 8,
    name: "امیر نادری",
    email: "amir.naderi@gmail.com",
    role: "کارشناس شبکه",
    university: "دانشگاه آزاد مشهد",
    mobile: "+98 937 321 0987",
    responses: 240,
    lastVisit: "1402/09/08 - 08:50",
  },
  {
    id: 9,
    name: "مینا کریمی",
    email: "mina.karimi@gmail.com",
    role: "مشاور مالی",
    university: "دانشگاه علامه طباطبایی",
    mobile: "+98 923 456 7890",
    responses: 190,
    lastVisit: "1402/09/07 - 14:30",
  },
  {
    id: 10,
    name: "حسین کاظمی",
    email: "hossein.kazemi@gmail.com",
    role: "مدیر پروژه",
    university: "دانشگاه علم و صنعت",
    mobile: "+98 914 987 1234",
    responses: 580,
    lastVisit: "1402/09/06 - 12:10",
  },
];
function AdminPage() {
  const {
    loading,
    data,
    error,
    fetchAllAdmins,
    admins,
    AddAdmin,
    EditAdmin ,
    deleteAdmins ,
    fetchAdmin,
    adminById
  }=AdminPageStore();
  const {DateToFa}=useDateToDate()
  //states
  const [selectAll, setSelectAll] = useState(false);  
  const [selectedItems, setSelectedItems] = useState([]);  
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalAddOpen, setModalAddOpen] = useState(false);
  const [isModalEditOpen,setModalEditOpen]=useState(false);
  const [idSelectedEdit,setidSelectedEdit]=useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [hasFetchedAdmins, setHasFetchedAdmins] = useState(false);


  //varibles
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData =admins&&(admins).slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = admins&&Math.ceil((admins).length / rowsPerPage);

 
  //functions
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleConfirmDelete = () => {
    if ((admins).length==selectAll.length) {
      deleteAdmins(selectAll)
    }else{
      deleteAdmins(selectedItems)
    }
    setModalOpen(false);
  };
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);  
    } else {
      setSelectedItems((admins).map((item) => item.user));  
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
  const handleReloadAmins = () => {  
    fetchAllAdmins();
    setHasFetchedAdmins(false)
};

  useEffect(()=>{
if(!hasFetchedAdmins){
  fetchAllAdmins();
  setHasFetchedAdmins(true)
}
  },[])
  

 

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-custom " dir="rtl">
      {/* Header */}
      <div className="flex relative mb-7 space-x-4 rtl:space-x-reverse">
        <div className="flex items-center">
        <button className="flex items-center border border-gray-300 text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
        <span>مرتب سازی</span>
        <DownFlashIcon/>
</button>

        </div>
      <div className="flex  items-center">
      <button onClick={()=>setModalAddOpen(true)} className="flex items-center pl-7 bg-[#024227] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-900">
        <span className="text-xl font-bold ml-2">
          <PlusIcon/>
        </span> افزودن مدیر
      </button>
      </div>
      
      <p className="absolute flex items-center text-[#C30000] text-[14px] left-5 top-5"><span>{selectedItems.length>0&&(`${selectedItems.length} ردیف انتخاب شدند `)}</span>
{selectedItems.length>0&&(<TrashIcon onClick={() => setModalOpen(true)}/>)}
 </p>
    </div>


    {!hasFetchedAdmins?(
 <div className='flex items-center relative top-[150px] h-[100%] justify-center'>
 <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#00572C]" />
 </div>
    ):(
    <>
     {/* Table */}
     <div className="overflow-auto">
        <table className="w-full bg-white rounded-lg shadow">
          <thead className="rounded-lg ">
            <tr className="bg-[#EDEDED] text-[#606060] rounded-lg">
              <th className="pt-2 text-center">
              <div className="inline-flex items-center my-5">
  <label className="flex items-center cursor-pointer relative">
    <input  checked={selectAll}
    onChange={handleSelectAll} type="checkbox" className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-[7px] bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-[#003A06] checked:border-[#003a06a9]" id="check-custom-style" />
    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <CheckboxIcon/>
    </span>
  </label>
</div>
              </th>
              <th className="p-3 text-right  font-light ">
<div className="flex gap-2">
<span>
                  <ArrowDownIcon/>
</span><span>مدیران</span>
</div>
</th>
              <th className="p-3 text-right font-light ">
                <div className="flex gap-2">
                <span>
                <ArrowDownIcon/>
</span><span>تخصص</span>
                    </div> </th>
              <th className="p-3 text-right font-light  "><div className="flex gap-2">
              <span>
              <ArrowDownIcon/>
</span><span>شماره موبایل</span>
                </div>  </th>
              <th className="p-3 text-right  font-light  "><div className="flex gap-2">
              <span>
                <ArrowDownIcon/>
</span><span>پاسخ‌ها</span>
              </div>     
              </th>
              <th className="p-3 text-right font-light  "><div className="flex gap-2">
              <span>
              <ArrowDownIcon/>
</span><span>آخرین بازدید</span>
              </div>
              </th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {admins&&(currentData).map((row, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="p-3 text-center">
                <div className="inline-flex items-center">
  <label className="flex items-center cursor-pointer relative">
    <input 
    checked={selectedItems.includes(row.user)}
    onChange={() => handleItemClick(row.user)}
    type="checkbox" className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-[7px] bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-[#003A06] checked:border-[#003a06a9]" id="check-custom-style" />
    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <CheckboxIcon/>
    </span>
  </label>
</div>
                </td>
                <td className="p-3 text-right">
                  
                <div className="flex gap-3 ">
                {row.profile_img?(<img
              src={row.profile_img}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />):(<ProfileIcon/>)}
                        <div>
                        <div>{row.fullName}</div>
                        <div className="text-sm text-gray-500">{row.email} 
                        </div>
                       
                    </div>
                  </div>
                </td>
                <td className="p-3 text-right">
                   
                  <div>{row.specialties}</div>
                 
                  <div className="text-sm text-gray-500">{row.university}</div>
                </td>
                <td className="p-3 text-right" dir="ltr">{row.phoneNumber}</td>
                <td className="p-3 text-center">0</td>
                <td className="p-3 text-right">{DateToFa(row.last_login)}</td>
                {console.log(row.last_login)}
                <td className="p-3 text-center">
                    <button  onMouseDown={()=>setidSelectedEdit(row.user)} onClick={()=>{
                    fetchAdmin(idSelectedEdit)
                    setModalEditOpen(true)
                  }} className={` mx-2`}>
                    <EditIcon/>
</button>
                  <button onClick={() => setModalOpen(true)} className="text-red-500 mx-2">
                    <Trash2Icon/>
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
      {/* Pagination */}
      <div className="flex justify-between items-center bg-white rounded-b-sm py-4 border border-t-0 border-gray-300">
  <button onClick={handlePrevious} disabled={currentPage === 1} className={`px-4 py-2 mx-3 bg-gray-100 rounded-md ${currentPage===1&&'disabled:opacity-40'}`}>قبلی</button>
  <div>صفحه {currentPage} از {totalPages}</div>
  <button onClick={handleNext} disabled={currentPage === totalPages} className={`px-4 py-2 mx-3 bg-gray-100 rounded-md ${currentPage===totalPages&&'disabled:opacity-40'}`}>بعدی</button>
</div>
    </>
    )}
     

{/* modals */}
        <ConfirmationModalDeleteAdmin isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete} />
        <AddManagerModal
        isOpen={isModalAddOpen}
        onClose={() => setModalAddOpen(false)}
        onAddAdmin={AddAdmin}
        />
        <EditManagerModal 
        data={admins&&admins.find(i=>i.user==idSelectedEdit)}
        isOpen={isModalEditOpen}
        onClose={() => setModalEditOpen(false)}
        onEditAdmin={EditAdmin}
        />
    </div>
  );
}

export default AdminPage;
