import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import LinkButton from "../Links/LinkButton/LinkButton";
import Image from "next/image";
import phone from "../../assets/icons/phone.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.container}>
          <div className={`${styles.info} desktop`}>
            <div className={styles.title}>Адрес офиса:</div>
            <div className={styles.value}>
              РБ, г. Минск, <br /> ул. Ленина, 1
            </div>
          </div>
          <div className={styles.info}>
            <Link href="?modal=1" className={`${styles.title} mobile`}>
              <Image
                className={`${styles.phone} mobile`}
                src={phone}
                alt="Телефон"
              />
            </Link>
            <Link
              href="tel:+375999999999"
              className={`${styles.title} desktop`}
            >
              <span className="desktop">+375 99 999 99 99</span>
            </Link>
            <div className={styles.value}>пн – пт: с 09:00 до 18:00</div>
            <div className={styles.value}>сб – вс: с 10:00 до 16:00</div>
          </div>
          <LinkButton
            className={"desktop"}
            secondary
            href={{ query: { modal: "1" } }}
          >
            Узнать стоимость
          </LinkButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
