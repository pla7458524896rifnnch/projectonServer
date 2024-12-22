import React, { useState } from "react";
import { DownFlashIcon } from "./icons";

const CircleChart = ({ data, labels, title }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tooltipStyle, setTooltipStyle] = useState({});

  const total = data.reduce((acc, val) => acc + val, 0) || 1;  

  const colors = ["#024227", "#23CD86", "#96F9CF"];
  const numSegments = data.length;
  const radii = Array.from({ length: numSegments }, (_, index) => 50 - index * 8); // Dynamic radii

  const handleMouseEnter = (index, event) => {
    setHoveredIndex(index);
    handleMouseMove(event);  
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTooltipStyle({
      left: `${clientX + 10}px`,  
      top: `${clientY - 40}px`,  
      position: "fixed",  
      pointerEvents: "none",  
      zIndex: 1000,  
    });
  };

  return (
    <div className="w-full rounded-lg p-6 relative">
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600 flex relative  bottom-7 right-3 text-sm cursor-pointer">
          <DownFlashIcon/>
          <span className="relative bottom-[px] text-[13px]">این هفته</span>
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <div className="flex items-center justify-between relative">
        <div className="relative w-60 h-60">
          <svg className="w-[250px] h-[250px]" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            {/* Draw base circles */}
            {radii.map((radius, index) => (
              <circle
                key={index}
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="#E9ECEF"
                strokeWidth="2"
              />
            ))}

            {/* Draw pie chart slices */}
            {data.map((value, index) => {
              const percentage = (value / total) * 100;
              const circumference = 2 * Math.PI * radii[index];
              const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
              const angleOffset = data.slice(0, index).reduce((acc, val) => acc + (val / total) * 360, 0); // Calculate starting angle

              return (
                <circle
                  strokeLinecap="round"
                  key={index}
                  cx="60"
                  cy="60"
                  r={radii[index]}
                  fill="none"
                  stroke={colors[index % colors.length]}
                  strokeWidth="4"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={0}
                  transform={`rotate(-90 60 60)`}
                  onMouseEnter={(event) => handleMouseEnter(index, event)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              );
            })}
          </svg>

          {/* Tooltip for the hovered segment */}
          {hoveredIndex !== null && (
            <div
              style={tooltipStyle}
              className="absolute bg-[#202020] text-white border-gray-300 shadow-lg p-2 rounded text-center"
            >
              <div className="text-sm">پیام های {labels[hoveredIndex]}</div>
            </div>
          )}
        </div>

        <div>
          {/* Displaying legend */}
          {data.map((value, index) => (
            <div key={index} className="flex justify-end my-8 items-center gap-4">
              <div className="text-center ">
                <div className="text-sm pb-2 text-gray-600">{labels[index]}</div>
                <div className="text-sm text-gray-600">{value}</div>
                
              </div>
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: colors[index % colors.length],
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
