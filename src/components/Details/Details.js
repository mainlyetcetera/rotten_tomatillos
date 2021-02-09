import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Details.css'


class Details extends Component {
  constructor() {
    super()
    this.state = {
      movie: null
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}`)
      .then(response => response.json())
      .then(data => this.setState({
        movie: data.movie
      }))
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.movie) {
      return (
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
            <p>{this.state.movie.overview}</p>
            <p>{this.state.movie.genres}</p>
            <p>{this.state.movie.budget}</p>
            <p>{this.state.movie.runtime}</p>
            <p>{this.state.movie.tagline}</p>
          </section>
          <Link className="back-button" to='/' onClick={this.props.clearCurrentMovie}>Back to Movies</Link>
          </div>
        </>
    )} else {
        return <h1>Details Here</h1>
    }
  }
}


export default Details;
