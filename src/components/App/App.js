import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Container from '../Container/Container.js';


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
        <Header />
        <Container movies={this.state.movies}/>
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
