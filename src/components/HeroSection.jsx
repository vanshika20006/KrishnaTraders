import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["kt1.svg", "Hero2.png", "Hero3.png"];

// --- Desktop Hero Section Component ---
// This component will only render on large screens (lg breakpoint and up)
const DesktopHeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[500px] object-cover" // Fixed height for desktop
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// --- Mobile Hero Section Component ---
// This component will only render on screens smaller than large (below lg breakpoint)
const MobileHeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Typically hide arrows on mobile for better touch experience
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[250px] object-cover sm:h-[350px]" // Responsive height for mobile/small tablets
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// --- Main Hero Section Component (Renders based on screen size) ---
const HeroSection = () => {
  return (
    <>
      {/* Desktop version - hidden on screens smaller than 'lg' */}
      <div className="hidden lg:block">
        <DesktopHeroSection />
      </div>

      {/* Mobile version - hidden on 'lg' screens and larger */}
      <div className="lg:hidden">
        <MobileHeroSection />
      </div>
    </>
  );
};

export default HeroSection;