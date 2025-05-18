import styles from './SearchInput.module.css';

const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder="Поиск..." />
    </div>
  );
};

export default SearchInput;
