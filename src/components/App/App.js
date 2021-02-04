import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Rotten Tomatillos</h1>
        {this.state.movies.length ? <p>{this.state.movies}</p> : 
          <p>Loading...</p>}
      </div>
    )
  }

  // componentDidMount = () => {
}
