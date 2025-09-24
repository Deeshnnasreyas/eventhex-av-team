"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
const RecordContent: React.FC = () => {
    const router = useRouter();
  const [isLive, setIsLive] = useState(false);
  const [isSoundChecking, setIsSoundChecking] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      remainingSeconds.toString().padStart(2, '0'),
    ].join(':');
  };

  const handleGoLiveClick = () => {
    setIsLive((prev) => !prev);
    setIsRunning((prev) => !prev);
    setIsSoundChecking(false); // Ensure sound check is off when going live
  };

  const handleSoundCheckClick = () => {
    setIsSoundChecking((prev) => !prev);
    setIsLive(false); // Ensure live mode is off during sound check
    setIsRunning(false); // Ensure timer is off during sound check
  };

  return (
    <div>
      {/* Video Player Placeholder */}{" "}
      <div
        className="
         relative rounded-[51px] flex items-center justify-center border-[0.5px]
          border-[#E2E4E9] bg-cover w-full min-h-[464px] h-auto bg-center overflow-hidden"
        style={{
          backgroundImage: `url('/recordbg.png')`,
        }}
      >
        {" "}
        <div className=""></div>{" "}
        <div className="relative z-10 flex flex-col items-center p-4 text-center w-full">
          {(isSoundChecking || isLive) && (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Image
                src="/Vector3.svg"
                alt="sound wave 1"
                width={100}
                height={53}
                className="absolute animate-pulse-slow w-full h-auto max-w-none"
                style={{ zIndex: 0 }}
              />
              <Image
                src="/Vector4.svg"
                alt="sound wave 2"
                width={100}
                height={53}
                className="absolute animate-pulse-fast w-full h-auto max-w-none"
                style={{ zIndex: 0 }}
              />
              <Image
                src="/Vector5.svg"
                width={100}
                height={53}
                alt="sound wave 2"
                className="absolute animate-pulse-fast w-full h-auto max-w-none"
                style={{ zIndex: 0 }}
              />
            </div>
          )}
          <div
            className="relative w-[171px] h-[171px] rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#FFFFFF", zIndex: 1 }}
          >
            <div
              className="absolute w-[140px] h-[140px] rounded-full flex items-center justify-center"
              style={{ background: "#EFECFF" }}
            >
              <Image
                src="/export.svg"
                alt="exportLogo"
                width={93}
                height={93}
                className=""
              />
            </div>
          </div>
        </div>
        {isSoundChecking && (
          <p
            className="absolute left-[76px] bottom-[43px] font-['Inter'] font-medium text-[22px] leading-[29px] tracking-[0%] mt-4 bg-clip-text text-transparent text-center px-4"
            style={{
              backgroundImage:
                "linear-gradient(90.09deg, #375DFB 0.08%, #DFE3EC 74.18%)",
            }}
          >
            EventHex Stands out by tackling two key ...
          </p>
        )}
        {!isSoundChecking && (
          <div className="bottom-[28px] absolute b w-full text-center">
            <p className="font-['Inter'] text-[16px] font-medium text-[#525866]">
              {formatTime(timer)}
            </p>
          </div>
        )}
      </div>
      {/* Action Buttons */}{" "}
      <div className="pt-[27px] flex flex-col sm:flex-row justify-center gap-[18px] px-4">
        {" "}
        <CustomButton
          bgColor="#EBF1FF"
          textColor="#375DFB"
          borderRadius="17px"
          className="transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer px-4 py-[13px] font-['Inter'] font-medium text-[14px] leading-[17px] tracking-[-0.005em] flex items-center justify-center space-x-2 w-full sm:w-auto"
          onClick={() => router.push("/dashboard")}
        >
          <Image src="/close.svg" alt="Leave" width={20} height={20} />
          <span>Leave Section</span>{" "}
        </CustomButton>{" "}
        <CustomButton
          bgColor="#375DFB"
          textColor="#FFFFFF"
          borderRadius="17px"
          className="transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer px-4 py-[13px] font-['Inter']
           font-medium text-[14px] leading-[17px] tracking-[-0.005em] flex items-center justify-center space-x-2 w-full sm:w-auto"
          onClick={handleSoundCheckClick}
        >
          <Image src="/voice.svg" alt="Sound Check" width={20} height={20} />
          <span>Sound Check</span>{" "}
        </CustomButton>{" "}
        <CustomButton
          bgColor={isLive ? "#DF1C41" : "#DF1C41"}
          textColor="#FFFFFF"
          borderRadius="17px"
          className="transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer px-4 py-[13px] font-['Inter'] font-medium
             border-[0.5px] border-[#C2D6FF] text-[14px] leading-[17px] tracking-[-0.005em] flex items-center justify-center space-x-2 w-full sm:w-auto"
          onClick={handleGoLiveClick}
        >
          <Image
            src={isLive ? "/record.svg" : "/playfill.svg"}
            alt={isLive ? "Pause Icon" : "Play Icon"}
            width={20}
            height={20}
          />
          <span>{isLive || isSoundChecking ? "Pause" : "Go live"}</span>{" "}
        </CustomButton>{" "}
      </div>
    </div>
  );
};

export default RecordContent;
