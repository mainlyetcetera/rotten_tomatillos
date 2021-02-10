import React from 'react';
import ContentLoader from 'react-content-loader';
import './MovieLoader.css';

const MovieLoader = () => (
  <>
    <div className="loader-wrapper">
      <ContentLoader
        className="loader"
        viewBox="0 0 100 200"
        backgroundColor="#737373"
        foregroundColor="#ababab"
      >
        <rect x="5" y="0" rx="1" ry="1" width="90" height="140" />
        <rect x="25" y="150" rx="1" ry="1" width="50" height="10" />
      </ContentLoader>
    </div>
  </>
);

export default MovieLoader
