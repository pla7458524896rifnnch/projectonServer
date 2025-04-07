import { FileChatBoxIcon, TickMessageIcon, TickMessageIconFalse } from "../../icons";

export const ImageMessage = ({ fileName, fileSize, fileType,url, time, seen,username ,currentUsername}) => {
  const isOwnMessage = username === currentUsername;
    return (
      <div
        className={`flex flex-col ${
          isOwnMessage
            ? "items-start    " 
            : "items-end    "
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
            <FileChatBoxIcon /> 
          </div>
          <p className="font-semibold  text-[12px] truncate"><a target="_blank"  href={url} >{fileName}</a></p>
        </div>
        </div>
        <p className={`text-[10px]   text-gray-600 mt-1 absolute ${isOwnMessage?'left-0':'right-0'} bottom-1`}>
          {fileSize}  {fileType}
        </p>
        <div className={`flex   items-center gap-1 justify-start  text-[10px] text-gray-500 mt-2   
             
                
                `}>
                   {username&&(seen ? <TickMessageIcon />:<TickMessageIconFalse/>)}
          <span >{time}</span>
        </div>
       
       
      </div>
    );
  };
  

