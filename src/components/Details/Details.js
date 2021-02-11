import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg.js'; 
import DetailsLoader from '../DetailsLoader/DetailsLoader.js'
import './Details.css'
import fetchData from '../../apiCalls.js';

class Details extends Component {
  constructor() {
    super()
    this.state = {
      movie: null,
      error: false
    }
  }

  componentDidMount() {
    fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}`)
    .then(data => {
      this.setState({
        movie: data.movie
      });
    })
    .catch(err => this.setState({error: true}));
  }

  render = () => (
    this.state.error ? (
      <div className='error-box'>
        <ErrorMsg /> 
        <Link className="back-button" to='/' onClick={this.props.clearCurrentMovie}>Back to Movies</Link>
      </div>
    ) : this.state.movie ? (
      <>
        <div
          className="details-wrapper"
          style={
            {backgroundImage: `url(${this.state.movie.backdrop_path})`}
          }>
        </div>
        <div className="details-modal">
          <img className="details-poster" src={`${this.state.movie.poster_path}`} />
          <section className="details-info">
            <h2 className="details-title">{this.state.movie.title}</h2>
            <p className="details-release-date">{this.state.movie.release_date.slice(0,4)}</p>
            <p className="details-overview__heading">Overview</p>
            <p className="details-overview">{this.state.movie.overview}</p>
            <p className="details-genre__heading">Genres</p>
            <p className="details-genre">{this.state.movie.genres.join(', ')}</p>
            <div className="details-bottom">
              <div className="details-trivia-wrapper">
                <p className="details-trivia__heading">Trivia</p>
                <p className="details-trivia-fact">Budget: ${this.state.movie.budget}</p>
                <p className="details-trivia-fact">Runtime: {this.state.movie.runtime}mins</p>
                <p className="details-trivia-fact">Revenue: ${this.state.movie.revenue}</p>
              </div>
              <div className="details-rating-wrapper">
                <p className="details-rating">{this.state.movie.average_rating.toFixed(1)}</p>
              </div>
            </div>
            <Link className="back-button" to='/' onClick={this.props.clearCurrentMovie}>Back to Movies</Link>
          </section>
        </div>
      </>
    ) : (
      <DetailsLoader />
    )
  )
}

export default Details;
