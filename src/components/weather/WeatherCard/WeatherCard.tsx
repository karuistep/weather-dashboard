import type { Weather } from '../../../types/weather';

import TempIcon from '../../../assets/Visily-Export-to-Image-cloud-sun-2026-03-20.png';
import styles from './WeatherCard.module.scss';

type Props = {
  weather: Weather;
};

export function WeatherCard({ weather }: Props) {
  console.log('WeatherCard rendered with:', weather);
  return (
    <div className={styles.card}>
      <div className={styles['body-left']}>
        <div className={styles['card-header']}>1</div>
        <div className={styles['card-body']}>2</div>
        <div className={styles['card-footer']}>3</div>
      </div>
      <div className={styles['body-right']}>
        <div className={styles['local-station-time-container']}>
          <img src={TempIcon} alt="Temperature Icon" />
          <span className={styles['local-station-time-label']}>
            LOCAL STATION TIME
          </span>
          <span>{weather.localTime}</span>
        </div>
      </div>
    </div>
  );
}
