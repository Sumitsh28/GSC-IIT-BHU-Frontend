import React from "react";

const AboutPageSection1 = () => {
  return (
    <div className="bg-[url('/assets/BG-1.svg')] bg-left-bottom bg-[length:305px]">
      <div className="relative sm:grid grid-cols-2 mx-6 hidden">
        <img
          src="/assets/Semicircle.png"
          className="h-[200px] md:h-[350px] absolute right-[-25px] md:right-0 top-[-100px] md:top-[-176px] hidden sm:block"
          alt="Semicircle"
        />
        {/* image-div start*/}
        <div className="mx-auto my-auto">
          <img
            src="/assets/IITBHUSportsLogo2.png"
            className="h-[350px]"
            alt="GSC_Logo"
          />
        </div>
        {/* image-div end*/}
        {/* text-div start*/}
        <div className="ml-[-20px]">
          <div className="pt-[60px] pb-[23px] pr-[50px] lg:pr-[303px]">
            <p className="font-lexend-exa text-[23px] text-[#000000]">
              The Games and Sports Council is responsible for administrating,
              regulating, and promoting games and sports activities around the
              IIT BHU campus.
            </p>
          </div>
          <div className="pr-[165px] pb-[24px]">
            <p className="font-lexend-exa text-[22px] text-[#000000]">
              The Games and Sports Council is responsible for administrating,
              regulating, and promoting games and sports activities around the
              IIT BHU campus. The Games and Sports Council is responsible for
              administrating, regulating, and promoting games and sports
              activities around the IIT BHU campus.
            </p>
          </div>
        </div>
        {/* text-div end*/}
      </div>
      <div className="flex flex-col sm:hidden">
        <div className="flex flex-row">
          <img
            src="/assets/IITBHUSportsLogo2.png"
            className="h-[150px] my-auto"
            alt="GSC_Logo"
          />
          <p className="font-lexend-exa text-[13px] text-[#000000] my-auto">
            The Games and Sports Council is responsible for administrating,
            regulating, and promoting games and sports activities around the IIT
            BHU campus.
          </p>
        </div>

        <p className="font-lexend-exa text-[15px] text-[#000000] mx-auto pl-5">
          The Games and Sports Council is responsible for administrating,
          regulating, and promoting games and sports activities around the IIT
          BHU campus.
        </p>
      </div>
    </div>
  );
};

export default AboutPageSection1;
