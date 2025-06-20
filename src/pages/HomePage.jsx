import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Index from "./Index";
import BeliefSection from "../components/ValuesCarousel";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";
import WhyChooseUs from "../components/Whyus";

const HomePage = () => {
  const scrollToCategory = useRef();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    scrollToCategory.current?.();
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      
  <HeroSection />

      <Index scrollToCategory={scrollToCategory} searchQuery={searchQuery} />
      <BestSelling />
      <BeliefSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default HomePage;



// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import Index from './Index';
// import BeliefSection from '../components/ValuesCarousel';
// import Footer from '../components/Footer';
// import BestSelling from '../components/BestSelling';
// import WhyChooseUs from "../components/WhyChooseUs";
// import '../index.css';

// const HomePage = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <>
//       <Navbar onSearch={(query) => setSearchQuery(query)} />
//       <HeroSection />
//       <Index searchQuery={searchQuery} />
//       <BestSelling />
//       <BeliefSection />
//       <WhyChooseUs />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;








// import React from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import Index from './Index';

// import BeliefSection from '../components/ValuesCarousel';


// import Footer from '../components/Footer';
// import BestSelling from '../components/BestSelling';
// import WhyChooseUs from "../components/WhyChooseUs";
// import '../index.css';


  
//   const HomePage = () => {
//     return (
//       <>
        
//         <Navbar />
//         <HeroSection />
//         <Index></Index>
//         <BestSelling></BestSelling>
//         <BeliefSection />
//         <WhyChooseUs></WhyChooseUs>
//         <Footer />
//       </>
//     );
//   };
  
//   export default HomePage;