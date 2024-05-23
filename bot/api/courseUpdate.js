const fx = require('money');
require('dotenv').config()
const axios = require('axios')

// updating database
const updateRates = async () => {
  try {
    const response = await axios.get(process.env.URL_PATH, {
      params: {
        app_id: process.env.API_KEY
      }
    });
    if (response.status === 200) {
      fx.rates = response.data.rates;
      fx.base = response.data.base;
    } else {
      console.log('Ошибка:', response.data);
    }

  } catch (error) {
    console.error('Ошибка при обновлении курсов валют:', error);
  }
}

//download database
updateRates();

setInterval(updateRates, 3600000);
