import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

// 🔻 Mobile Footer Component 🔻
const MobileFooter = () => {
  return (
    <div className="bg-[#112D4E] text-white py-10 px-4 lg:hidden block">
      <div className="space-y-8">
        {/* Row 1: Shop + Quick Links */}
        <div className="flex justify-between gap-6">
          {/* Shop */}
          <div className="flex-1 text-center">
            <h3 className="text-md font-bold mb-2 ml-10">Shop</h3>
            <ul className="space-y-1 text-sm">
              <li>Bathroom</li>
              <li>Flooring</li>
              <li>Kitchen Appliances</li>
              <li>Hardware</li>
              <li>Lighting</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center">
            <h3 className="text-md font-bold mb-2 ml-10">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Row 2: Other Links + Contact */}
        <div className="flex justify-between gap-6">
          {/* Other Links */}
          <div className="flex-1 text-center">
            <h3 className="text-md font-bold mb-2 ml-10">Other Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 text-center">
            <h3 className="text-md font-bold mb-2 ml-10">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>080-23456789</li>
              <li>+91 91234567891</li>
              <li><a href="mailto:sales@KrishnaTraders.in">sanitaryghar.in</a></li>
              <li>Location: TBD</li>
            </ul>
          </div>
        </div>

        {/* Follow Us Centered */}
        <div className="text-center">
          <h4 className="font-semibold text-sm mb-2 mr-8">Follow us</h4>
          <div className="flex justify-center gap-4 mr-8">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Krishna Traders. All rights reserved.</p>
      </div>
    </div>
  );
};

// 🔺 Desktop Footer Component 🔺
const Footer = () => {
  return (
    <>
      {/* Desktop Only */}
      <footer className="bg-[#112D4E] text-white py-10 px-4 overflow-x-hidden hidden lg:block">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-6">
            {/* Shop */}
            <div className="min-w-[150px]">
              <h3 className="text-lg font-bold mb-3">Shop</h3>
              <ul className="space-y-1 text-sm">
                <li>Bathroom</li>
                <li>Flooring</li>
                <li>Kitchen Appliances</li>
                <li>Hardware</li>
                <li>Lighting</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="min-w-[150px]">
              <h3 className="text-lg font-bold mb-3">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Brands</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              </ul>
            </div>

            {/* Other Links */}
            <div className="min-w-[150px]">
              <h3 className="text-lg font-bold mb-3">Other Links</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-gray-300">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-[180px]">
              <h3 className="text-lg font-bold mb-3">Contact</h3>
              <ul className="space-y-1 text-sm">
                <li>080-23456789</li>
                <li>+91 91234567891</li>
                <li><a href="mailto:sales@KrishnaTraders.in" className="hover:text-gray-300">sales@KrishnaTraders.in</a></li>
                <li>Location: TBD</li>
              </ul>

              <div className="mt-4">
                <h4 className="font-semibold text-sm mb-2">Follow us</h4>
                <div className="flex gap-3">
                  <a href="#" className="hover:text-gray-300"><Facebook size={18} /></a>
                  <a href="#" className="hover:text-gray-300"><Twitter size={18} /></a>
                  <a href="#" className="hover:text-gray-300"><Instagram size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Krishna Traders. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Only */}
      <MobileFooter />
    </>
  );
};

export default Footer;
