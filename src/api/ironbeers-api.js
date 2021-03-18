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
