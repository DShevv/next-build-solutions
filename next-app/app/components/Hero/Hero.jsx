import styles from "./Hero.module.css";
import Privileges from "./Privileges/Privileges";
import Slider from "./Slider/Slider";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <Slider />
        <Privileges />
      </div>
    </section>
  );
};

export default Hero;
