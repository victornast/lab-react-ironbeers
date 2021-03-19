import React from 'react';

import './BeerDetail.css';

function BeerDetail({ beer }) {
  return (
    <article className="beer-detail">
      <div className="beer-detail__media">
        <img
          className="beer-detail__image"
          src={beer.image_url}
          alt={beer.name}
        />
      </div>
      <h2 className="beer-detail__title">{beer.name}</h2>
      <p className="beer-detail__tagline">{beer.tagline}</p>
      <p className="beer-detail__date">{beer.first_brewed}</p>
      <p className="beer-detail__alevel">{beer.attenuation_level}</p>
      <p className="beer-detail__description">{beer.description}</p>
      <p className="beer-detail__author">{beer.contributed_by}</p>
    </article>
  );
}

export default BeerDetail;
