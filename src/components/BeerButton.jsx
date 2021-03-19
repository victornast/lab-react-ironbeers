import React from 'react';

import './BeerButton.css';

import { Link } from 'react-router-dom';

function BeerButton({ beer }) {
  return (
    <Link to={`beers/${beer._id}`} className="beer-button">
      <div className="beer-button__image-wrapper">
        <img
          src={beer.image_url}
          alt={beer.name}
          className="beer-button__image"
        />
      </div>
      <div className="beer-button__body">
        <h3 className="beer-button__title">{beer.name}</h3>
        <p className="beer-button__tagline">{beer.tagline}</p>
        <small className="beer-button__author">
          Created by: {beer.contributed_by}
        </small>
      </div>
    </Link>
  );
}

export default BeerButton;
