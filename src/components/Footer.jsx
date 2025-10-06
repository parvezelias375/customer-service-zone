import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 pt-12">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">
          
          {/* Column 1: Branding and Description (Takes 2 columns on medium screens) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white">CS — Ticket System</h3>
            <p className="text-sm text-gray-400 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Contact Sales</a></li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition">Products & Services</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Customer Stories</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Download Apps</a></li>
            </ul>
          </div>

          {/* Column 4: Information & Social Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Join Us</a></li>
            </ul>
            
            {/* Social Links Section */}
            <h4 className="text-lg font-semibold text-gray-300 mt-6 pt-2">Social Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                {/* Placeholder for icons - use text for now */}
                <li><a href="#" className="hover:text-indigo-400 transition flex items-center"><span className="mr-2">X</span> @CS — Ticket.System</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition flex items-center"><span className="mr-2">in</span> @CS — Ticket.System</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition flex items-center"><span className="mr-2">f</span> @CS — Ticket.System</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition flex items-center"><span className="mr-2">@</span> support@cst.com</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;