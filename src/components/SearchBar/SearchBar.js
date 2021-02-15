import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    }, () => {
      this.props.updateSearch(this.state.searchTerm)
    })
  }

  render() {
    return <input
      className="search-bar"
      placeholder="Search by Title"
      value={this.state.searchTerm}
      onChange={event => this.handleChange(event)}></input>
  }

}

export default SearchBar
