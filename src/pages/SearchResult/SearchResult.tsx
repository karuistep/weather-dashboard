import { useSearchParams } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { WeatherCard } from '../../components/weather/WeatherCard/WeatherCard';
import NoData from '../../components/NoData';

import styles from './SearchResult.module.scss';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const { data, isLoading, isError } = useWeather(city || '');

  if (isLoading) return <div>Loading...</div>;
  if (!city || isError || !data) return <NoData />;

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles['weather-contents-row']}>
        <div className={styles['weather-card-container']}>
          <WeatherCard weather={data} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
