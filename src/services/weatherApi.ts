import { API_CONFIG } from '../constants/api';

const BASE_URL = API_CONFIG.BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export async function fetchWeather(city: string) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`,
  );

  if (!res.ok) throw new Error('Failed to fetch');

  return res.json();
}
