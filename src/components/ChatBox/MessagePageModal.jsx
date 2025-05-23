import { MicIcon, MoneyIcon, OncloseIcon, ProfileIcon, SendIcon, TickMessageIcon, UploadFileIcon } from "../icons";
import { useState, useEffect, useRef } from "react";
import { TextMessage } from "./MessageComponent/MessageText";
import { ImageMessage } from "./MessageComponent/ImageMessage";
import VoiceMessage from "./MessageComponent/VoiceMessage";
import SocketManager from "../../api/socket";
import { useDateToTime } from "../../Hooks/DateToDate";
import ScrollableFeed from 'react-scrollable-feed'
import { fetchWhoAmI, uploadFile } from "../../api/api";
import { File } from "p5";
import Root_ from "postcss/lib/root";
// import { sendPushNotification } from "../../api/sendNotificationUser";
const MessagePageModal = ({ isOpen, onClose, profile,roomName,username,uploadfile }) => {
  if (!isOpen) return null;
  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [isOpenMoney, setIsOpenMoney] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const fileInputRef = useRef(null);
  const [recordingDuration, setRecordingDuration] = useState("00:00");
  const [isMicPressed, setIsMicPressed] = useState(false);
  const socketRef = useRef(null);
  let recordingTimer;
  const [me,setMe]=useState({})
  const toggleDrawer = () => setIsOpenMoney(!isOpenMoney);
  useEffect(() => {
    if (!isOpen) return;
  
    const socketManager = new SocketManager('ws://151.232.36.49:8000', roomName, username);
    socketRef.current = socketManager;
    socketManager.connect();
  
    const handleMessage = (msg) => {
      if (msg.action === 'seen') {
        setAllMessages(prev => 
          prev.map(m => 
            m.message_id === msg.message_id ? { ...m, seen: true } : m
          )
        );
      } else {
        if (msg.username !== username) {
          socketManager.sendMessage({
            action: 'seen',
            message_id: msg.message_id
          });
        }
        setAllMessages(prev => [...prev, msg]);
      }
    };
  
    socketManager.onMessage(handleMessage);
  
    return () => {
      socketManager.disconnect();
      socketRef.current = null;
    };
  }, [isOpen, roomName, username]);
const handleSendMessage = (type, content) => {
  if (type === "file") {
    const fileMessage = {
      message: content.trim(), 
      username: username,
      msg_type: "file",
    };
    socketRef.current.sendMessage(fileMessage);
    setNewMessage("");
  } else if (content.trim() || type !== "text") {
    // ارسال پیام متنی
    const textMessage = {
      message: content.trim(),
      username: username,
      msg_type: type
    };
    socketRef.current.sendMessage(textMessage);
    setNewMessage("");
  }
};
  // Update handleFileUpload
// MessagePageModal.jsx
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    // ۱. فایل را آپلود کنید و منتظر دریافت URL باشید
    const URL = await uploadFile(file); // باید آدرس فایل را از سرور بگیرد
    // ۲. پیام فایل را با URL ارسال کنید
    console.log(URL.data.file_url)
      handleSendMessage("file", URL.data.file_url);
    
  } catch (error) {
    console.error("خطا در آپلود فایل:", error);
  }
};
  const handleAudioStart = () => {
    if (isRecording) return; // جلوگیری از اجرای دوباره ضبط در حال انجام
    setIsMicPressed(true);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        setAudioChunks((prev) => [...prev, e.data]);
      };
  
      recorder.onstop = () => {
        clearInterval(recordingTimer); // توقف تایمر
        const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
        const audioUrl = URL.createObjectURL(audioBlob);
  
        // handleSendMessage("audio", audioUrl); // ارسال صدای ضبط شده
        setAudioChunks([]); // ریست کردن چانک‌ها
      };
  
      recorder.start();
      setMediaRecorder(recorder);
      setAudioChunks([]); // ریست کردن چانک‌ها در شروع ضبط جدید
  
      let seconds = 0;
      clearInterval(recordingTimer); // پاکسازی تایمر قبلی
      recordingTimer = setInterval(() => {
        seconds += 1;
        const minutes = Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0");
        const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
        setRecordingDuration(`${minutes}:${remainingSeconds}`);
      }, 1000);
  
      setIsRecording(true);
    });
  };
  const handleAudioStop = () => {
    if (!isRecording) return; // جلوگیری از توقف ضبطی که وجود ندارد
    setIsMicPressed(false);
    clearInterval(recordingTimer); // توقف تایمر
    setRecordingDuration("00:00"); // ریست تایمر
    if (mediaRecorder) {
      mediaRecorder.stop(); // توقف MediaRecorder
      setIsRecording(false);
    }
  };
  const renderMessage = (message) => {
    switch (message.msg_type) {
      case "msg":
        return (
          <TextMessage  
          content={message.message}  
          time={useDateToTime(message.date_time)}  
          username={message.username === username ? username : false}  
          seen={message.seen}
        />  
        )
      case "file":
        const url=getFileNameAndExtension(message.message)
        return (
            <ImageMessage
            url={message.message}
            fileName={url.name}
            fileSize={message.fileSize || " "}
               fileType={url.extension}
            username={message.username === username ? username : false}  
            time={useDateToTime(message.date_time)}
            seen={message.seen}
            currentUsername={username}
          />
        ) 
      case "audio":
        return (
            <VoiceMessage
            audioUrl={message.content}
            duration={message.duration || "00:00"}
            time={message.time}
            isSent={message.isSent}
          />
        )
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="gradient-bg overflow-hidden w-[680px] min-h-[500px] relative rounded-lg shadow-lg p-6 pr-0">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          <OncloseIcon />
        </button>

        {/* Header */}
        <div className="w-full max-w-md">
          <div className="w-[680px]">
            <div className="flex items-center justify-center relative left-4 gap-4">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <ProfileIcon />
              )}
              <div>
                <h2 className="text-[15px] font-semibold text-gray-800">
                  {profile.fullName}
                </h2>
                <p className="text-[10px] text-gray-500">
                  آخرین بازدید: تست
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Section */}

        <div  
  className="w-full rounded-lg mt-4 p-4 flex flex-col absolute bottom-20 left-0"  
  style={{ maxHeight: "350px" }}  
