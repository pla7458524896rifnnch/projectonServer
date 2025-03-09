import { FileChatBoxIcon, TickMessageIcon, TickMessageIconFalse } from "../../icons";

export const ImageMessage = ({ fileName, fileSize, fileType,url, time, seen,username ,currentUsername}) => {
  const isOwnMessage = username === currentUsername;
    return (
      <div
        className={`flex flex-col ${
          isOwnMessage
            ? "items-start    " // پیام ارسال‌شده
            : "items-end    " // پیام دریافتی
        }   rounded-xl max-w-xs  `}
        style={{
          position: "relative",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
          wordWrap: "break-word",
          direction:"rtl"
        }}
      >
        <div className="bg-gray-200 rounded-md py-1 px-2 pr-0">
        <div className="flex items-center  gap-2">
          <div className="w-12 h-8   flex items-center justify-center rounded-full">
            <FileChatBoxIcon /> {/* آیکون فایل */}
          </div>
          <p className="font-semibold  text-[12px] truncate"><a target="_blank"  href={url} >{fileName}</a></p>
        </div>
        {/* اطلاعات فایل */}
        </div>
        {/* آیکون و نام فایل */}
        <p className={`text-[10px]   text-gray-600 mt-1 absolute ${isOwnMessage?'left-0':'right-0'} bottom-1`}>
          {fileSize} • {fileType}
        </p>
        {/* زمان و وضعیت ارسال */}
        <div className={`flex   items-center gap-1 justify-start  text-[10px] text-gray-500 mt-2   
             
                
                `}>
                   {username&&(seen ? <TickMessageIcon />:<TickMessageIconFalse/>)} {/* نمایش آیکون تیک */}
          <span >{time}</span>
        </div>
       
       
      </div>
    );
  };
  

  // import { FileChatBoxIcon, TickMessageIcon } from "../../icons";

// export const ImageMessage = ({ fileName, fileSize, fileType, fileUrl, time, isSent }) => {
//   const isImage = fileType === "jpg" || fileType === "png" || fileType === "jpeg" || fileType === "gif";

//   return (
//     <div
//       className={`flex flex-col ${
//         isSent ? "items-start" : "items-end"
//       } rounded-xl max-w-xs`}
//       style={{
//         position: "relative",
//         borderRadius: "8px",
//         fontSize: "14px",
//         fontWeight: "400",
//         lineHeight: "20px",
//         wordWrap: "break-word",
//         direction: "rtl",
//       }}
//     >
//       <div className="bg-gray-200 rounded-lg py-1 px-2 pr-0">
//         <div className="flex items-center gap-2">
//           <div className="w-12 h-8 flex items-center justify-center rounded-full">
//             {isImage ? (
//               <img
//                 src={fileUrl}
//                 alt={fileName}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             ) : (
//               <FileChatBoxIcon /> // آیکون فایل برای فایل‌های غیر تصویری
//             )}
//           </div>
//           <p className="font-semibold text-[12px] truncate">{fileName}</p>
//         </div>
//       </div>

//       {/* اطلاعات فایل */}
//       <p className="text-[10px] text-gray-600 mt-1">
//         {fileSize} • {fileType}
//       </p>

//       {/* لینک دانلود */}
//       {!isImage && fileUrl && (
//         <a
//           href={fileUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 text-[12px] underline mt-1"
//         >
//           دانلود فایل
//         </a>
//       )}

//       {/* زمان و وضعیت ارسال */}
//       <div
//         className={`flex items-center gap-1 justify-start text-[10px] text-gray-500 mt-2 ${
//           isSent ? "text-center" : "text-right"
//         }`}
//       >
//         <span>{time}</span>
//         {isSent && <TickMessageIcon />} {/* آیکون تیک */}
//       </div>
//     </div>
//   );
// };
