import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg.js';
import DetailsLoader from '../DetailsLoader/DetailsLoader.js'
import DetailsModal from '../DetailsModal/DetailsModal.js'
import './Details.css'
import fetchData from '../../apiCalls.js';

class Details extends Component {
  constructor() {
    super()
    this.state = {
      movie: null,
      error: false
    }
  }

  componentDidMount() {
    fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}`)
    .then(data => {
      this.setState({
        movie: data.movie
      });
    })
    .catch(err => this.setState({error: true}));
  }

  render = () => (
    this.state.error ? 
      (
        <div className='error-box'>
          <ErrorMsg />
          <Link className="back-button" to='/' >Back to Movies</Link>
        </div>
      ) 
      : this.state.movie ? <DetailsModal movie={this.state.movie}/>
      : <DetailsLoader />
  )
}

export default Details;
