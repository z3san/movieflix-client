import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, []);

  const truncateSummary = (summary, maxLength) => {
    if (summary.length <= maxLength) {
      return summary;
    }
    const truncatedSummary = summary.substring(0, maxLength).trim();
    return `${truncatedSummary}...`;
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Latest Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map(movie => (
          <div key={movie.show.id} className="card card-compact shadow-lg">
            <img src={movie.show.image.medium} alt={movie.show.name} className="w-full h-[50%] object-cover" />
            <div className="card-body">
              <h2 className="card-title">{movie.show.name}</h2>
              <div className="card-description-container">
                <p className="card-description">
                  {truncateSummary(movie.show.summary, 250)}
                  {movie.show.summary.length > 250 && (
                    <a href={movie.show.url} className="text-blue-500 font-semibold hover:underline">
                      Read more
                    </a>
                  )}
                </p>
                <Link to={`/movies/${movie.show.id}`} className="btn btn-primary mt-4">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
