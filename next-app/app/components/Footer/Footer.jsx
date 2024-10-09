import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <Logo />
          <div className={styles.copyright}>
            © 2024 ООО “Строительные решения”
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.title}>Адрес офиса:</div>
          <div className={styles.value}>
            РБ, г. Минск, <br className="desktop" /> ул. Ленина, 1
          </div>
          <div className={styles.value}>пн – пт: с 09:00 до 18:00</div>
          <div className={styles.value}>сб – вс: с 10:00 до 16:00</div>
        </div>

        <div>
          <div className={styles.law}>
            ООО “Строительные решения” <br className="mobile" /> Юридический
            адрес: <br />
            РБ, г. Минск, ул. Ленина, 1 <br />
            УНП: 111111111
          </div>
          <div className={styles.dev}>
            Разработка сайта:
            <Link href="https://Web-space.by" target="_blank">
              Web-space.by
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
