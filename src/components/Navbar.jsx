import React from 'react';

const Navbar = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        CS — Ticket System
      </h1>
      <nav className="flex items-center space-x-6">
        {/* These links hide on small screens but are visible on PC */}
        <a href="#" className="text-gray-600 hover:text-indigo-600 hidden sm:inline">Home</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 hidden sm:inline">FAQ</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 hidden sm:inline">Changelog</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 hidden sm:inline">Blog</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 hidden sm:inline">Download</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 hidden sm:inline">Contact</a>
        
        {/* New Ticket Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg flex items-center transition duration-200">
          <span className="text-xl mr-1">+</span> New Ticket
        </button>
      </nav>
    </div>
  </header>
);

export default Navbar;