import { useEffect } from 'react';
import { SearchBar } from '../../components/weather/SearchBar';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { mockWeahter } from '../../mocks/weatherMock';
import { fetchWeather } from '../../services/weatherApi';

export default function Home() {
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchWeather('Seoul');
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  return (
    <div>
      <SearchBar />
      <WeatherCard weather={mockWeahter} />
    </div>
  );
}
