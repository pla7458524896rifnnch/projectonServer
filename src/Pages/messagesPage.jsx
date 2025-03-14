import   { useEffect, useState } from "react";
import { ConfirmationModalDeleteMessages, SpecialistSelectionModal } from "../components/modals";
import useGetMassagesPageStore from "../Hooks/MessagesPage";
import { ArrowDownIcon, CheckboxIcon, ErrorPic, ProfileIcon, Trash2Icon, TrashIcon } from "../components/icons";
import MessagePageModal from "../components/ChatBox/MessagePageModal";
import { fetchWhoAmI } from "../api/api";
function MessagesPage() {
  const { messages,loading,data,error,fetchAllMessages,SendDirect,uploadfile,fetchAllAdmins,fetchAllUsers,users,deleteMessagesById}=useGetMassagesPageStore();
  const [user,setUser]=useState({})
  const [profile,setProfile]=useState({})

  const [hasFetchedMessages, setHasFetchedMessages] = useState(false);
  const [isModalSendOpen, setModalSendOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [idSelected,setIdSelected]=useState(null)
  const [msgModalOpen,setmsgModalOpen]=useState(false)
  const [selectAll, setSelectAll] = useState(false);  
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomName,setRoomName]=useState('')
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData =messages&&(messages).slice(indexOfFirstRow, indexOfLastRow);
  const totalPages =messages&& Math.ceil((messages).length / rowsPerPage);
  useEffect(()=>{
    const fetchData=async()=>{
      await fetchAllUsers()
      !loading&&fetchAllMessages()
      const res=await fetchWhoAmI();
      setUser(res.data)
    }
    if (!hasFetchedMessages) {
    fetchData()
      setTimeout(() => {
        setHasFetchedMessages(true)
      }, 1000);
    }
  },[hasFetchedMessages])
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleConfirm = () => {
    if ((messages||dataDemo).length==selectAll.length) {
      deleteMessagesById(selectAll)
    }else{
      deleteMessagesById(selectedItems)
    }
    setModalOpen(false);
  };
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);  
    } else {
      setSelectedItems(( dataDemo).map((item) => item.id));  
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
  
  
  const handleReloadMessage = () => {  
    setHasFetchedMessages(false)
};
  const specialistsDemo = [
    {
      id:1,
      name: "دکتر علی‌اکبر باقریان",
      description: "فوق تخصص کشاورزی از دانشگاه شیراز",
    },
    {
      id:2,
      name: "دکتر علیرضا مهریان",
      description: "فوق تخصص کشاورزی از دانشگاه تهران",
    },
    {
      id:3,
      name: "دکتر محمدجواد نوروزی شاد",
      description: "فوق تخصص کشاورزی از دانشگاه یاسوج",
    },
    {
      id:4,
      name: "دکتر هستی مرجانه",
      description: "فوق تخصص کشاورزی از دانشگاه تهران",
    },
    {
      id:5,
      name: "دکتر فاطمه همایونفر",
      description: "فوق تخصص کشاورزی از دانشگاه شیراز",
    },
    {
      id:6,
      name: "دکتر نیما شریفی‌نیا",
      description: "فوق تخصص کشاورزی از دانشگاه تبریز",
    },
  ];
  if (loading) {
   return (<><div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center font-custom" dir="rtl">
   <div className="flex items-center relative h-[100%] justify-center">
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#00572C]" />
    </div>
    </div>
    </>)
  }
  if (error) {
   return <div className="p-6 bg-gray-50 min-h-screen flex flex-col gap-2 justify-center items-center font-custom" dir="rtl">
    <ErrorPic/>
    <h1 className="tx-gr mt-6 text-lg">
    مشکلی در سمت سرور پیش امده !
    </h1>
   </div>
  }
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-custom" dir="rtl">
      {/* Header */}
     {messages&&messages.length==0?
     (<div className=" flex flex-col min-h-screen gap-2 justify-center items-center">
       <ErrorPic/>
    <h1 className="tx-gr mt-6 text-lg">
    پیامی برای شما ارسال نشده!
    </h1>
      </div>)
     :
     ( <><div className="flex flex-col sm:flex-row justify-between mb-7 relative">
          <div className="flex items-center">
            <button className="flex items-center border border-gray-300 text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
              <span>جدیدترین ها</span>
              <svg width="16" className="mr-2" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99904 11.1999C7.53237 11.1999 7.0657 11.0199 6.71237 10.6666L2.3657 6.31993C2.17237 6.12659 2.17237 5.8066 2.3657 5.61326C2.55904 5.41993 2.87904 5.41993 3.07237 5.61326L7.41904 9.95993C7.73904 10.2799 8.25904 10.2799 8.57904 9.95993L12.9257 5.61326C13.119 5.41993 13.439 5.41993 13.6324 5.61326C13.8257 5.8066 13.8257 6.12659 13.6324 6.31993L9.2857 10.6666C8.93237 11.0199 8.4657 11.1999 7.99904 11.1999Z" fill="#404040" />
              </svg>
            </button>
          </div>
          <p className="absolute flex items-center text-[#C30000] text-[14px] left-5 top-5">
            <span>{selectedItems.length > 0 && `${selectedItems.length} ردیف انتخاب شدند `}</span>
            {selectedItems.length > 0 && (<TrashIcon onClick={() => setModalOpen(true)} />)}
          </p>
        </div><div className="overflow-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="rounded-lg">
                <tr className="bg-[#EDEDED] text-[#606060]">
                  <th className="pt-2 text-center">
                    <div className="inline-flex items-center my-5">
                      <label className="flex items-center cursor-pointer relative">
                        <input
                          checked={selectAll}
                          onChange={handleSelectAll}
                          type="checkbox"
                          className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-[7px] bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-[#003A06] checked:border-[#003a06a9]"
                          id="check-custom-style" />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <CheckboxIcon />
                        </span>
                      </label>
                    </div>
                  </th>
                  <th className="p-3 text-right font-light">
                    <div className="flex gap-2">
                      <span><ArrowDownIcon /></span>
                      <span>کاربران</span>
                    </div>
                  </th>
                  <th className="p-3 text-right font-light">
                    <div className="flex gap-2">
                      <span><ArrowDownIcon /></span>
                      <span>شماره موبایل</span>
                    </div>
                  </th>
                  <th className="p-3 text-right font-light">
                    <div className="flex gap-2">
                      <span><ArrowDownIcon /></span>
                      <span>تاریخ پیام</span>
                    </div>
                  </th>
                  <th className="p-3 text-right font-light">
                    <div className="flex gap-2">
                      <span><ArrowDownIcon /></span>
                      <span>وضعیت</span>
                    </div>
                  </th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>

                {messages && currentData.map((row, index) => (
                  <tr key={index} className="border hover:bg-gray-100">
                    <td className="p-3 text-center">
                      <div className="inline-flex items-center">
                        <label className="flex items-center cursor-pointer relative">
                          <input
                            checked={selectedItems.includes(row.id)}
                            onChange={() => handleItemClick(row.id)}
                            type="checkbox"
                            className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-[7px] bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-[#003A06] checked:border-[#003a06a9]"
                            id="check-custom-style" />
                          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <CheckboxIcon />
                          </span>
                        </label>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex gap-3 items-center">
                        {row.profile_img ? (
                          <img src={row.profile_img} alt="Profile" className="w-12 h-12 rounded-full" />
                        ) : (

                          <ProfileIcon />
                        )}
                        <div>
                          <div> {users && users.find(i => i.phoneNumber == row.room_users[0])?.fullName}</div>
                          <div className="text-sm text-gray-500">{users && users.find(i => i.phoneNumber == row.room_users[0])?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-right" dir="ltr">{users && users.find(i => i.phoneNumber == row.room_users[0])?.phoneNumber}</td>
                    <td className="p-3 text-center">{row.date}</td>
                    <td className="p-3 text-center">
                      <div className={`py-2 px-5 rounded-lg ${row.status === "تایید شده" ? 'bg-[#EBFFEE] text-[#024227]' :
                        row.status === "در انتظار پرداخت" ? 'bg-[#FFF8E1] text-[#975102]' :
                          row.status === "درخواست" ? 'bg-[#FFF2F2] text-[#900B09]' :
                            "bg-[#EDEDED] text-[#606060]"}`}>تست</div>
                    </td>
                    <td className="p-3 text-center">{row.responses}</td>
                    <td className="p-3 text-center flex justify-center gap-3">
                      <button
                        onMouseDown={() => {
                          fetchAllAdmins()
                          setRoomName(row.room_name);
                        }}
                        onClick={() => {
                          setModalSendOpen(true);
                        } }
                        className="bg-[#ffffff] w-[100px] h-[46px] rounded-lg border border-[#024227]"
                      >
                        ارسال به
                      </button>
                      <button
                        onMouseDown={() => {
                          setRoomName(row.room_name);
                          setProfile(users && users.find(i => i.phoneNumber == row.room_users[0]));
                        } }
                        onClick={() => setmsgModalOpen(true)}
                        className="bg-[#024227] w-[100px] h-[46px] text-white rounded-lg"
                      >
                        مشاهده
                      </button>

                      {/* <button onClick={() => setModalOpen(true)} className="mx-2">
                        <Trash2Icon />
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
  
    {messages&&(  <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-b-sm py-4 border border-t-0 border-gray-300">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-3 bg-gray-100 rounded-md ${currentPage === 1 && 'disabled:opacity-40'}`}
        >
          قبلی
        </button>
        <div>صفحه {currentPage} از {totalPages}</div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-3 bg-gray-100 rounded-md ${currentPage === totalPages && 'disabled:opacity-40'}`}
        >
          بعدی
        </button>
      </div>)}
      </>)}
      {/* Modals */}
      <SpecialistSelectionModal
        isOpen={isModalSendOpen}
        onClose={() => setModalSendOpen(false)}
        setIdSelected={setIdSelected}
        roomName={roomName}
        selectedSpecialist={idSelected}
        specialists={data}
        handleReloadMessage={handleReloadMessage}
        SendDirect={SendDirect}
      />
        <MessagePageModal
        isOpen={msgModalOpen}
        onClose={() => setmsgModalOpen(false)}
        profile={profile}
        roomName={roomName}
        username={user&&user.phoneNumber}
        uploadfile={uploadfile}
      />
      <ConfirmationModalDeleteMessages
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
  
}

export default MessagesPage;
