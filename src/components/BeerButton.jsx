import React from 'react';

import { Link } from 'react-router-dom';

function BeerButton({ beer }) {
  return (
    <Link to={`beers/${beer._id}`}>
      <img src={beer.image_url} alt={beer.name} height="150px" />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <small>Created by: {beer.contributed_by}</small>
    </Link>
  );
}

export default BeerButton;
