import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Container from '../Container/Container.js';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: null
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
        <Switch>
          <Route
            path="/"
            render={() => (
              <Container
                movies={this.state.movies}
                updateCurrentMovie={this.updateCurrentMovie}
              />
            )}
            exact
          />
          <Route
            path="/:title"
            render={() => (
              <Container
                currentMovie={this.state.currentMovie}
                clearCurrentMovie={this.clearCurrentMovie}
              />
            )}
            exact
          />
        </Switch>
      </div>
    )
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => setTimeout(() =>
        this.setState({
          movies: data.movies
        }), 2500))
      .catch(err => console.log(err))
  }
}
