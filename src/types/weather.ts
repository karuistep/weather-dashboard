export interface Weather {
  city: string;
  country?: string;

  lat?: number;
  lon?: number;

  temperature: number;
  feelsLike: number;
  tempMin?: number;
  tempMax?: number;

  conditionId: number;
  condition: string;
  icon: string;

  humidity: number;
  pressure: number;
  seaLevelPressure?: number;
  groundLevelPressure?: number;

  windSpeed?: number;
  windDirection?: number;

  visibility?: number;
  cloudiness?: number;

  sunrise?: number;
  sunset?: number;

  localTime?: number;
  timezone?: number;

  stationId?: number;
  stationIndex?: number;
}

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility?: number;
  wind?: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds?: {
    all: number;
  };
  dt?: number;
  sys?: {
    type?: number;
    id?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}
