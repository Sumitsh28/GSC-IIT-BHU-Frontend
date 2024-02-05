import React, { useState } from "react";

const AboutGallery = () => {
  const imageUrls = [
    "/assets/CarouselImage/IITBHUImage.svg",
    "/assets/CarouselImage/IITBHUImage.svg",
    "/assets/CarouselImage/IITBHUImage.svg",
    "/assets/CarouselImage/IITBHUImage.svg",
    "/assets/CarouselImage/IITBHUImage.svg",
    "/assets/CarouselImage/IITBHUImage.svg",
  ];

  const renderImages = () => {
    return imageUrls.map((url, index) => {
      return (
        <div key={index} className="relative overflow-hidden">
          <img
            src={url}
            alt={`Image ${index + 1}`}
            className="rounded-lg w-354 h-370 object-cover transition-opacity duration-300 p-1"
          />
        </div>
      );
    });
  };

  return (
    <div className="bg-[url('/assets/BadmintonPlayer2.svg')] bg-no-repeat bg-right-bottom bg-[length:250px]">
      <div className="bg-[url('/assets/BadmintonPlayer.svg')] bg-no-repeat bg-left-top bg-[length:234px]">
        <div className="bg-[url('/assets/Corner4.svg')] bg-no-repeat bg-left-bottom bg-[length:437px] ">
          <div className="bg-[url('/assets/Corner3.svg')] bg-no-repeat bg-right-top bg-[length:426px] ">
            <div className="">
              <div className="font-lexend-zetta relative top-[-24px] font-extrabold text-gray-300 text-[188px] flex items-center justify-center">
                <p>Gallery</p>
              </div>
              <div className="relative top-[-107px] container pl-[194px]">
                {/* First Row */}
                <div className="flex justify-center">
                  {renderImages().slice(0, 3)}
                </div>
                {/* Second Row */}
                <div className="flex justify-center">
                  {renderImages().slice(3, 6)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
