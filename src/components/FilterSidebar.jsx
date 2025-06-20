


import { Minus } from "lucide-react";

const FilterSidebar = () => {
  return (
    <aside className="w-[340px] md:w-[320px] rounded-lg bg-[#2c4256] py-8 px-6 flex flex-col gap-8 border border-[#e3e5d6] mx-auto shadow-lg">
      {/* Header */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-2">Filters</h2>
        <div className="h-px bg-white/30 w-full" />
      </div>

      {/* Sizes filter */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-white text-lg font-semibold">Sizes</span>
          <Minus size={20} color="#fff" strokeWidth={3} />
        </div>
        <input
          type="text"
          placeholder="Enter size"
          className="w-full rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 bg-white focus:ring-2 focus:ring-[##505263] border border-[#d7e2d6] transition text-base font-medium"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/30 w-full" />

      {/* Price filter */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-white text-lg font-semibold">Price</span>
          <Minus size={20} color="#fff" strokeWidth={3} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-base mr-1">Rs.</span>
            <input
              type="text"
              placeholder="From"
              className="flex-1 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-[#d7e2d6] focus:ring-2 focus:ring-[##505263] transition text-base font-medium"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-base mr-1">Rs.</span>
            <input
              type="text"
              placeholder="To"
              className="flex-1 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-[#d7e2d6] focus:ring-2 focus:ring-[#505263] transition text-base font-medium"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
