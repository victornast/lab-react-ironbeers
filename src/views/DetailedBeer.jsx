import React, { Component } from 'react';

import { oneBeer } from './../api/ironbeers-api';

class DetailedBeer extends Component {
  state = { beer: null };

  componentDidMount() {
    this.loadOneBeer();
  }

  async loadOneBeer() {
    const beer = await oneBeer(this.props.match.params.id);
    this.setState({ beer });
  }

  render() {
    const beer = this.state.beer;
    return (
      <article>
        {beer && (
          <>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <small>{beer.contributed_by}</small>
          </>
        )}
      </article>
    );
  }
}

export default DetailedBeer;
