import React, { Component } from 'react';

export default Class App extends Component {
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
        <h1>Rotten Tomatillos</H1>
        <p>{this.state.movies}</p>
      </div>
    )
  }

  // componentDidMount = () => {
}
