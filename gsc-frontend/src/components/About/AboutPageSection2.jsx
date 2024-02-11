import React, { useState } from "react";

const AboutPageSection2 = () => {
  const [showSubtext1, setShowSubtext1] = useState(false);
  const [showSubtext2, setShowSubtext2] = useState(false);
  const [showSubtext3, setShowSubtext3] = useState(false);

  const handleClick1 = () => {
    setShowSubtext1(!showSubtext1);
  };

  const handleClick2 = () => {
    setShowSubtext2(!showSubtext2);
  };

  const handleClick3 = () => {
    setShowSubtext3(!showSubtext3);
  };

  const ToggleButton = ({ handleClick, showSubtext }) => {
    return (
      <button className="mx-auto sm:hidden" onClick={handleClick}>
        {showSubtext ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 inline-block align-middle text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12.586l-6.293-6.293-1.414 1.414 7 7a1 1 0 0 0 1.414 0l7-7-1.414-1.414L10 12.586z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 inline-block align-middle text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 7.414l6.293 6.293 1.414-1.414-7-7a1 1 0 0 0-1.414 0l-7 7 1.414 1.414L10 7.414z" />
          </svg>
        )}
      </button>
    );
  };

  return (
    // <div className="bg-[url('/assets/Group2.svg')] bg-no-repeat bg-left-bottom bg-[length:305px]">
    <div className="grid sm:grid-cols-3 grid-cols-1">
      <div className="relative w-full bg-[#3B0D86]">
        <img
          src="/assets/Leaf.svg"
          alt="SVG Icon"
          className="absolute top-4 left-1/2 transform -translate-x-1/2"
        />
        <img
          src="/assets/Group2.svg"
          alt="SVG Icon"
          className="absolute left-0 bottom-0 hidden sm:block"
        />
        <div className="flex items-center justify-center">
          <p className="font-lexend font-bold text-[#FFFFFF] text-[22px] sm:text-[36px] pt-[70px] mb-[34px] text-center ml-14 pl-3 sm:pl-0 sm:ml-0">
            OUR MISSION
          </p>
          <ToggleButton handleClick={handleClick1} showSubtext={showSubtext1} />
        </div>

        {/* Subtext to display */}
        {showSubtext1 && (
          <p className="font-lexend text-[13px] lg:text-[15px] text-[#FFFFFF] px-[50px] text-center pb-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
            volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
            molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in
            tempus felis tincidunt. Vestibulum nec enim eget nibh rhoncus
          </p>
        )}

        <p className="font-lexend text-[13px] lg:text-[15px] text-[#FFFFFF] px-[50px] text-center pb-[50px] hidden sm:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
          volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
          molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in tempus
          felis tincidunt. Vestibulum nec enim eget nibh rhoncus
        </p>
      </div>
      {/* //////////////////////// */}
      <div className="relative bg-[#4ED3D8]">
        <img
          src="/assets/Group3.svg"
          alt="SVG Icon"
          className="w-[230px] absolute top-4 left-1/2 transform -translate-x-1/2 hidden sm:block"
        />
        <img
          src="/assets/Group3.svg"
          alt="SVG Icon"
          className="w-[230px] absolute top-4 left-1/2 transform -translate-x-1/2 sm:hidden"
        />
        <div className="flex">
          <p className="font-lexend font-bold text-[#FFFFFF] text-[22px] sm:text-[36px] pt-[70px] mb-[34px] text-center ml-20 sm:ml-0">
            OUR VISION
          </p>
          <ToggleButton handleClick={handleClick2} showSubtext={showSubtext2} />
        </div>
        {/* Subtext to display */}
        {showSubtext2 && (
          <p className="font-lexend text-[13px] lg:text-[15px] text-[#FFFFFF] px-[50px] text-center pb-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
            volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
            molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in
            tempus felis tincidunt. Vestibulum nec enim eget nibh rhoncus
          </p>
        )}
        <p className="font-lexend text-[13px] lg:text-[15px] text-[#FFFFFF] px-[50px] text-center pb-[50px] hidden sm:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
          volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
          molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in tempus
          felis tincidunt. Vestibulum nec enim eget nibh rhoncus
        </p>
      </div>
      {/* //////////////////////// */}
      <div className="relative bg-[#EE5851]">
        <img
          src="/assets/Leaf.svg"
          alt="SVG Icon"
          className="absolute top-4 left-1/2 transform -translate-x-1/2"
        />
        <img
          src="/assets/Group4.svg"
          alt="SVG Icon"
          className="absolute right-0 top-0 hidden sm:block"
        />
        <div className="flex">
          <p className="font-lexend font-bold text-[#FFFFFF] text-[22px] sm:text-[36px] pt-[70px] mb-[34px] text-center ml-10 pl-5 sm:pl-0 sm:ml-0">
            OUR PASSION
          </p>
          <ToggleButton handleClick={handleClick3} showSubtext={showSubtext3} />
        </div>
        {/* Subtext to display */}
        {showSubtext3 && (
          <p className="font-lexend text-[13px] lg:text-[15px] text-[#FFFFFF] px-[50px] text-center pb-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
            volutpat cursus. Integer bibendum maximus lectus, quis iaculis lorem
            molestie sed. Vivamus tempus ligula malesuada nisi accumsan, in
            tempus felis tincidunt. Vestibulum nec enim eget nibh rhoncus
          </p>
        )}
        <p className="font-lexend text-[13px] lg:text-[15px] text-[#FFFFFF] px-[50px] text-center pb-[50px] hidden sm:block">
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
