import React from "react";

const AboutPageSection1 = () => {
  return (
    <div className="bg-[url('/assets/BG-1.svg')] bg-left-bottom bg-[length:305px]">
      <div className="grid grid-cols-2">
        {/* image-div start*/}
        <div className="w-[550px] mx-auto my-auto pl-[-20px] ml-[0px]">
          <img src="/assets/gscLogo.png" className="h-[550px]" alt="GSC_Logo" />
        </div>
        {/* image-div end*/}
        {/* text-div start*/}
        <div className="ml-[-230px]">
          <div className="pt-[60px] pb-[23px] pr-[303px]">
            <p className="font-lexend text-[23px] text-[#000000]">
              The Games and Sports Council is responsible for administrating,
              regulating, and promoting games and sports activities around the
              IIT BHU campus.
            </p>
          </div>
          <div className="pr-[165px] pb-[24px]">
            <p className="font-lexend text-[22px] text-[#000000]">
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
    </div>
  );
};

export default AboutPageSection1;
