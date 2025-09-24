import React from 'react';
import Image from 'next/image';

const RecordHeader: React.FC = () => {
  return (
    <header className="pb-[21px]">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-['Inter'] font-medium text-[22px] leading-[100%] tracking-[-0.6%] text-[#0A0D14]">
            Artificial Intelligence : An Introduction
          </h1>

          <p className="font-['Inter'] pt-[6px] font-normal text-[14px] leading-[100%px] tracking-[-0.6%] text-[#525866]">
            23 Jun 2024 | 9:30 PM
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex items-center">
            <Image
              src="/lang.svg"
              alt="Language Icon"
              width={20}
              height={20}
              className="absolute left-2 text-[#525866]"
            />
            <select className="font-['Inter'] font-normal border-1 focus:outline-none border-[#E2E4E9] rounded-[8px] py-[6px] pl-9 pr-3 text-[14px] relative">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RecordHeader;
