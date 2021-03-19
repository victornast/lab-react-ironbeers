import React, { Component } from 'react';

import HomeButton from './../components/HomeButton';

import { allBeers, filterBeers } from './../api/ironbeers-api';
import BeerButton from '../components/BeerButton';

class AllBeers extends Component {
  state = {
    list: [],
    filter: '',
  };

  componentDidMount() {
    this.loadAllBeers();
  }

  async loadAllBeers() {
    const list = await allBeers();
    this.setState({ list });
  }

  handleFilterChange = async (event) => {
    const { value } = event.target;
    await this.setState({ filter: value });
    const list = await filterBeers(value);
    await this.setState({ list });
  };

  render() {
    return (
      <div>
        <HomeButton />
        <h2>All Beers</h2>
        {this.state.list.map((beer) => (
          <BeerButton key={beer._id} beer={beer} />
        ))}
        <form>
          <label htmlFor="beer-filter">Search</label>
          <input
            type="text"
            placeholder="Filter beers"
            id="beer-filter"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </form>
      </div>
    );
  }
}

export default AllBeers;
