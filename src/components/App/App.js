import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Container from '../Container/Container.js';
import { Route } from 'react-router-dom';
import fetchData from '../../apiCalls.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: false,
      search: ''
    }
  }

  updateSearch = (searchTerm) => {
    this.setState({
      search: searchTerm
    })
  }

  componentDidMount = () => {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(data => setTimeout(() =>
       this.setState({
         movies: data.movies
       }), 1500))
    .catch(err => this.setState({error: true}));
  }

  render() {
    return (
      <div>
        <Header />
        <Route
          path="/"
          render={() => (
            <Container
              updateSearch={this.updateSearch}
              search={this.state.search}
              movies={this.state.movies}
              error={this.state.error}
            />
          )}
          exact
        />
        <Route
          path="/:title/:id"
          render={({ match }) => (
            <Container
              currentMovie={match.params.id}
            />
          )}
          exact
        />
      </div>
    )
  }
}
