import React, { useState } from "react";
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
      { image: "Chamber.png", label: "Chamber Cover", route: "/categories1" },
      {
        image: "Kitchensink.png",
        label: "Kitchen Sink",
        route: "/categories2",
      },
      {
        image: "PVCtaps.png",
        label: "PVC Taps (Rolex)",
        route: "/varients3",
      },
      { image: "Brass.png", label: "Brass faucets", route: "/categories4" },
      {
        image: "CPVCfittingsandmore.png",
        label: "CP fittings and more",
        route: "/categories5",
      },
      { image: "solvent.png", label: "Solvent", route: "/categories6" },
      { image: "Flush.png", label: "Flush Tank", route: "/categories7" },
      { image: "chambercover.png", label: "Seat Cover", route: "/categories8" },
      {
        image: "Connection.png",
        label: "Connection Pipe",
        route: "/categories9",
      },
      { image: "PTMT.png", label: "PTMT Taps", route: "/categories10" },
      { image: "sumolex.jpg", label: "Sumolex Pipe & Fittings", route: "/pdf" },
      { image: "sumolex.jpg", label: "Sumolex PTMT Taps", route: "/pdf" },
      { image: "UPVCPIPE.png", label: "UPVC Pipe", route: "/categories13" },
      { image: "CPVCPIPE.png", label: "CPVC Pipe", route: "/categories14" },
      {
        image: "UPVCFITTING.png",
        label: "UPVC Fittings",
        route: "/categories15",
      },
      {
        image: "CPVCFITTING.png",
        label: "CPVC Fittings",
        route: "/categories16",
      },
      { image: "BALL.png", label: "Ball Valve", route: "/categories17" },
      { image: "CLIPf.jpg", label: "Clips", route: "/categories18" },
    ],
  },
  {
    title: "Hardware",
    expanded: false,
    products: [],
  },
  {
    title: "Painting and Wood",
    expanded: false,
    products: [],
  },
];

const CategorySection = ({ searchQuery = "" }) => {
  const [expandedPanels, setExpandedPanels] = useState(
    categories.map((c) => !!c.expanded)
  );
  const navigate = useNavigate();

  const handleToggle = (idx) => {
    setExpandedPanels((prev) =>
      prev.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <section
      className="w-full max-w-screen mx-auto my-12 rounded-xl pl-60 pr-60 pt-10"
      style={{ background: "#112D4E" }}
    >
      <h2 className="text-white text-3xl font-serif font-bold text-center mb-10 tracking-wide">
        Shop By Category
      </h2>
      <div className="space-y-3">
        {categories.map((cat, idx) => {
          const filteredProducts = cat.products.filter((prod) =>
            prod.label.toLowerCase().includes(searchQuery)
          );

          return (
            <div key={cat.title} className="mb-3">
              <button
                className="flex items-center gap-4 text-lg font-medium text-white font-serif mb-3 focus:outline-none"
                aria-expanded={expandedPanels[idx]}
                onClick={() => handleToggle(idx)}
                tabIndex={0}
                style={{ width: "100%" }}
              >
                <span
                  className={`${
                    idx === 0 ? "text-xl" : "text-lg"
                  } transition-colors`}
                >
                  {cat.title}
                </span>
                <span>
                  {expandedPanels[idx] ? (
                    idx === 0 ? (
                      <Minus size={20} />
                    ) : (
                      <ChevronUp size={22} />
                    )
                  ) : (
                    <ChevronDown size={22} />
                  )}
                </span>
                <span className="flex-1 border-t border-white/20 ml-6" />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPanels[idx]
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {expandedPanels[idx] && filteredProducts.length > 0 && (
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
                          onClick={() => {
                            if (prod.route) navigate(prod.route);
                          }}
                        >
                          {/* Image Section (Large + Full) */}
                          <div className="h-40 w-full">
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

                          {/* Text Section (White only under text) */}
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
                {expandedPanels[idx] && filteredProducts.length === 0 && (
                  <div className="text-sm text-gray-200 italic pl-2 pb-2">
                    No matching items found.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
