// import Link from "next/link";
// import styles from "../ui/first.module.scss";
// import Button from "../components/button";

export default function Home() {
  return (
    <>
      <>
        <div className="container mx-auto mt-3">
          <h1 style={{ color: "white" }} className="text-4xl mt-3">
            Cinema Web
          </h1>
        </div>
        <br></br>

        <h2 className="text-2xl m-3">
          Cinema Web — твой личный кино-портал, где мечты о бесконечном
          киномарафоне становятся реальностью! 🎬
        </h2>
        <br></br>
        <ul>
          <li>
            ✨ Более 1000 фильмов в коллекции, доступных в потрясающем качестве
            4K — от культовой классики до новинок.
          </li>
          <li>
            🍿 Удобный поиск по жанру, рейтингу и году выпуска: найди именно то,
            что нужно, всего за пару кликов.
          </li>
          <li>
            🎥 Эксклюзивные подборки от кинокритиков и рекомендации на основе
            твоих предпочтений.
          </li>
          <li>
            📱 Смотри где угодно: на телевизоре, ноутбуке или смартфоне —
            синхронизация на всех устройствах.
          </li>
          <li>
            🌟 Еженедельные обновления: новые фильмы, трейлеры и интересные
            факты о киноиндустрии.
          </li>
        </ul>
        <br></br>
        <p>
          Cinema Web — это не просто сайт, это твой билет в мир кино, где каждый
          кадр — это эмоция, а каждый фильм — история. 🎟️✨
        </p>

        {/* <Link href="ru/pages/home" className={styles.button}>Русский</Link>
        <Link href="ru/pages/home" className={styles.button}>English</Link> */}

        {/* <Link to="/pages/home" className={styles.button}>
          Start watching
        </Link> подтвурдить*/}
      </>
    </>
  );
}
