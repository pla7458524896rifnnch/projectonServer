import React, { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { PauseIcon, PlayIcon } from "../../icons";

const VoiceMessage = ({ audioUrl, duration, time, isSent }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveRef = useRef(null);
  const waveSurfer = useRef(null);

  useEffect(() => {
    // مقداردهی اولیه Wavesurfer
    waveSurfer.current = WaveSurfer.create({
      container: waveRef.current,
      waveColor: "#c1f7d5",
      progressColor: "#1a7b47",
      cursorColor: "transparent",
      height: 30,
      barWidth: 2,
      responsive: true,
    });

    waveSurfer.current.load(audioUrl);

    waveSurfer.current.on("finish", () => {
      setIsPlaying(false);
    });

    return () => {
      waveSurfer.current.destroy();
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (waveSurfer.current) {
      if (isPlaying) {
        waveSurfer.current.pause();
      } else {
        waveSurfer.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`flex  items-center gap-3 ${
        isSent
          ? " " // پیام ارسال‌شده
          : " " // پیام دریافتی
      }   rounded-xl max-w-xs  ` } dir="ltr"
    >
      {/* دکمه پخش/توقف */}
      <button
        onClick={handlePlayPause}
        className="flex items-center justify-center w-10 h-10  rounded-full"
      >
        {isPlaying ? (
          <PauseIcon /> // آیکون توقف
        ) : (
          <PlayIcon /> // آیکون پخش
        )}
      </button>

      {/* موج صوتی */}
      <div className="flex-1" ref={waveRef}></div>

      {/* مدت زمان و وضعیت ارسال */}
      <div className="flex flex-col items-end text-gray-600 text-[10px]">
        <p>{duration}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default VoiceMessage;
