import axios from 'axios';

export const allBeers = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  return response.data;
};

export const filterBeers = async (query) => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
  );
  return response.data;
};

export const oneBeer = async (id) => {
  const response = await axios.get(
    'https://ih-beers-api2.herokuapp.com/beers/' + id
  );
  return response.data;
};

export const randomBeer = async () => {
  const response = await axios.get(
    'https://ih-beers-api2.herokuapp.com/beers/random'
  );
  return response.data;
};

export const addBeer = async (beer) => {
  const newBeer = await axios.post(
    'https://ih-beers-api2.herokuapp.com/beers/new',
    beer
  );
  return newBeer;
};
