import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor() {
    super()
  }

  render() {
    return <input
      className="search-bar"
      placeholder="Search by Title"></input>
  }
}

export default SearchBar
