import Image from "next/image";
import styles from "./Privileges.module.css";
import barn from "../../../assets/img/barnhouse.png";
import town from "../../../assets/img/townhouse.png";
import MoreLink from "../../Links/MoreLink/MoreLink";

const Privileges = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>
          Оформление рассрочки по ставке от 15% годовых
        </div>
        <MoreLink href="#">Подробнее</MoreLink>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Барнхаусы</div>
        <Image className={styles.image} src={barn} alt="Барнхаусы" />
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Таунхаусы</div>
        <Image className={styles.image} src={town} alt="Таунхаусы" />
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          Скидка до 5% при полной предоплате за проект
        </div>
        <MoreLink href="#">Подробнее</MoreLink>
      </div>
    </div>
  );
};

export default Privileges;
