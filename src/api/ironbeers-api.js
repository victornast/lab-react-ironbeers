import axios from 'axios';

export const allBeers = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
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
  await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer);
  return beer;
};
