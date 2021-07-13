import axios from 'axios';

export const getPizzas = async (lat = 40.7290884, lon = -74.0037228) => {
  const resp = await axios({
    method: 'GET',
    url: `https://cors-lite.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&term=pizza&sort_by=distance&open_now=true`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_TOKEN}`,
    },
  });
  return resp.data.businesses;
};
