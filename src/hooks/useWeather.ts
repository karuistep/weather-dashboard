import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../services/weatherApi';
import { mapWeatherResponseToWeather } from '../services/weather.mapper';

export function useWeather(city: string) {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      const res = await fetchWeather(city);
      return mapWeatherResponseToWeather(res);
    },
    enabled: !!city,
  });
}
