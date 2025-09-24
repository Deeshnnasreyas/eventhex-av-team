'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { dummySessions } from '@/data/sessions';
import { useRouter } from 'next/navigation';

const SessionsTable: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-[#FFFFFF] overflow-hidden rounded-[16px]">
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="flex items-center bg-[#F6F8FA] h-[39px]">
              <th
                scope="col"
                className="pl-[12px] text-left text-[#525866] font-['Inter'] font-normal
              text-[14px] leading-[20px] tracking-[-0.006em] w-[400px]"
              >
                Session
              </th>
              <th
                scope="col"
                className="text-[#525866] font-['Inter'] font-normal
              text-[14px] leading-[20px] tracking-[-0.006em] text-left w-[214px] ml-[42px]"
              >
                Event Name
              </th>
              <th
                scope="col"
                className="text-[#525866] font-['Inter'] font-normal
              text-[14px] leading-[20px] tracking-[-0.006em] text-left w-[200px] ml-[42px]"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {dummySessions.map((session) => (
              <tr
                key={session.id}
                className="flex items-center border-b border-[#E2E4E9] pl-[12px] py-[15px] md:py-[10px] lg:py-[22px]"
              >
                <td className="flex items-center gap-4 w-[400px]">
                  <Image
                    src="/tablelogo.svg"
                    alt="Session Icon"
                    width={32}
                    height={32}
                    className=""
                  />
                  <div className="">
                    <p className="font-['Inter'] pb-2 font-medium text-[16px] leading-[100%] tracking-[-0.6%] text-[#0A0D14]">
                      {session.title}
                    </p>
                    <p className="font-['Inter'] font-normal text-[#525866] text-[14px] leading-[16px] tracking-[-0.005em] ">
                      {session.date} | {session.time}
                    </p>
                  </div>
                </td>
                <td className="font-['Inter'] font-medium text-[14px] leading-[100%] tracking-[-0.006em] text-[#525866] w-[214px] ml-[42px]">
                  {session.eventName}
                </td>
                <td className="flex items-center w-[200px] ml-[42px]">
                  {session.status === "Pending" ? (
                    <span
                      className="flex items-center text-[#F17B2C] bg-[#FEF3EB] px-2 py-1 rounded-[6px]
                      font-['Inter'] text-[12px] font-medium gap-2"
                    >
                      <Image
                        src="/pendingclock.svg"
                        alt="pending"
                        width={16}
                        height={16}
                        className=""
                      />
                      Pending
                    </span>
                  ) : (
                    <span
                      className="flex items-center text-[#38C793] bg-[#EFFAF6] px-2 py-1
                     rounded-[6px] 
                      font-['Inter'] text-[12px] font-medium gap-2"
                    >
                      <Image
                        src="/process.svg"
                        alt="process"
                        width={16}
                        height={16}
                        className=""
                      />
                      Processed
                    </span>
                  )}
                </td>
                <td className="ml-auto pr-[10px]">
                  {session.status === "Pending" ? (
                    <CustomButton
                      bgColor="#375DFB"
                      textColor="#FFFFFF"
                      borderRadius="8px"
                      className="text-[14px] leading-[17px] tracking-[-0.005em] px-4 py-2"
                      onClick={() => router.push("/golive")}
                    >
                      Start Recording
                    </CustomButton>
                  ) : (
                    <CustomButton
                      bgColor="#EBF1FF"
                      textColor="#375DFB"
                      borderRadius="8px"
                      className="cursor-pointer text-[14px] font-['Inter'] font-medium leading-[100%] tracking-[-0.005em] px-[43px] py-[8px]"
                      onClick={() => router.push("/golive")}
                    >
                      View
                    </CustomButton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col gap-4 p-4">
        {dummySessions.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/tablelogo.svg"
                alt="Session Icon"
                width={32}
                height={32}
              />
              <div className="">
                <p className="font-['Inter'] font-medium text-[16px] leading-[100%] tracking-[-0.6%] text-[#0A0D14]">
                  {session.title}
                </p>
                <p className="font-['Inter'] font-normal text-[#525866] text-[14px] leading-[16px] tracking-[-0.005em] ">
                  {session.date} | {session.time}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-['Inter'] font-medium text-[14px] leading-[100%] tracking-[-0.006em] text-[#525866]">
                {session.eventName}
              </p>
              {session.status === "Pending" ? (
                <span
                  className="flex items-center text-[#F17B2C] bg-[#FEF3EB] px-2 py-1 rounded-[6px]
                          font-['Inter'] text-[12px] font-medium gap-2"
                >
                  <Image
                    src="/pendingclock.svg"
                    alt="pending"
                    width={16}
                    height={16}
                  />
                  Pending
                </span>
              ) : (
                <span
                  className="flex items-center text-[#38C793] bg-[#EFFAF6] px-2 py-1
                         rounded-[6px]
                          font-['Inter'] text-[12px] font-medium gap-2"
                >
                  <Image
                    src="/process.svg"
                    alt="process"
                    width={16}
                    height={16}
                  />
                  Processed
                </span>
              )}
            </div>
            <div className="flex justify-end">
              {session.status === "Pending" ? (
                <CustomButton
                  bgColor="#375DFB"
                  textColor="#FFFFFF"
                  borderRadius="8px"
                  className="transition-all duration-300 ease-in-out hover:scale-105 text-[14px] leading-[17px] tracking-[-0.005em] px-4 py-2"
                  onClick={() => router.push("/golive")}
                >
                  Start Recording
                </CustomButton>
              ) : (
                <CustomButton
                  bgColor="#EBF1FF"
                  textColor="#375DFB"
                  borderRadius="8px"
                  className="transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer text-[14px] font-['Inter'] font-medium leading-[100%] tracking-[-0.005em] px-[43px] py-[8px]"
                  onClick={() => router.push("/golive")}
                >
                  View
                </CustomButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionsTable;
