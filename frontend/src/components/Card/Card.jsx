import React from "react";
import ArrowIcon from "../common/ArrowIcon";

const Card = ({
  imagePath,
  title,
  description,
  actionArrow,
  height,
  width,
}) => {

  return (
    <div className="flex flex-col p-8">
      <img
        src={imagePath}
        className={`max-h-[${height ? height : "220px"}] 
            max-w-[${width ? width : "200px"}]  
            min-h-[${height ? height : "220px"}] 
            min-w-[${width ? width : "200px"}] 
            bg-cover bg-center rounded hover:scale-102 cursor-pointer`}
        alt={title}
      />
      <div className="flex justify-between items-center">
        <div className="flex flex-col p-3">
            <p className="text-[16px]">{title}</p>
            {description && (
            <p className="text-[12px] text-gray-700">{description}</p>)}
        </div>
        {actionArrow && <span className="pr-2 cursor-pointer items-center"><ArrowIcon /></span>}
      </div>
    </div>
  );
};

export default Card;
