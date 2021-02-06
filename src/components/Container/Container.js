import React from 'react';
import Movie from '../Movie/Movie.js';
// import { Route, Switch } from 'react-router-dom';

import './Container.css';

const Container = props => {
  if (!props.currentMovie) {
    const movieComponents = props.movies.map((movie, index) => (
      <Movie
        key={index}
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating}
        updateCurrentMovie={props.updateCurrentMovie}
      />
    ));

    return (
      <main>
        <section className='movie-grid'>
        {props.movies.length ? movieComponents :
          <p>Loading...</p>}
          </section>
      </main>
    )
  } else {
    return <h1>{props.currentMovie}</h1>
  }
}

export default Container;
