import React from 'react';
import Movie from '../Movie/Movie.js';

import './Container.css';

const Container = props => {
  const movieComponents = props.movies.map((movie, index) => (
    <Movie
      key={index}
      poster_path={movie.poster_path}
      title={movie.title}
      average_rating={movie.average_rating}
    />
  ));

  return (
    <section className='movie-grid'>
      {props.movies.length ? movieComponents :
        <p>Loading...</p>}
    </section>
  )
}

export default Container;

