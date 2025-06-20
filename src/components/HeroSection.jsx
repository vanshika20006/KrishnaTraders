import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "Hero1.png",
  "Hero2.png",
  "Hero3.png"
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
