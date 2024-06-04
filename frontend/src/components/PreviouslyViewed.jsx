import React, { useEffect, useState } from 'react';
import api from '../api';

const PreviouslyViewed = () => {
  const [viewedAnimes, setViewedAnimes] = useState([]);

  useEffect(() => {
    // Fetch previously viewed animes from the backend
    api.get('/api/animes/previously-viewed').then(response => {
      setViewedAnimes(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Previously Viewed</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {viewedAnimes.map((anime, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <img src={anime.cover_image} alt={anime.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{anime.title}</h3>
              <p className="text-gray-400">{anime.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviouslyViewed;
