import React, { Component } from 'react';

import HomeButton from './../components/HomeButton';

import { addBeer } from './../api/ironbeers-api';

import './NewBeer.css';

class NewBeer extends Component {
  state = {
    beer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    },
  };

  handleFormChange = (event) => {
    const { name, value } = event.target;
    const beer = { ...this.state.beer };
    name === 'attenuation_level'
      ? (beer[name] = Number(value))
      : (beer[name] = value);
    this.setState({ beer });
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { beer } = this.state;
    await addBeer(beer);
    this.setState({
      beer: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
      },
    });
    this.props.history.push('/beers');
  };

  render() {
    return (
      <div>
        <HomeButton />
        <form
          className="new-beer__form"
          action="/beers"
          onSubmit={this.handleFormSubmission}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.beer.name}
            onChange={this.handleFormChange}
            required
          />

          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={this.state.beer.tagline}
            onChange={this.handleFormChange}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            className="new-beer__form-description"
            rows="6"
            type="text"
            id="description"
            name="description"
            value={this.state.beer.description}
            onChange={this.handleFormChange}
            required
          />

          <label htmlFor="firstBrewed">First Brewed</label>
          <input
            type="text"
            id="firstBrewed"
            name="first_brewed"
            value={this.state.beer.first_brewed}
            onChange={this.handleFormChange}
            required
          />

          <label htmlFor="brewersTips">Brewer's Tips</label>
          <input
            type="text"
            id="brewersTips"
            name="brewers_tips"
            value={this.state.beer.brewers_tips}
            onChange={this.handleFormChange}
            required
          />

          <label htmlFor="attenuationLevel">Attenuation Level </label>
          <input
            type="number"
            id="attenuationLevel"
            name="attenuation_level"
            value={this.state.beer.attenuation_level}
            onChange={this.handleFormChange}
            required
          />

          <label htmlFor="contributedBy">Contributed By</label>
          <input
            type="text"
            id="contributedBy"
            name="contributed_by"
            value={this.state.beer.contributed_by}
            onChange={this.handleFormChange}
            required
          />

          <button>Add New</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
