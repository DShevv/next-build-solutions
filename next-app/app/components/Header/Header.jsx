import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.title}>Адрес офиса:</div>
            <div className={styles.value}>
              РБ, г. Минск, <br /> ул. Ленина, 1
            </div>
          </div>
          <div className={styles.info}>
            <a href="tel:+375999999999" className={styles.title}>
              +375 99 999 99 99
            </a>
            <div className={styles.value}>пн – пт: с 09:00 до 18:00</div>
            <div className={styles.value}>сб – вс: с 10:00 до 16:00</div>
          </div>
          <Button secondary>Узнать стоимость</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
