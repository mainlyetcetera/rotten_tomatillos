import React from 'react';

export const ErrorMsg = () => (
  <div className='whole-error'>
    <h2 className='errorMsg'>Sorry, something went wrong!</h2>
    <h3 className='later-text'>Please try again later!</h3>
  </div>
)

// centered
// in a box
// rounded corners
// coloring that works with the darker background
// a little shadowing under the box, on the left, right, bottom

// link centered under the box
// therefore I think the container should handle the styling for this box
// that way it can put the error and link together
// eventually this link should be in the box
