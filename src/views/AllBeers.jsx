import React, { Component } from 'react';

import HomeButton from './../components/HomeButton';

import { allBeers } from './../api/ironbeers-api';
import BeerButton from '../components/BeerButton';

class AllBeers extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.loadAllBeers();
  }

  async loadAllBeers() {
    const list = await allBeers();
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <HomeButton />
        <h2>All Beers</h2>
        {this.state.list.map((beer) => (
          <BeerButton key={beer._id} beer={beer} />
        ))}
      </div>
    );
  }
}

export default AllBeers;
