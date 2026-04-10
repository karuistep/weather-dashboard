import { useSearchParams } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import { mapCondition, mapHumidity, mapWind } from '../../domain/weather.rules';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { WeatherCard } from '../../components/weather/WeatherCard/WeatherCard';
import NoData from '../../components/NoData';

import styles from './SearchResult.module.scss';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const { data: weather, isLoading, isError } = useWeather(city || '');
  const uiWeather = weather && {
    ...weather,
    conditionKey: mapCondition(weather.conditionId),
    humidityKey: mapHumidity(weather.humidity),
    windKey: mapWind(weather.windSpeed ?? 0),
  };

  if (isLoading) return <div>Loading...</div>;
  if (!city || isError || !uiWeather) return <NoData />;

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles['weather-contents-row']}>
        <div className={styles['weather-card-container']}>
          <WeatherCard weather={uiWeather} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
