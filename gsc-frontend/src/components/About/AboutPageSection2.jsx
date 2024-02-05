import React from "react";

const AboutPageSection2 = () => {
  return (
    // <div className="bg-[url('/assets/Group2.svg')] bg-no-repeat bg-left-bottom bg-[length:305px]">
    <div className="grid grid-cols-3">
      <div className="relative w-full h-[400px] bg-[#3B0D86]">
        <img
          src="/assets/Group2.svg"
          alt="SVG Icon"
          className="absolute left-0 bottom-0"
        />
        <p className="font-lexend font-bold text-[#FFFFFF] text-[36px] pt-[70px] mb-[34px] text-center">
          OUR MISSION
        </p>
        <p className="font-lexend text-[15px] text-[#FFFFFF] px-[50px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
          volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
          molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in tempus
          felis tincidunt. Vestibulum nec enim eget nibh rhoncus
        </p>
      </div>

      <div className="relative h-[400px] bg-[#4ED3D8]">
        <img
          src="/assets/Group3.svg"
          alt="SVG Icon"
          className="absolute top-4 left-1/2 transform -translate-x-1/2"
        />
        <p className="font-lexend font-bold text-[#FFFFFF] text-[36px] pt-[70px] mb-[34px] text-center">
          OUR VISION
        </p>
        <p className="font-lexend text-[15px] text-[#FFFFFF] px-[50px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
          volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
          molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in tempus
          felis tincidunt. Vestibulum nec enim eget nibh rhoncus
        </p>
      </div>
      <div className="relative h-[400px] bg-[#EE5851]">
        <img
          src="/assets/Group4.svg"
          alt="SVG Icon"
          className="absolute right-0 top-0"
        />
        <p className="font-lexend font-bold text-[#FFFFFF] text-[36px] pt-[70px] mb-[34px] text-center">
          OUR PASSION
        </p>
        <p className="font-lexend text-[15px] text-[#FFFFFF] px-[50px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
          volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
          molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in tempus
          felis tincidunt. Vestibulum nec enim eget nibh rhoncus
        </p>
      </div>
    </div>
    // </div>
  );
};

export default AboutPageSection2;
