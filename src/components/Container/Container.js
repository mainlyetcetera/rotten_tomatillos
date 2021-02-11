import React from 'react';
import Movie from '../Movie/Movie.js';
import Details from '../Details/Details.js'
import { ErrorMsg } from '../ErrorMsg/ErrorMsg.js';
import MovieLoader from '../MovieLoader/MovieLoader.js'
import './Container.css';

const Container = props => {
  if (props.error) {
    return <ErrorMsg />;
  }

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
    const loadingComponents = [<MovieLoader key={0}/>, <MovieLoader key={1}/>, <MovieLoader key={2}/>]
    return (
      <main>
        <section className='movie-grid'>
          {props.movies.length ? movieComponents : loadingComponents}
        </section>
      </main>
    )
  } else {
    return <Details
      currentMovie={props.currentMovie}
      clearCurrentMovie={props.clearCurrentMovie}
    />
  }
}

export default Container;
