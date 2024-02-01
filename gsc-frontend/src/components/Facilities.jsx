import React, { useState } from "react";

const Facilities = () => {
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
          <div className="image-container relative w-366 h-393 rounded-lg overflow-hidden m-1">
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
    <div className="bg-[url('/assets/Facilities.svg')] bg-no-repeat  bg-top-3 bg-bottom bg-[length:500px] md:bg-top-1 ">
      <div className="bg-[url('/assets/Cyclist.svg')] bg-no-repeat bg-right-bottom bg-[length:200px]">
        <div className="bg-[url('/assets/Corner4.svg')] bg-no-repeat bg-left-bottom bg-[length:433px] ">
          <div className="bg-[url('/assets/Corner3.svg')] bg-no-repeat bg-right-top bg-[length:426px] ">
            <div className="p-20">
              <div className="container mx-auto my-8 pt-4 pr-9 pb-4 pl-20">
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

export default Facilities;
