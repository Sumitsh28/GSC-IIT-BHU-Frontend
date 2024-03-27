import Navbar from "../components/Navbar/Navbar";
import ImageStack from "../components/Image";
import ContactCard from "../components/ContactCard";
import image1 from "../images/cricket.svg";

const Cricket = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-[530px] lg:h-[704px] md:h-[560px] sm:h-[460px] flex flex-row  justify-center sm:gap-[40px] relative z-[-2]"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "894px",
        }}
      >
        <div className="hidden sm:flex flex-col lg:mt-[90px] md:mt-[120px] sm:mt-[100px] items-center gap-[15rem]">
          <p className=" lg:text-[100px] md:text-[40.5px] sm:text-[25.5px] text-white font-bold font-lexend tracking-tight text-center">
            Cricket
          </p>
          <div className="bg-white bg-opacity-50 border-4 border-white p-4 w-[1019px] h-[392px] font-lexend text-center">
            <h2 className="text-black text-5xl mb-4 font-bold">About</h2>
            <p className="text-black text-2xl tracking-wider font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>

        <div className="sm:hidden justify-center relative h-[900px]">
          <p className="w-[100%] text-[60px] text-white font-bold font-lexend tracking-tight text-center mt-24">
            Cricket
          </p>
          <div className="bg-white bg-opacity-50 border-4 border-white p-4 w-[289px] h-[602px] font-lexend text-center top-[16.25rem] absolute">
            <h2 className="text-black text-2xl font-bold">About</h2>
            <p className="text-black text-md tracking-wider font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-white bg-left-bottom bg-[length:305px] ">
          <p className="w-[100%] sm:text-[100px] text-black font-bold font-lexend text-center tracking-wider text-[40px]">
            Facilities
          </p>
          <div className="relative sm:flex flex-row mx-6 hidden gap-40 pl-10">
            <div className="w-[741px] h-[476px]">
              <div>
                <p className="font-lexend text-xl text-[#000000] tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-11">
              <div className="h-[397px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl">
                {/* <img
                src=""
                className="h-[397px] border-4 border-[#A2A2A2]"
                alt="GSC_Logo"
              /> */}
              </div>
              <div className="h-[397px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl">
                {/* <img
                src=""
                className="h-[397px] border-4 border-[#A2A2A2]"
                alt="GSC_Logo"
              /> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-11 sm:hidden text-center">
            <div className="flex flex-row gap-3 items-center justify-around">
              <div className="h-[200px] w-[150px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl">
                {/* <img
                src=""
                className="h-[397px] border-4 border-[#A2A2A2]"
                alt="GSC_Logo"
              /> */}
              </div>
              <div className="h-[200px] w-[150px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl">
                {/* <img
                src=""
                className="h-[397px] border-4 border-[#A2A2A2]"
                alt="GSC_Logo"
              /> */}
              </div>
            </div>
            <p className="font-lexend text-[10px] text-[#000000] my-auto mx-auto px-[35px] justify-center ml-[-68px] xxs:ml-[-30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto">
        <div className="bg-white">
          <p className="w-auto sm:text-[100px] text-[30px] text-black font-bold font-lexend text-center">
            Achievements
          </p>

          <div>
            <ImageStack />
          </div>
        </div>
      </div>

      <div className="h-auto flex flex-col justify-center items-center gap-10">
        <div className="bg-white">
          <p className="w-full sm:text-[100px] text-[40px] text-black font-bold font-lexend text-center tracking-wider">
            Our Team
          </p>
        </div>
        <div className="sm:flex flex-row items-center gap-28 hidden">
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
        <div className="flex flex-col items-center lg:hidden">
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default Cricket;
