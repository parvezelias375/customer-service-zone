import React from 'react';

const BannerCard = ({ title, count, gradient }) => (
  // The grid-cols-1 md:grid-cols-2 in App.jsx handles the responsiveness here
  <div 
    className={`p-6 rounded-2xl text-white shadow-xl ${gradient} transition duration-300 ease-in-out`}
    
  >
    
    <div className="text-xl font-medium mb-2">{title}</div>
    <div className="text-6xl font-bold">{count}</div>
  </div>
);

const Banner = ({ inProgressCount, resolvedCount }) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <BannerCard 
      title="In-Progress" 
      count={inProgressCount} 
      gradient="bg-gradient-to-r from-purple-500 to-indigo-600"
    
    />
    
    <BannerCard 
      title="Resolved" 
      count={resolvedCount} 
      gradient="bg-gradient-to-r from-green-400 to-green-600"
    />
  </section>
);

export default Banner;