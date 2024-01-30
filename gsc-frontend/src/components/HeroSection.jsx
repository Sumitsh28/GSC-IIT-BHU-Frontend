import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import Navbar from "./Navbar/Navbar";

const HeroSection = () => {
  const items = [
    <img key="1" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 1" />,
    <img key="2" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 2" />,
    <img key="3" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 3" />,
  ];

  return (
    <>
      <div className="bg-[#430D9B]">
        <div className="  sm:bg-[url('/assets/HeroSectionQuaterPattern.png')] bg-no-repeat bg-left-bottom w-[100%] lg:bg-[length:150px_150px] md:bg-[length:100px_100px] sm:bg-[length:80px_80px] bg-[length:0px_0px]">
          <div className=" sm:bg-[url('/assets/HeroSectionOrgPattern.svg')] bg-no-repeat bg-right-top w-[100%] lg:bg-[length:250px_250px] md:bg-[length:200px_200px] sm:bg-[length:180px_180px] bg-[length:0px_0px]">
            <div className=" sm:bg-[url('/assets/HeroSectionBluePattern.svg')] bg-no-repeat lg:bg-right-bottom-lg md:bg-right-bottom-md sm:bg-right-bottom-sm lg:bg-[length:300px_300px] md:bg-[length:250px_250px] sm:bg-[length:200px_200px] bg-[length:0px_0px] ">
              <div className="flex sm:flex-row flex-col-reverse lg:h-[73vh] md:h-[65vh] sm:h-[50vh] ">
                <div className="flex flex-col w-[100%] sm:w-[50%] items-start mx-[30px] sm:items-center justify-center">
                  <div className="flex flex-col items-start justify-center lexend my-[30px]">
                    <p className="text-[20px] md:text-[40px] text-white font-bold font-lexend sm:text-[30px]">
                      GAMES & SPORTS
                    </p>
                    <p className="text-[20px] md:text-[40px] text-white font-bold font-lexend sm:text-[30px]">
                      COUNCIL
                    </p>
                    <p className="text-[20px] md:text-[40px] text-white font-bold font-lexend sm:text-[30px]">
                      IIT (BHU) VARANASI
                    </p>
                    <div className="flex items-start w-[50%] mt-[20px] ">
                      <Link to="/contacts" element={<Contact></Contact>}>
                        <button className="bg-[#D71C1B] text-white lg:text-[25px] md:text-[20px] sm:text-[15px] px-[15px] rounded-[10px] py-[5px]">
                          Contact
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] sm:w-[50%]  flex justify-center items-center">
                  <div className="w-[100%] lg:w-[55%] md:w-[65%] sm:w-[70%] lg:mt-[100px] md:mt-[50px] sm:mt-[30px] ">
                    <Carousel items={items} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
