import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "Hero1.png" },
  { url: "Hero2.png" },
  { url: "Hero3.png" }
];

const HeroSection = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1513}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2} // Delay in seconds (change to your preference)
      />
    </div>
  );
};

export default HeroSection;


// import SimpleImageSlider from "react-simple-image-slider";

// const images = [
//   { url: "Hero1.png" },
//   { url: "Hero2.png" },
//   { url: "Hero3.png" }
  
// ];

// const HeroSection = () => {
//   return (
//     <div >
//       <SimpleImageSlider
//         width={1513}
//         height={500}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//       />
//     </div>
//   );
// }
// export default HeroSection;