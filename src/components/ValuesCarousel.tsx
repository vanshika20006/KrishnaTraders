import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Users
} from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  iconColor: string;
  backgroundColor: string;
  icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  iconColor,
  backgroundColor,
  icon
}) => {
  return (
    <div className="flex flex-col items-center max-w-[300px]">
      <div className="rounded-full bg-white p-4 mb-4 w-16 h-16 flex items-center justify-center">
        <div className={`rounded-full ${iconColor} p-2 flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className={`${backgroundColor} rounded-lg p-6 h-[260px] w-full flex flex-col items-center`}>
        <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
        <p className="text-white text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

const ValuesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const values: ValueCardProps[] = [
    {
      title: "Innovation",
      description: "We embrace technology and forward-thinking solutions to streamline the whole user experience—making it faster, smarter, and more efficient.",
      iconColor: "bg-emerald-500",
      backgroundColor: "bg-emerald-500",
      icon: <CheckCircle className="text-white" size={20} />
    },
    {
      title: "Empowerment",
      description: "We embrace technology and forward-thinking solutions to enhance customer experience— making it faster, simpler, and more efficient.",
      iconColor: "bg-amber-300",
      backgroundColor: "bg-amber-400",
      icon: <Lightbulb className="text-white" size={20} />
    },
    {
      title: "People First",
      description: "We embrace technology and forward-thinking solutions to streamline the customer experience—making it faster, smarter, and more efficient.",
      iconColor: "bg-pink-300",
      backgroundColor: "bg-pink-400",
      icon: <Users className="text-white" size={20} />
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? values.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === values.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleCards = () => {
    return (
      <>
        <div className="transition-all duration-300 transform scale-90 opacity-70">
          <ValueCard {...values[(currentIndex - 1 + values.length) % values.length]} />
        </div>

        <div className="transition-all duration-300 transform scale-100 z-20">
          <ValueCard {...values[currentIndex]} />
        </div>

        <div className="transition-all duration-300 transform scale-90 opacity-70">
          <ValueCard {...values[(currentIndex + 1) % values.length]} />
        </div>
      </>
    );
  };

  return (
    <div className="w-full h-[750px] bg-[#112D4E] py-16 px-4">
      <div className="container mx-auto relative">
        <h2 className="text-white text-3xl  md:text-4xl font-bold pt-5 pb-10 mb-20 text-center">
          What We Believe
        </h2>

        <div className="text-white text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg">
            At [Your Company Name], we believe that building something great starts with the
            right tools and trusted materials. Whether it's a large construction project or a
            small home repair, quality hardware makes all the difference — and we're here to
            make sure you get exactly that.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex justify-center items-center">
          {/* Arrow buttons - updated styling */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 border border-white rounded-full p-2 hover:bg-white/10 transition duration-300"
            aria-label="Previous slide"
          >
            <ArrowLeft className="text-white" size={24} />
          </button>

          {/* Desktop: 3 Cards */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {visibleCards()}
          </div>

          {/* Mobile: Single Card */}
          <div className="md:hidden flex justify-center">
            <ValueCard {...values[currentIndex]} />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 border border-white rounded-full p-2 hover:bg-white/10 transition duration-300"
            aria-label="Next slide"
          >
            <ArrowRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValuesCarousel;
