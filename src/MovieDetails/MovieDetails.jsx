import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [id]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveMovieToLocalStorage = () => {
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
    closeModal();
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    name,
    image,
    summary,
    type,
    language,
    genres,
    status,
    rating,
    runtime,
    premiered,
    officialSite,
    network
  } = movie;

  return (
    <div className="container mx-auto py-8 pt-24">
      <div className="flex flex-wrap items-center">
        {image && (
          <img
            src={image.medium}
            alt={name}
            className="w-1/2 md:w-1/3 h-auto mb-4 object-cover rounded-lg"
          />
        )}
        <div className="w-full md:w-2/3 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          {summary && (
            <div
              className="mb-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></div>
          )}
          <div className="flex items-center mb-4">
            <span className="px-2 py-1 bg-gray-200 text-sm text-gray-700 rounded mr-2">
              {type}
            </span>
            <span className="px-2 py-1 bg-gray-200 text-sm text-gray-700 rounded mr-2">
              {status}
            </span>
            <span className="px-2 py-1 bg-gray-200 text-sm text-gray-700 rounded">
              {runtime} minutes
            </span>
          </div>
          <div className="flex items-center mb-4">
            <strong className="mr-2">Language:</strong>
            <span className="text-gray-700">{language}</span>
          </div>
          {genres && (
            <div className="flex items-center mb-4">
              <strong className="mr-2">Genres:</strong>
              <span className="text-gray-700">{genres.join(', ')}</span>
            </div>
          )}
          {rating && (
            <div className="flex items-center mb-4">
              <strong className="mr-2">Average Rating:</strong>
              <span className="text-gray-700">{rating.average}</span>
            </div>
          )}
          <div className="flex items-center mb-4">
            <strong className="mr-2">Premiered:</strong>
            <span className="text-gray-700">{premiered}</span>
          </div>
          {officialSite && (
            <div className="flex items-center mb-4">
              <strong className="mr-2">Official Site:</strong>
              <a
                href={officialSite}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {officialSite}
              </a>
            </div>
          )}
          {network && (
            <div className="flex items-center mb-4">
              <strong className="mr-2">Network:</strong>
              <span className="text-gray-700">{network.name}</span>
            </div>
          )}

          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Book Ticket
          </button>

          <Modal open={showModal} onClose={closeModal} center>
            <h2 className="text-2xl font-bold mb-6 mt-6">Want to Book a Movie Ticket?</h2>
            <p className="text-lg mb-4">
              Movie: <span className="font-bold">{name}</span>
            </p>
          
            <p className="text-lg mb-4">
              Language: <span className="font-bold">{language}</span>
            </p>
            <p className="text-lg mb-4">
              Genres: <span className="font-bold">{genres.join(', ')}</span>
            </p>
          
           
          
            <button
              onClick={saveMovieToLocalStorage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Yes
            </button>
            <button className="px-5 mx-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closeModal} 
              
            >
              No
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
