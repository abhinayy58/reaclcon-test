import React from "react";

const CardPrice = () => {
  return (
    <div className="flex gap-1 w-full">
      <div className="">
        <img className="w-[35px] h-[35px]" src="/Rupee-icon.svg" />
      </div>
      <div className="flex flex-col">
        <p className="text-[16px] text-[#AE8625] leading-[24px]">Price</p>

        <p className="text-[12px] leading-[18px]">1.5cr*</p>
      </div>
    </div>
  );
};

export default CardPrice;
