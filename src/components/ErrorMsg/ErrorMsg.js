import React from 'react';
import './ErrorMsg.css'

export const ErrorMsg = (props) => (
  <div className='error-wrapper'>
    <h2 className='error-msg'>Sorry, something went wrong!</h2>
    <h3>{props.message}</h3>
  </div>
)
