import React, { useRef, useEffect } from "react";
import CategorySection from "../components/CategorySection";

const Index = ({ scrollToCategory, searchQuery }) => {
  const catRef = useRef();

  useEffect(() => {
    if (scrollToCategory) {
      scrollToCategory.current = () => {
        catRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    }
  }, [scrollToCategory]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#112D4E" }}>
      <div ref={catRef}>
        <CategorySection searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Index;


// import React from "react";
// import CategorySection from "../components/CategorySection";

// const Index = ({ searchQuery }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center" style={{ background: "#112D4E" }}>
//       <CategorySection searchQuery={searchQuery} />
//     </div>
//   );
// };

// export default Index;



// import CategorySection from "../components/CategorySection";

// const Index = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center" style={{background: "#112D4E"}}>
//       <CategorySection />
//     </div>
//   );
// };

// export default Index;