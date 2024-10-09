import styles from "./Map.module.css";

const Map = () => {
  return (
    <section className={styles.map}>
      <iframe
        className={styles.frame}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d5fac2796320953fa8dfe4241e9a293ce0a0f2943581e52af226d907d089d03&amp;source=constructor"
        frameBorder="0"
      ></iframe>
    </section>
  );
};

export default Map;
