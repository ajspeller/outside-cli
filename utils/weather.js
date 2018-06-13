const axios = require('axios');


module.exports = async (location) => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  const results = await axios({
    method: 'get',
    url: 'https://query.yahooapis.com/v1/public/yql',
    params: {
      format: 'json',
      q: `select item from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}")`
    }
  });
  // console.log(results);
  return results.data.query.results.channel.item;
};