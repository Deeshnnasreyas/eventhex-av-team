import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const AssignSection: React.FC = () => {
  return (
    <div className="flex justify-between items-center pb-[30px] max-md:flex-col">
      <div className="">
        <h1
          className="font-['Inter'] font-bold text-[18px] leading-[24px] tracking-[-0.6%]
           align-middle text-[#0A0D14]"
        >
          Assigned Sessions
        </h1>
        <p className="mt-[4px] font-['Inter'] text-[14px] font-normal text-[#525866]">
          Manage and monitor your active recording sessions.
        </p>
      </div>

      {/* Search, Filter, Sort */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="flex items-center">
            <Image src="/search.svg" alt="search" width={20} height={20} />
          </div>
        </div>
        <CustomButton
          className="flex items-center space-x-2 text-[14px] leading-[17px] tracking-[-0.6%] p-2"
          textColor="#525866"
        >
          <Image src="/filter.svg" alt="Filter Icon" width={16} height={16} />
          <span className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.6%] text-center text-[#525866]">
            Filter
          </span>
        </CustomButton>
        <CustomButton
          className="flex items-center space-x-2 text-[14px] leading-[17px] tracking-[-0.6%] p-2"
          textColor="#525866"
        >
          <Image src="/sort-by.svg" alt="Sort By Icon" width={16} height={16} />
          <span className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.6%em] text-center text-[#525866]">
            Sort by
          </span>
        </CustomButton>
      </div>
    </div>
  );
};
export default AssignSection;
