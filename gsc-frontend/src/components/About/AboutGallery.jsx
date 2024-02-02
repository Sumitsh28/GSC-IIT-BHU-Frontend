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
    const overlayColors = ["#FDAB0A", "#D71C1B", "#264078", "#4EABE0"];
    const displayText = [
      "GYMKHANA GROUND",
      "IIT BHU",
      "RAJPUTANA GROUND",
      "ADV GROUND",
      "SWIMMING POOL",
      "NCC",
    ];

    // State to track the hovered image index
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

    return imageUrls.map((url, index) => {
      const colorIndex = index % overlayColors.length;
      const color = overlayColors[colorIndex];

      return (
        <div
          key={index}
          className="relative group overflow-hidden"
          onMouseEnter={() => setHoveredImageIndex(index)}
          onMouseLeave={() => setHoveredImageIndex(null)}
        >
          <div className="image-container relative w-350 h-370 rounded-lg overflow-hidden m-1">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="rounded-lg w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Overlay div with custom colors */}
            <div
              className={`overlayBottom absolute bottom-0 left-0 w-full h-0 opacity-0 transition-all duration-1000 group-hover:h-full group-hover:opacity-50`}
              style={{ backgroundColor: color }}
            ></div>
            {/* Display text in the center on hover */}
            {hoveredImageIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl">{displayText[index]}</span>
              </div>
            )}
          </div>
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
              <div className="relative top-[-24px] font-extrabold text-gray-300 text-[188px] flex items-center justify-center">
                <p>Gallery</p>
              </div>
              <div className="relative top-[-60px] container pl-[194px] pb-[46px]">
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
