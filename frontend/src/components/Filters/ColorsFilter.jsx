import React, { useState } from "react";

export const colorSelector = {
  Purple: "#8434E1",
  Black: "#252525",
  White: "#FFFFFF",
  Gray: "#808080",
  Blue: "#0000FF",
  Red: "#FF0000",
  Orange: "#FFA500",
  Navy: "#000080",
  Yellow: "#FFFF00",
  Pink: "#FFC0CB",
  Green: "#008000",
};

const ColorsFilter = ({ colors }) => {
  const [appliedColor, setAppliedColor] = useState([]);

  const handleColorClick = (color) => {
    setAppliedColor((prevState) =>
      prevState.includes(color)
        ? prevState.filter((item) => item !== color)
        : [...prevState, color]
    );
  };

  return (
    <div className="flex flex-col">
      <p className="text-[16px] text-black mt-5 mb-5 font-bold">Colors</p>
      <div className="flex flex-wrap p-2 gap-2">
        {colors?.map((color, index) => {
          const isSelected = appliedColor.includes(color);
          return (
            <div className="flex flex-wrap pl-2" key={index}>
              <div
                onClick={() => handleColorClick(color)}
                className={`border rounded w-7 h-7 cursor-pointer transition-transform duration-200 
                  ${isSelected ? "transform scale-110 border-2 border-black" : "border-gray-400"}`}
                style={{
                  background: `${colorSelector[color]}`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsFilter;
