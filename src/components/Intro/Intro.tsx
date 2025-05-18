import styles from './Intro.module.css';

import intro from '@/assets/images/intro.png';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <h2 className={styles.title}>Уже в кино</h2>
        <p className={styles.subtitle}>Чужой: Ромул (2024)</p>
        <p className={styles.description}>
          Исследуя заброшенную космическую станцию, группа колонизаторов
          сталкивается с самой ужасающей формой жизни во Вселенной.
        </p>

        <button className={styles.button}>Смотреть</button>
      </div>
      <div className={styles.imageContent}>
        <div className={styles.wrapper}>
          <img className={styles.image} src={intro} alt="Афиша" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
