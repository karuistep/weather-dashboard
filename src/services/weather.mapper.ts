import type { Weather, WeatherResponse } from '../types/weather';

export function mapWeatherResponseToWeather(
  response: WeatherResponse,
): Weather {
  return {
    city: response.name || 'Unknown',
    temperature: response.main.temp,
    condition: response.weather[0].main,
    humidity: response.main.humidity,
  };
}
