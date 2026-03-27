import type { Weather } from '../../../types/weather';
import MapPinIcon from '@/assets/Icon/lucide-MapPin-Outlined.svg?react';
import MapIcon from '@/assets/Icon/lucide-Map-Outlined.svg?react';
import ExternalLinkIcon from '@/assets/Icon/lucide-ExternalLink-Outlined.svg?react';
import TempIcon from '../../../assets/Visily-Export-to-Image-cloud-sun-2026-03-20.png';
import ThermometerIcon from '../../../assets/Icon/lucide-Thermometer-Outlined.svg?react';

import styles from './WeatherCard.module.scss';

type Props = {
  weather: Weather;
};

export function WeatherCard({ weather }: Props) {
  console.log('WeatherCard rendered with:', weather);
  return (
    <div className={styles.card}>
      <div className={styles['body-left']}>
        {/* header(city, country, location) */}
        <div className={styles['card-header']}>
          <div className={styles['title-container']}>
            <div className={styles['city-icon-container']}>
              <MapPinIcon />
            </div>
            <span
              className={styles['city-name']}
            >{`${weather.city}, ${weather.country}`}</span>
          </div>
          <div className={styles['subtitle-container']}>
            <div className={styles['location-container']}>
              <MapIcon width={16} height={16} />
              <span
                className={styles['location-text']}
              >{`${weather.lat}, ${weather.lon}`}</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles['satellite-container']}>
              <span className={styles['satellite-text']}>SATELLITE MAP</span>
              <ExternalLinkIcon width={16} height={16} />
            </div>
          </div>
        </div>

        {/* body(temperature, feels like, high&low condition) */}
        <div className={styles['card-body']}>
          <div className={styles['temperature-container']}>
            <span className={styles['temperature-text']}>
              {weather.temperature}°
            </span>
            <span className={styles['unit-text']}>CELCIUS</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles['temperature-container']}>
            <div className={styles['feelslike-minmax']}>
              <div className={styles['feelslike-container']}>
                <ThermometerIcon width={11} height={11} />
                <div className={styles['feelslike-text']}>
                  {`FEELS\nLIKE\n${weather.feelsLike}°`}
                </div>
              </div>
              <div className={styles['minmax-container']}>
                <span
                  className={styles['temp-text-max']}
                >{`H: ${weather.tempMax}°`}</span>
                <span
                  className={styles['temp-text-min']}
                >{`•L: ${weather.tempMin}°`}</span>
              </div>
            </div>
          </div>
        </div>

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
