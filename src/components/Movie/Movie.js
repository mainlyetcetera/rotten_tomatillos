import React from 'react';

const Movie = ({ poster_path, title, average_rating }) => (
  <article>
    <div className="movie-container">
      <button
        style={ {backgroundImage: `url(${poster_path})`} }
        className="movie-poster"
      >
      </button>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">{average_rating}</p>
    </div>
  </article>
)

export default Movie;
