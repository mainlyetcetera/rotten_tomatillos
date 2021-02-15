import React from 'react';
import ContentLoader from 'react-content-loader';
import './DetailsLoader.css';

const DetailsLoader = () => (
  <div className="details-wrapper">
    <ContentLoader
      className="loader"
      viewBox="0 0 400 280"
      backgroundColor="#737373"
      foregroundColor="#ababab"
    >
    <rect x="0" y="20" rx="1" ry="1" width="400" height="220" />
    </ContentLoader>
  </div>
)

export default DetailsLoader;
