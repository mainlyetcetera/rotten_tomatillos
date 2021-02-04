import React, { Component } from 'react';
import Header from '../Header/Header.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: ''
    }
  }

  render() {
    const titles = this.state.movies.map(
      (movie, index) => <p key={index}>{movie.title}</p>);
    return (
      <div>
        <Header />
        {this.state.movies.length ? titles :
          <p>Loading...</p>}
      </div>
    )
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({
        movies: data.movies
      }))
      .catch(err => console.log(err))
  }
}
