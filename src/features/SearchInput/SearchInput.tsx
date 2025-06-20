import React, { useEffect, useState } from 'react';
import SearchIcon from '@/shared/assets/images/svg/search.svg?react';
import { useNavigate } from 'react-router';

import styles from './SearchInput.module.css';
import { useParams } from 'react-router-dom';

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { query } = useParams<{ query: string }>();

  useEffect(() => {
    if (!query) {
      setSearchQuery('');
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.length) {
      navigate('/search/' + e.currentTarget.value);
    }
  };

  const handleIconClick = () => {
    if (searchQuery.length) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск..."
        onKeyDown={handleKeyDown}
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <SearchIcon onClick={handleIconClick} className={styles.icon} />
    </div>
  );
};

export default SearchInput;
