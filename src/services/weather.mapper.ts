import type { Weather, WeatherResponse } from '../types/weather';

export function mapWeatherResponseToWeather(
  response: WeatherResponse,
): Weather {
  return {
    city: response.name || 'Unknown',
    temperature: response.main.temp,
    condition: response.weather[0].main,
    humidity: response.main.humidity,

    feelsLike: response.main.feels_like,
    windSpeed: response.wind?.speed,
    pressure: response.main.pressure,
    visibility: response.visibility,
    cloudiness: response.clouds?.all,

    sunrise: response.sys?.sunrise,
    sunset: response.sys?.sunset,
  };
}
