import styles from './Select.module.css';

interface Props {
  label: string;
  data?: string[];
  selected: string;
  onChange: (value: string) => void;
}

const Select = ({ label, data, selected, onChange }: Props) => {
  return (
    <div>
      <label htmlFor="basic-select" className={styles.srOnly}>
        {label}
      </label>
      <select
        value={selected}
        className={styles.select}
        id="basic-select"
        onChange={e => onChange(e.target.value)}
      >
        {data &&
          data.map(value => (
            <option
              selected
              key={value}
              className={styles.option}
              value={value}
            >
              {value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
