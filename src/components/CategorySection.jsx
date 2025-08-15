import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Minus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const categories = [
  {
    title: "Plumbing and Sanitary",
    expanded: true,
    products: [
      { image: "cham2.png", label: "Chamber Cover", route: "/categories1" },
      { image: "Kitchensink.png", label: "Kitchen Sink", route: "/categories2" },
      { image: "PVCtaps.png", label: "PVC Taps (Rolex)", route: "/varients3" },
      { image: "Brass.png", label: "Brass faucets", route: "/categories4" },
      { image: "CPVCfittingsandmore.png", label: "CP fittings and more", route: "/categories5" },
      { image: "solvent.png", label: "Solvent", route: "/categories6" },
      { image: "Flush.png", label: "Flush Tank", route: "/categories7" },
      { image: "chambercover.png", label: "Seat Cover", route: "/categories8" },
      { image: "Connection.png", label: "Connection Pipe", route: "/categories9" },
      { image: "PTMT.png", label: "PTMT Taps", route: "/categories10" },
      { image: "sumolex.jpg", label: "Sumolex Pipe & Fittings", route: "/pdf1" },
      { image: "sumolex.jpg", label: "Sumolex PTMT Taps", route: "/pdf2" },
      { image: "UPVCPIPE.png", label: "UPVC Pipe", route: "/categories13" },
      { image: "CPVCPIPE.png", label: "CPVC Pipe", route: "/categories14" },
      { image: "UPVCFITTING.png", label: "UPVC Fittings", route: "/pdf3" },
      { image: "CPVCFITTING.png", label: "CPVC Fittings", route: "/pdf4" },
      { image: "BALL.png", label: "Ball Valve", route: "/categories17" },
      { image: "CLIPf.jpg", label: "Clips", route: "/categories18" },
    ],
  },
  { title: "Hardware", expanded: false, products: [] },
  { title: "Painting and Wood", expanded: false, products: [] },
];

const MobileCategorySwiper = ({ products, navigate }) => {
  return (
    <Swiper
      modules={[Grid, Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={2}
      grid={{ rows: 3, fill: "row" }}
      className="mb-6"
     style={{
  '--swiper-navigation-size': '40px', // icon ka size
  '--swiper-navigation-color': '#1a0909ff', // icon ka color
  '--swiper-navigation-sides-offset': '5px', // side se distance
  fontWeight: '900',
  // '--swiper-navigation-top-offset': '330px', // top se distance
}}

    >
      {products.map((prod, i) => (
        <SwiperSlide key={prod.label + i}>
          <div
            className="cursor-pointer rounded-lg shadow hover:shadow-lg transition-all overflow-hidden"
            onClick={() => {
              if (prod.route) navigate(prod.route);
            }}
          >
            <div className="w-full h-32 flex items-center justify-center bg-white/70">
              <img
                src={prod.image}
                alt={prod.label}
                className="w-full h-28 object-contain p-1"
              />
            </div>
            <div className="bg-white rounded-b-md px-2 text-center">
              <p className="text-sm font-medium text-black">
                {prod.label}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const CategorySection = ({ searchQuery = "" }) => {
  const [expandedPanels, setExpandedPanels] = useState(categories.map((c) => !!c.expanded));
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = (idx) => {
    setExpandedPanels((prev) =>
      prev.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <section
      className={`w-full max-w-screen mx-auto my-8 rounded-xl ${isMobile ? "px-4 pt-6 pb-12" : "pl-60 pr-60 pt-10"}`}
      style={{ background: "#112D4E" }}
    >
      <h1
        className={`text-white text-center font-serif font-bold mb-6 ${
          isMobile ? "text-center" : "text-left"
        }`}
        style={{ fontSize: isMobile ? "30px" : "40px" }}
      >
        Shop By Category
      </h1>

      <div className="space-y-3">
        {categories.map((cat, idx) => {
          const filteredProducts = cat.products.filter((prod) =>
            prod.label.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return (
            <div
              key={cat.title}
              className={`${isMobile && idx === 0 ? "mt-6" : ""} mb-3`}
            >
              <button
                className={`flex items-center gap-4 text-lg font-medium text-white font-serif mb-3 focus:outline-none w-full ${
                  isMobile ? "justify-center" : ""
                }`}
                aria-expanded={expandedPanels[idx]}
                onClick={() => handleToggle(idx)}
              >
                <span className={`${idx === 0 ? "text-xl" : "text-lg"} transition-colors`}>
                  {cat.title}
                </span>
                <span>
                  {expandedPanels[idx] ? (
                    idx === 0 ? <Minus size={20} /> : <ChevronUp size={22} />
                  ) : (
                    <ChevronDown size={22} />
                  )}
                </span>
                {!isMobile && <span className="flex-1 border-t border-white/20 ml-6" />}
              </button>

              {!isMobile && expandedPanels[idx] && filteredProducts.length > 0 && (
                <Swiper
                  modules={[Grid, Navigation]}
                  navigation
                  spaceBetween={20}
                  slidesPerView={5}
                  grid={{ rows: 2, fill: "row" }}
                  className="mb-6"
                >
                  {filteredProducts.map((prod, i) => (
                    <SwiperSlide key={prod.label + i}>
                      <div
                        className="cursor-pointer rounded-lg shadow hover:shadow-lg transition-all overflow-hidden"
                        onClick={() => navigate(prod.route)}
                      >
                        <div className="h-45 w-full">
                          {prod.image ? (
                            <img
                              src={prod.image}
                              alt={prod.label}
                              className="w-full h-full object-content"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                              No Image
                            </div>
                          )}
                        </div>
                        <div className="bg-white rounded-b-md px-2 text-center">
                          <p className="text-md font-medium text-black">
                            {prod.label}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {isMobile && expandedPanels[idx] && filteredProducts.length > 0 && (
                <MobileCategorySwiper products={filteredProducts} navigate={navigate} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
