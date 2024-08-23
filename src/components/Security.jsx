import React from "react";

const Security = () => {
  return (
    <section className="py-10">
      <div className="flex gap-10 max-lg:flex-col">
        <div className="flex-1 w-full">
          <img
            className="min-w-full max-w-full w-full h-full min-h-full max-h-full"
            src="/security.svg"
            alt="Villa"
          />
        </div>
        <div className=" flex-1 flex flex-col gap-6">
          <p>
            <span className="text-[30px] leading-[31px] line-clamp-1">
              Unparalleled Security &{" "}
            </span>
            <span className="italic-font text-[58px] leading-[57px] text-[#FFF2D0]">
              Maintenances
            </span>
          </p>
          <p className="text-[18px] font-semibold text-[#FFF2D0]">
            Enjoy peace of mind with our single-door lock-out system
            complemented by an integrated multi-layered security system, all
            managed by professionals for a truly hassle-free living experience.
          </p>
          <div className="border-2 rounded-lg p-4 border-[#AE8625] flex flex-col gap-4 text-[18px] font-semibold">
            <p className="text-[#AE8625]">READY TO MOVE IN</p>
            <p className="text-[#FFF2D0]">
              Simplex & Duplex Residences | 4 & 5 Bed Residences
            </p>
            <p className="text-[#FFF2D0]">
              7825 to 9156 sq.ft. | Price on Request
            </p>
          </div>
          <div>
            <button className="bg-[#FFF2D0] border border-[#AE8625] p-4 rounded-full text-[#AE8625] font-semibold hover:bg-[#AE8625] hover:text-white">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
