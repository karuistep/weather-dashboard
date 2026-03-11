import { useSearchParams } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import NoData from '../../components/NoData';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const { data, isLoading, isError } = useWeather(city || '');

  if (isLoading) return <div>Loading...</div>;
  if (!city || isError || !data) return <NoData />;

  return <div>Search Result for {data.city}</div>;
};

export default SearchResult;
