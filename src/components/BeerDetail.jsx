import React from 'react';

function BeerDetail({ beer }) {
  return (
    <article>
      <img src={beer.image_url} alt={beer.name} height="150px" />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <small>{beer.contributed_by}</small>
    </article>
  );
}

export default BeerDetail;
