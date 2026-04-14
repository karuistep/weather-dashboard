import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../services/weather/weatherApi';
import { mapWeatherResponseToWeather } from '../domain/weather/weather.mapper';

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
