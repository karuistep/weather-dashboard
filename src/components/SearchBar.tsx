import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [city, setCity] = useState<string>('');
  const navigate = useNavigate();

  const onSearch = () => {
    if (!city) return;
    navigate(`/search?city=${city}`);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export { SearchBar };
