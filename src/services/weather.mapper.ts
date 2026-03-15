import type { Weather, WeatherResponse } from '../types/weather';

export function mapWeatherResponseToWeather(res: WeatherResponse): Weather {
  return {
    city: res.name ?? 'Unknown',
    country: res.sys?.country,

    lat: res.coord.lat,
    lon: res.coord.lon,

    temperature: res.main.temp,
    feelsLike: res.main.feels_like,
    tempMin: res.main.temp_min,
    tempMax: res.main.temp_max,

    condition: res.weather[0].main,

    humidity: res.main.humidity,
    pressure: res.main.pressure,
    seaLevelPressure: res.main.sea_level,
    groundLevelPressure: res.main.grnd_level,

    windSpeed: res.wind?.speed,
    windDirection: res.wind?.deg,

    visibility: res.visibility,
    cloudiness: res.clouds?.all,

    sunrise: res.sys?.sunrise,
    sunset: res.sys?.sunset,

    localTime: res.dt,

    stationId: res.sys?.id,
    stationIndex: res.sys?.type,
  };
}
