import React from 'react';
import './DetailsModal.css'
import { Link } from 'react-router-dom';

const DetailsModal = ( { movie }) => {
  const formatDollars = (number) => (
    number.toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    })
  );

  const formattedBudget = formatDollars(movie.budget);
  const formattedRevenue = formatDollars(movie.revenue);

  return (
  <>
  <div
    className="details-wrapper"
    style={
      {backgroundImage: `url(${movie.backdrop_path})`}
    }>
  </div>
  <div className="details-modal">
    <img className="details-poster" src={`${movie.poster_path}`} />
    <section className="details-info">
      <h2 className="details-title">{movie.title}</h2>
      <p className="details-release-date">{movie.release_date.slice(0,4)}</p>
      <p className="details-overview__heading">Overview</p>
      <p className="details-overview">{movie.overview}</p>
      <p className="details-genre__heading">Genres</p>
      <p className="details-genre">{movie.genres.join(', ')}</p>
      <div className="details-bottom">
        <div className="details-trivia-wrapper">
          <p className="details-trivia__heading">Trivia</p>
          {movie.budget !== 0 && <p className="details-trivia-fact">Budget: {formattedBudget}</p>}
          {movie.revenue !==0 && <p className="details-trivia-fact">Revenue: {formattedRevenue}</p>}
          <p className="details-trivia-fact">Runtime: {movie.runtime} mins</p>
        </div>
        <div className="details-rating-wrapper">
          <p className="details-rating">{movie.average_rating.toFixed(1)}</p>
        </div>
      </div>
      <Link to='/'>Back to Movies</Link>
    </section>
  </div>
  </>
  )
}

export default DetailsModal
