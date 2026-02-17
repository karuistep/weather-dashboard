import { SearchBar } from '../../components/weather/SearchBar';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { mockWeahter } from '../../mocks/weatherMock';

export default function Home() {
  return (
    <div>
      <SearchBar />
      <WeatherCard weather={mockWeahter} />
    </div>
  );
}
