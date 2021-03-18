import React, { Component } from 'react';

import { oneBeer } from './../api/ironbeers-api';

import HomeButton from './../components/HomeButton';
import BeerDetail from './../components/BeerDetail';

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
      <>
        <HomeButton />
        {beer && <BeerDetail beer={beer} />}
      </>
    );
  }
}

export default DetailedBeer;
