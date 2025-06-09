import { prepareUserRating } from '@/shared/utils/user-rating.ts';
import { Link } from 'react-router';
import BackArrow from '@/assets/images/svg/back-arrow.svg?react';

import styles from './MoviePage.module.css';

const movie = {
  id: 7583632,
  externalId: {
    kpHD: 'd6b150572c44433daa719f0675090e64',
  },
  name: 'Инспектор Гаврилов. Фильм о фильме',
  alternativeName: null,
  enName: null,
  type: 'movie',
  typeNumber: 1,
  year: 2025,
  description:
    'Актёры и авторы «Инспектора Гаврилова» открывают секреты своей работы. Денис Власенко рассказывает, почему считает Виктора Добронравова скуфом. Екатерина Стулова делится впечатлением о драке и ударе бейсбольной битой, а Виктория Заболотная признаётся, удалось ли ей влиться в уже сложившийся коллектив.',
  shortDescription:
    'Актеры и авторы — о самых опасных и курьезных моментах на съемочной площадке. Док о создании хитовой комедии ',
  slogan: null,
  status: null,
  rating: {
    kp: '8.239',
    imdb: 0,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: null,
  },
  votes: {
    kp: 1876,
    imdb: 0,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: 0,
  },
  movieLength: null,
  totalSeriesLength: null,
  seriesLength: null,
  ratingMpaa: null,
  ageRating: 18,
  poster: {
    url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/e9a5ac24-be84-428b-bdc4-047f2da1dcd5/orig',
    previewUrl:
      'https://image.openmoviedb.com/kinopoisk-images/1898899/e9a5ac24-be84-428b-bdc4-047f2da1dcd5/x1000',
  },
  backdrop: {
    url: 'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000019614c1a969f62531a1f1489edcf7/orig',
    previewUrl:
      'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000019614c1a969f62531a1f1489edcf7/x1000',
  },
  genres: [
    {
      name: 'документальный',
    },
    {
      name: 'ужастик',
    },
  ],
  countries: [
    {
      name: 'Россия',
    },
    {
      name: 'Япония',
    },
  ],
  persons: [
    {
      id: 558097,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_558097.jpg',
      name: 'Виктор Добронравов',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 604331,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_604331.jpg',
      name: 'Екатерина Стулова',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 2872913,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2872913.jpg',
      name: 'Виктория Заболотная',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1621807,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1621807.jpg',
      name: 'Алексей Демидов',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 4929046,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4929046.jpg',
      name: 'Денис Власенко',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 4301554,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4301554.jpg',
      name: 'Олег Прокопьев',
      enName: null,
      description: null,
      profession: 'операторы',
      enProfession: 'operator',
    },
    {
      id: 10216233,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10216233.jpg',
      name: 'Роман Быченков',
      enName: null,
      description: null,
      profession: 'операторы',
      enProfession: 'operator',
    },
    {
      id: 4250542,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4250542.jpg',
      name: 'Дарико Цулая',
      enName: null,
      description: null,
      profession: 'продюсеры',
      enProfession: 'producer',
    },
    {
      id: 10216251,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10216251.jpg',
      name: 'Юлия Кобрикова',
      enName: null,
      description: null,
      profession: 'сценаристы',
      enProfession: 'writer',
    },
    {
      id: 3691445,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3691445.jpg',
      name: 'Омар Алибутаев',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 7049458,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7049458.jpg',
      name: 'Валерий Борисов',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 7058699,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7058699.jpg',
      name: 'Алиса Стасюк',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 2275013,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2275013.jpg',
      name: 'Наталья Земцова',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 4251889,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4251889.jpg',
      name: 'Артем Бурко',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 2857151,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2857151.jpg',
      name: 'Аслан Сокуров',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 5987672,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5987672.jpg',
      name: 'Анатолий Колиев',
      enName: null,
      description: null,
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 10186887,
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10186887.jpg',
      name: 'Мария Попова',
      enName: null,
      description: null,
      profession: 'продюсеры',
      enProfession: 'producer',
    },
  ],
  premiere: {
    world: null,
    russia: null,
    digital: null,
    cinema: null,
    bluray: null,
    dvd: null,
  },
  top10: null,
  top250: null,
  isSeries: false,
  ticketsOnSale: false,
  lists: ['hd'],
  createdAt: '2025-04-08T20:47:43.081Z',
  updatedAt: '2025-06-08T22:04:31.748Z',
  watchability: {
    items: [
      {
        name: 'Kinopoisk HD',
        logo: {
          url: 'https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/apple-touch-icon-180x180.png',
        },
        url: 'https://hd.kinopoisk.ru/?rt=d6b150572c44433daa719f0675090e64',
      },
    ],
  },
  userRatingsParsed: true,
  keywordsParsed: true,
  studioParsed: true,
};

const MoviePage = () => {
  //const { movieId } = useParams<{ movieId: string }>();

  //const { data: movie } = useGetMovieByIdQuery(movieId ?? '');
  return (
    <>
      <div className={styles.back}>
        <Link className={styles.link} to="/">
          <BackArrow /> Вернуться на главную
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={movie.poster.url} alt="" />
        </div>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>{movie.name}</h1>
          </div>
          <p className={styles.description}>{movie.description}</p>
          <div className={styles.about}>
            <h2>О фильме</h2>
            <div className={styles.info}>
              <div>Жанр:</div>
              <div>
                {movie.genres.map(genre => genre?.name ?? '').join(', ')}
              </div>
              <div>Страна:</div>
              <div>
                {movie.countries.map(country => country?.name ?? '').join(', ')}
              </div>
              <div>Год:</div>
              <div>{movie.year}</div>
              <div>Режиссер:</div>
              <div>
                {movie.persons
                  .filter(({ enProfession }) => enProfession === 'director')
                  .map(person => person.name)
                  .join(', ') || ' - '}
              </div>
              <div>В ролях:</div>
              <div>
                {movie.persons
                  .filter(({ enProfession }) => enProfession === 'actor')
                  .map(person => person.name)
                  .join(', ') || ' - '}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          Кинопоиск
          <span> {prepareUserRating(movie.rating.kp)}</span>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
