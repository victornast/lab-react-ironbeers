import React, { Component } from 'react';

import { randomBeer } from './../api/ironbeers-api';

import HomeButton from './../components/HomeButton';
import BeerDetail from './../components/BeerDetail';

class RandomBeer extends Component {
  state = { beer: null };

  componentDidMount() {
    this.loadOneBeer();
  }

  async loadOneBeer() {
    const beer = await randomBeer();
    this.setState({ beer });
  }
  render() {
    const beer = this.state.beer;
    return (
      <>
        <HomeButton />
        {beer && <BeerDetail beer={beer} />}
      </>
    );
  }
}

export default RandomBeer;
