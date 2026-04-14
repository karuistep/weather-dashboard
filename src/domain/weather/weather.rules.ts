export type WeatherConditionKey =
  | 'weather.clear'
  | 'weather.partlyCloudy'
  | 'weather.cloudy'
  | 'weather.thunderstorm'
  | 'weather.drizzle'
  | 'weather.rain'
  | 'weather.snow'
  | 'weather.fog'
  | 'weather.other';

export function mapCondition(id: number): WeatherConditionKey {
  if (id === 800) return 'weather.clear';

  if (id >= 801 && id <= 802) return 'weather.partlyCloudy';
  if (id >= 803 && id <= 804) return 'weather.cloudy';

  if (id >= 200 && id < 300) return 'weather.thunderstorm';
  if (id >= 300 && id < 400) return 'weather.drizzle';
  if (id >= 500 && id < 600) return 'weather.rain';
  if (id >= 600 && id < 700) return 'weather.snow';

  if (id >= 700 && id < 800) return 'weather.fog';

  return 'weather.other';
}

export function mapHumidity(humidity: number) {
  if (humidity < 30) return 'weather.humidity.dry';
  if (humidity < 60) return 'weather.humidity.comfortable';
  if (humidity < 80) return 'weather.humidity.humid';
  return 'weather.humidity.veryHumid';
}

export function mapWind(speed: number) {
  if (speed < 2) return 'weather.wind.light';
  if (speed < 6) return 'weather.wind.moderate';
  if (speed < 10) return 'weather.wind.strong';
  return 'weather.wind.veryStrong';
}

export function mapCloudiness(cloud: number) {
  if (cloud < 20) return 'weather.cloud.clear';
  if (cloud < 50) return 'weather.cloud.partlyCloudy';
  if (cloud < 80) return 'weather.cloud.cloudy';
  return 'weather.cloud.overcast';
}
