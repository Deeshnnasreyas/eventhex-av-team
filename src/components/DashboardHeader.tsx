import React from 'react';
import Image from 'next/image';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-[#FFFFFF] shadow-sm" style={{ borderBottom: '1.04px solid #E2E4E9' }}>
      <div className="headercontainer p-2 py-[19px] flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/headerlogo.svg"
            alt="EventHex Logo"
            width={169}
            height={35}
          />
        </div>

        <div className="flex items-center ">
          {/* Globe icon */}
          <Image
            src="/globe.svg"
            alt="language "
            width={20}
            height={20}
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
