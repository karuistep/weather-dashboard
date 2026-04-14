import axios from 'axios';
import { API_CONFIG } from '../../constants/api';
import type { WeatherResponse } from './weather.types';

const BASE_URL = API_CONFIG.BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export const fetchWeather = async (city: string): Promise<WeatherResponse> => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  });
  return res.data;
};
