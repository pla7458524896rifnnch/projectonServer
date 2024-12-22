import { useState } from "react";
import { DownFlashIcon } from "./icons";

const BarChart = ({
  data,
  labels,
  title,
  gridLines = 5,
  barColor = "linear-gradient(135deg, #4DE9A8 0%, #024227 100%)",
  showValues = true,
  height = "h-64",
  width = "max-w-xl",
}) => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const maxValue = Math.max(...data);
  const scale = (maxValue / gridLines).toFixed(1);

  return (
    <div
      className={`flex flex-col items-center rounded-lg mx-auto p-6 bg-white shadow-sm ${width} sm:max-w-sm md:max-w-md lg:${width}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-4">
        <div className="text-gray-600 flex absolute left-4 top-4 cursor-pointer">
          <DownFlashIcon />
          <span className="text-[13px]">این هفته</span>
        </div>
      </div>

      {/* Chart Container */}
      <div
        className={`relative w-full ${height} mt-5 border-l-2 border-b-2 border-gray-200 flex items-end px-4`}
      >
        {/* Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(gridLines + 1)].map((_, index) => (
            <div
              key={index}
              className="absolute w-full border-t border-gray-100 text-xs text-gray-400"
              style={{
                bottom: `${(index / gridLines) * 100}%`,
                left: "-2rem",
              }}
            >
              <span className="absolute -left-12">
                {(maxValue * index / gridLines).toFixed(1)}
              </span>
              <div className="w-full h-[1px] bg-gray-100" />
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="flex justify-between w-full h-full relative z-10 flex-wrap">
          {data.map((value, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-end items-center group w-[6%] sm:w-[8%] md:w-[10%]"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {/* Value Label */}
              {showValues && (
                <div
                  className={`absolute -top-6 text-xs ${
                    hoveredBar === index
                      ? "text-green-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {value}
                </div>
              )}

              {/* Bar */}
              <div
                className="w-[10px] bg-gradient-to-t rounded-t-md hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
                style={{
                  height: `${(value / maxValue) * 100}%`,
                  background: `${barColor}`,
                }}
              >
                {/* Tooltip */}
                {hoveredBar === index && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-xs whitespace-nowrap">
                    {`${labels[index]}: ${value}`}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between w-full px-4 mt-4 text-xs flex-wrap">
        {labels.map((label, index) => (
          <span
            key={index}
            className={`text-xs ${
              hoveredBar === index
                ? "text-green-600 font-semibold"
                : "text-gray-600"
            } text-center transition-colors duration-300`}
            style={{ width: `${100 / labels.length}%` }}
          >
            {label[0]}
          </span>
        ))}
      </div>
    </div>
  );
};

export { BarChart };
