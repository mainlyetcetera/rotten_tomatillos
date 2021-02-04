import React from 'react';
import './Movie.css';

const Movie = ({ poster_path, title, average_rating }) => {
  return (
    <article>
      <div className="movie-wrapper">
        <button
          style={{
            backgroundImage: `url(${poster_path})`
          }}
          className="movie-poster"
        >
        </button>
        <h2 className="movie-title">{title}</h2>
        <p className="movie-rating">{average_rating}</p>
      </div>
    </article>
  )
}

export default Movie;
