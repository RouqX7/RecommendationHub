import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">RecommendationHub</div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#genres" className="hover:underline">Genres</a>
          <a href="#trending" className="hover:underline">Trending</a>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search" className="p-2 rounded-l-md border-none outline-none" />
          <button className="bg-blue-500 p-2 rounded-r-md">Search</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
