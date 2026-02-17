import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/weather/SearchBar';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { mockWeahter } from '../../mocks/weatherMock';
import { fetchWeather } from '../../services/weatherApi';
import { mapWeatherResponseToWeather } from '../../services/weather.mapper';
import type { Weather } from '../../types/weather';

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    async function load() {
      const raw = await fetchWeather('Seoul');
      console.log(raw);

      const mapped = mapWeatherResponseToWeather(raw);
      console.log(mapped);
      setWeather(mapped);
    }

    load();
  }, []);

  return (
    <div>
      <SearchBar />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
