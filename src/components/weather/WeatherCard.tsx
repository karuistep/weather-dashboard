import type { Weather } from '../../types/weather';

type Props = {
  weather: Weather;
};

export function WeatherCard({ weather }: Props) {
  return (
    <div>
      <h2>{weather.city}</h2>
      <p>{weather.temperature}</p>
      <p>{weather.condition}</p>
      <p>Humidity: {weather.humidity}</p>
    </div>
  );
}
