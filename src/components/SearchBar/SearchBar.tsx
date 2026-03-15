import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [city, setCity] = useState<string>('');
  const navigate = useNavigate();

  const onSearch = () => {
    if (!city) return;
    navigate(`/search?city=${city}`);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        placeholder="Enter city name or zip code to run a new search..."
      />
      <button className={styles.searchButton} onClick={onSearch}>
        Update Dashboard
      </button>
    </div>
  );
};

export { SearchBar };
