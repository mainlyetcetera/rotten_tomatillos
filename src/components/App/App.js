import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Movie from '../Movie/Movie.js';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: ''
    }
  }

  render() {
    const movies = this.state.movies.map(
      (movie, index) => {
        return <Movie
          key={index}
          poster_path={movie.poster_path}
          title={movie.title}
          average_rating={movie.average_rating}
        />});
        
    return (
      <div>
        <Header />
        {this.state.movies.length ? movies :
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
