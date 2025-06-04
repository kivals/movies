import SelectGroup from '@/components/SelectGroup/SelectGroup.tsx';

import styles from './Categories.module.css';
const Categories = () => {
  return (
    <div className={styles.container}>
      <SelectGroup />
    </div>
  );
};

export default Categories;
