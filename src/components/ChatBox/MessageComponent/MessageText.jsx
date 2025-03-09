import { TickMessageIcon, TickMessageIconFalse } from "../../icons";

export const TextMessage = ({ content, time, username,seen }) => {
    return (
      <div
        className={`flex flex-col  rounded-xl max-w-xs  `}
        style={{
          position: "relative",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
          wordWrap: "break-word",
          color:"black"
        }}
      >
        <p className="mb-1">{content}</p>
        <div className="flex flex-row-reverse items-center gap-1 justify-end text-[10px] text-gray-500">
          <span>{time}</span>
          {username&&(seen ? <TickMessageIcon />:<TickMessageIconFalse/>)} {/* نمایش آیکون تیک */}

        </div>
      </div>
    );
  };
  