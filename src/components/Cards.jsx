import React from "react";
import CardPrice from "./CardPrice";

const Cards = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <button className="absolute left-[10px] top-[25px] bg-[#AE8625] border border-[#AE8625] py-1 px-4 rounded-sm text-[#white] font-semibold hover:bg-[#AE8625] hover:text-white">
          New Launched
        </button>
        <img
          className="w-full h-[286px] object-cover"
          src="/card.svg"
          alt="Card image"
        />
      </div>

      <div className=" flex flex-col items-center px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">
          Tangled Up In Green
        </div>
        <div className="text-[12px] text-[#7E7E7E] text-xl mb-2">
          Doddaballapura Main Road, STRR, Devanahalli
        </div>
        <div className="text-[#7E7E7E] text-base flex gap-1 w-full py-1">
          <CardPrice />
          <div className="w-[1px] h-full bg-[#7E7E7E]"></div>
          <CardPrice />
        </div>
        <div className="w-full bg-[#7E7E7E] h-[1px] my-2 *:" />
        <div className="text-[#7E7E7E] text-base flex gap-1 w-full py-1">
          <CardPrice />
          <div className="w-[1px] h-full bg-[#7E7E7E]"></div>
          <CardPrice />
        </div>
      </div>

      <div className="px-6 pt-4 pb-6 gap-2 flex justify-between max-sm:flex-col">
        <button className="border border-[#AE8625] py-2 px-6 rounded-lg text-[#AE8625] font-semibold hover:bg-[#AE8625] hover:text-white">
          View More
        </button>
        <button className="bg-[#AE8625] border border-[#AE8625] py-2 px-6 rounded-lg text-[#white] font-semibold hover:bg-[#AE8625] hover:text-white">
          Schedule Site Visit
        </button>
      </div>
    </div>
  );
};

export default Cards;
