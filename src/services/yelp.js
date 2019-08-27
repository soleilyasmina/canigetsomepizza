import axios from 'axios';

export const getPizzas = async (lat = 40.7401286, lon = -73.9898119) => {
  const resp = await axios({
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&term=pizza&sort_by=distance`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_TOKEN}`,
    },
  });
  return resp.data.businesses;
};