>  
  <ScrollableFeed className="  flex flex-col">  
    {allMessages.length > 0 ? (  
      allMessages.map((message, index) => (  
        <div  
          key={index}  
          className={`flex ${  
            message.username === username   
              ? "justify-start"   
              : "justify-end relative left-8"  
          } m-2`}  
        >  
          <div  
            className={`${  
              message.username === username   
                ? message.msg_type==='file'?"bg-gray-200":"bg-[#C4FDE5] text-green-800"   
                :  message.msg_type==='file'?"bg-gray-200":"bg-[#F9F9F9] text-gray-800"  
            } px-4 py-2 rounded-md relative max-w-fit`}  
          >  
          {renderMessage(message)}
            {/* Message Indicator */}  
            {message.username === username ? (  
              <span className="absolute -right-[6px] -bottom-[2px]">  
                <svg  
                  width="12"  
                  height="14"  
                  viewBox="0 0 12 14"  
                  fill="none"  
                  xmlns="http://www.w3.org/2000/svg"  
                >  
                  <path  
                    d="M11.1614 13.1304C7.44173 9.12273 6.28753 5.66791 6.05038 1.11758C6.02292 0.590679 5.28874 0.422516 5.05279 0.894427L0.183314 10.6334C0.0767245 10.8466 0.134722 11.1064 0.32866 11.245C3.46666 13.4867 7.80603 13.9142 10.7934 13.9865C11.2387 13.9973 11.4644 13.4569 11.1614 13.1304Z"  
                    fill={message.msg_type=='file'?"#e5e7eb":"#C4FDE5"}  
                  />  
                </svg>  
              </span>  
            ) : (  
              <span className="absolute -left-[6px] -bottom-[2px]">  
                <svg  
                  width="12"  
                  height="14"  
                  viewBox="0 0 12 14"  
                  fill="none"  
                  xmlns="http://www.w3.org/2000/svg"  
                >  
                  <path  
                    d="M0.838647 13.1304C4.55827 9.12273 5.71247 5.66791 5.94962 1.11758C5.97708 0.590679 6.71126 0.422516 6.94721 0.894427L11.8167 10.6334C11.9233 10.8466 11.8653 11.1064 11.6713 11.245C8.53334 13.4867 4.19397 13.9142 1.20664 13.9865C0.761321 13.9973 0.535618 13.4569 0.838647 13.1304Z"  
                    fill={message.msg_type=='file'?"#e5e7eb":"#F9F9F9"}  
                  />  
                </svg>  
              </span>  
            )}  
          </div>  
        </div>  
      ))  
    ) : (  
      <div className="flex items-center relative h-[300px] justify-center">  
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#00572C]" />  
      </div>  
    )}  
  </ScrollableFeed>  
