import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Container from '../Container/Container.js';
import { Route, Switch } from 'react-router-dom';
import fetchData from '../../apiCalls.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: null,
      error: false
    }
  }

  updateCurrentMovie = (id) => (
    this.setState({ currentMovie: id })
  )

  clearCurrentMovie = () => (
    this.setState({ currentMovie: null })
  )

  render() {
    return (
      <div>
        <Header />
        <Route
          path="/"
          render={() => (
            <Container
              movies={this.state.movies}
              updateCurrentMovie={this.updateCurrentMovie}
              error={this.state.error}
            />
          )}
          exact
        />
        <Route
          path="/:title/:id"
          render={() => (
            <Container
              currentMovie={this.state.currentMovie}
              clearCurrentMovie={this.clearCurrentMovie}
            />
          )}
          exact
        />
      </div>
    )
  }

  componentDidMount = () => {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(data => {
      this.setState({
        movies: data.movies
      });
    })
    .catch(err => this.setState({error: true}));
  }
}
