import Image from 'next/image';
import LoginForm from '@/components/LoginForm';

const page = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Left section */}
      <section
        className="relative text-[#FFFFFF] lg:w-[59%] flex flex-col justify-between overflow-hidden w-full h-auto lg:h-screen"
        // style={{ width: "848px", height: "100vh" }}
      >
        <div className="container max-md:!pl-4 pt-6 lg:pt-[89px] ">
          <div
            className="w-full h-full absolute inset-0 object-cover bg-no-repeat bg-cover bg-top"
            style={{
              backgroundImage: `url('/loginbg.svg')`,
            }}
          ></div>
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="relative z-10 pb-4 lg:pb-[56px] ">
            <Image
              src="/eventlogo.svg"
              alt="EventHex Logo"
              width={265}
              height={55}
              className="max-w-[165px] lg:max-w-[265px]"
            />
          </div>
          <div className="relative z-10 flex flex-col items-start max-lg:!mt-25 max-lg:!pb-20">
            <h1 className="font-['Manrope'] pb-2.5 lg:pb-[22px] font-semibold text-[36px] lg:text-[70px] leading-[101%] tracking-[-0.01em] mb-4">
              Engage, Inspire <br />
              Inform With AI
            </h1>
            <p className="font-['Manrope'] pb-2.5 lg:pb-0 font-normal text-[20px] lg:text-[56px] leading-[101%] tracking-[-0.01em]">
              AI-Based Real-Time <br />
              Content Summarisation
            </p>
          </div>
        </div>
      </section>

      {/* Right section */}
      <section className="w-full lg:w-[41%] lg:flex-grow flex items-center justify-center bg-white relative pt-6">
        <LoginForm />
      </section>
    </main>
  );
}

export default page
