import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ poster_path, title, average_rating, id }) => {
  const cleanTitle = title.replaceAll(/[^a-zA-Z0-9]/g, '').replaceAll(' ', '');
  return (
    <article className="mini-movie">
      <Link
        to={`/${cleanTitle}/${id}`}
        className="movie-wrapper"
      >
        <img
          src={`${poster_path}`}
          className="movie-poster"
          alt={`${title}`}
        ></img>
        <h2 className="movie-title">{title}</h2>
      </Link>
    </article>
  )
}

export default Movie;