</div>
       {/* Message Input Section */}
<div className="w-[616px] absolute bottom-0 mb-6 flex items-center mr-6 rounded-[20px] border border-[#35DD97] px-4 py-2">
  {!isMicPressed && (
    <>
      <span onClick={toggleDrawer} className="ml-3 cursor-pointer">
        <MoneyIcon />
      </span>
      <label htmlFor="file-upload" className="cursor-pointer">
        <UploadFileIcon />
      </label>
      <input
        type="file"
        id="file-upload"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileUpload}
      />
    </>
  )}

  <input
    type="text"
    placeholder={isMicPressed ? "" : "پیام خود را وارد کنید"}
    className="flex-1 bg-transparent outline-none pr-2 text-gray-700 placeholder-gray-400"
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
  />

  {newMessage.trim() ? (
    <button 
      onClick={() => handleSendMessage("msg", newMessage)}
      className="pr-3 text-sm"
    >
      <SendIcon />
    </button>
  ) : (
    <span
      className={`cursor-pointer ${isMicPressed ? "bg-[#C7EBDC] rounded-full shadow-lg" : "bg-transparent"}`}
      onMouseDown={handleAudioStart}
      onMouseUp={handleAudioStop}
    >
      {isRecording ? (
        <>
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute flex items-center gap-1 right-8 bottom-1">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#ED2E2E"/>
                </svg>
                <span className="text-xs text-red-500">{recordingDuration}</span>
              </span>
            </div>
            <MicIcon className="text-red-500" />
          </div>
        </>
      ) : (
        <MicIcon />
      )}
    </span>
  )}
</div>
        {/* Money Drawer */}
        <div
          className={`fixed absolute inset-x-0 w-[680px] -bottom-0 right-0 bg-[#F9F9F9] shadow-lg transition-all duration-300 transform ${
            isOpenMoney ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="p-4 flex flex-col items-center">
            <button
              onClick={toggleDrawer}
              className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
            >
              <OncloseIcon />
            </button>
            <h3 className="absolute right-3 text-[#000000] top-3">
              مبلغ مورد نظر را ثبت کنید.
            </h3>
            <div className="mt-5">
              <div className="bg-[#F9F9F9] p-4 rounded-md">
                <div className="relative bg-inherit" dir="rtl">
                  <input
                    type="text"
                    name="mo"
                    className="peer bg-transparent h-10 w-72 rounded-md text-[#024227] placeholder-transparent ring-2 px-2 ring-[#024227] focus:ring-[#024227] outline-none"
                  />
                  <label
                    className="absolute cursor-text right-2 top-2 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:right-3 peer-focus:text-[#024227] peer-focus:text-sm transition-all"
                  >
                    مبلغ
                  </label>
                  <p className="absolute left-2 top-3 text-[13px] text-[#868686]">
                    ریال
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={toggleDrawer}
              className="bg-[#024227] w-[50%] text-white py-2 px-6 rounded-md mt-4"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
function getFileNameAndExtension(url) {  
  const filenameWithExtension = url.substring(url.lastIndexOf('/') + 1);  
  const [name, extension] = filenameWithExtension.split('.');  
  return {  
      name: decodeURIComponent(name),
      extension: extension 
  };  
}  

export default MessagePageModal;
