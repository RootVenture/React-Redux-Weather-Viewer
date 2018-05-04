import axios from 'axios';

const API_KEY = 'e4863f20cede34669ee15d3f80734456';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// action types
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creators
export function fetchWeather(city) {
  // make static country code
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // pass the request promise as payload
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
