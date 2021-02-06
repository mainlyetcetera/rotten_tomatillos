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


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/:title"
            render={() => (
            <Container movies={this.state.movies} currentMovie={this.state.currentMovie} updateCurrentMovie={this.updateCurrentMovie}/>
          )}
          />
          <Route
            path="/"
            render={() => (
              <Container movies={this.state.movies} updateCurrentMovie={this.updateCurrentMovie} />
            )}
          />
        </Switch>
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
