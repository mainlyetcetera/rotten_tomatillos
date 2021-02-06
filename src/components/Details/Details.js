import React, { Component } from 'react';

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
        <div>
          <p>{this.state.movie.overview}</p>
          <p>{this.state.movie.genres}</p>
          <p>{this.state.movie.poster_path}</p>
          <p>{this.state.movie.budget}</p>
          <p>{this.state.movie.runtime}</p>
          <p>{this.state.movie.tagline}</p>
        </div>
      )} else {
        return <h1>Details Here</h1>
      }
  }
}


export default Details;
