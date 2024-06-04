import React, { useEffect, useState } from 'react';
import api from '../api';

const Trending = () => {
  const [trendingAnimes, setTrendingAnimes] = useState([]);

  useEffect(() => {
    // Fetch trending animes from the backend
    api.get('/api/animes/trending').then(response => {
      setTrendingAnimes(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Trending Anime</h2>
      <div className="flex overflow-x-scroll space-x-4">
        {trendingAnimes.map((anime, index) => (
          <div key={index} className="min-w-full relative">
            <img src={anime.cover_image} alt={anime.title} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <h3 className="text-xl font-bold">{anime.title}</h3>
              <p>{anime.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
