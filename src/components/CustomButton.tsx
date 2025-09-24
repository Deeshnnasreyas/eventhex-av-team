import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  bgColor = '#FFFFFF',
  textColor = '#525866',
  borderColor = '#E2E4E9',
  borderWidth = '1px',
  borderRadius = '11px',
  ...props
}) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius: borderRadius,
  };

  return (
    <button
      className="cursor-pointer hover:bg-blue-700 font-['Roboto']
       font-normal text-[16px] lg:text-[18.51px] leading-[100%] tracking-[0.01em] text-center align-middle py-[14px]
       px-4 lg:px-[151px] focus:outline-none focus:shadow-outline w-full
       transition-all duration-300 ease-in-out hover:scale-105"
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
