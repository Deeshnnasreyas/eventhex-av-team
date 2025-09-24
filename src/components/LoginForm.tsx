'use client';

import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const router = useRouter();
  const [avCode, setAvCode] = useState('');
  const handleSubmit = async () => {
      console.log('Login successful with AV Code:', avCode);
      router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-start bg-white rounded-lg">
      <h2
        className="font-['Inter'] font-semibold text-[33.32px] leading-[100%] tracking-[0.01em] 
      text-center align-middle flex items-center pb-2.5 lg:pb-[25px] text-[#0C1421]"
      >
        Enter AV Code <span className=" text-gray-500">&#127911;</span>
      </h2>
      <p
        className="font-['Inter'] font-normal text-[18px] leading-[129%] 
      tracking-[0.01em] align-middle text-[#313957] max-w-[311px]
"
      >
        Provide your assigned AV team code to continue.
      </p>
      <div
        className="w-full pt-6 lg:pt-[56px] pb-[22px]"
        suppressHydrationWarning
      >
        <label
          htmlFor="avCode"
          className="block text-[#0C1421] text-[14px] font-medium mb-2 font-['Inter']"
        >
          AV Code
        </label>
        <input
          type="text"
          id="avCode"
          placeholder="Enter AV Code"
          className="rounded-[12px]  border-1 border-[#D4D7E3] w-full py-[14px] bg-[#F7FBFF] font-['Inter'] font-medium text-[14px]
          px-3 placeholder:text-[#8897AD] leading-tight focus:outline-none focus:shadow-outline"
          suppressHydrationWarning
          onChange={(e) => setAvCode(e.target.value)}
          value={avCode}
        />
      </div>
      <CustomButton
        type="submit"
        bgColor="#375DFB"
        textColor="#FFFFFF"
        borderRadius="11px"
        className="transition-all duration-300 ease-in-out hover:scale-105 text-[18px] font-['Roboto'] font-normal w-full py-[14px] cursor-pointer"
        onClick={handleSubmit}
      >
        Sign in
      </CustomButton>
      <div className="w-full lg:absolute bottom-[52px] left-0 text-center ">
        <p className="text-[#31353F] text-[14px] font-['Inter'] font-normal">
          Secure access portal
        </p>
      </div>
    </div>
  );
};

export default LoginForm
