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
        <Switch>
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
    fetchData('https://ranasdfcid-tomatillos.herokuapp.com/api/v2/movies')
    .then(data => {
      console.log('data', data);
      this.setState({
        movies: data.movies
      });
    })
    .catch(err => this.setState({error: true}));
  }
}
