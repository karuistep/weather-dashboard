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