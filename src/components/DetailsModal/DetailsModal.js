import React from 'react';
import './DetailsModal.css'

const DetailsModal = ( { movie }) => {

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
          <p className="details-trivia-fact">Budget: ${movie.budget}</p>
          <p className="details-trivia-fact">Runtime: {movie.runtime}mins</p>
          <p className="details-trivia-fact">Revenue: ${movie.revenue}</p>
        </div>
        <div className="details-rating-wrapper">
          <p className="details-rating">{this.state.movie.average_rating.toFixed(1)}</p>
        </div>
      </div>
      <Link className="back-button" to='/' onClick={this.props.clearCurrentMovie}>Back to Movies</Link>
    </section>
  </div>
  </>
  )
}

export default DetailsModal
