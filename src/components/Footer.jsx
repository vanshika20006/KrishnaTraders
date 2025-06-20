import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#112D4E] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop Section */}
          <div>
            <h3 className="text-xl font-bold ml-8 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>Bathroom</li>
              <li>Flooring</li>
              <li>Kitchen Appliances</li>
              <li>Hardware</li>
              <li>Light</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Brands</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Other Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 ml-4">Other Links</h3>
            <ul className="space-y-2">
              
              <li><a href="#" className="hover:text-gray-300">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <ul className="space-y-2">
              <li>080-23456789</li>
              <li>+9191234567891</li>
              <li><a href="mailto:sales@KrishnaTraders.in" className="hover:text-gray-300">sales@KrishnaTraders.in</a></li>
              <li>location To be given</li>
            </ul>
            <div className="mt-5 mr-5">
              <h4 className="font-semibold mb-2">Follow us</h4>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-gray-300">FB</a>
                <a href="#" className="hover:text-gray-300">TW</a>
                <a href="#" className="hover:text-gray-300">IG</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Krishna Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;