import Image from "next/image";
import house from "../../assets/icons/logo.svg";
import styles from "./Logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className={styles.logo} href="#">
      <Image
        src={house}
        alt="Логотип"
        className={styles.image}
        placeholder="empty"
        priority={true}
      />
      <div className={styles.caption}>
        <div className={styles.title}>Строительные решения</div>
        <div className={styles.subtitle}>строительная компания</div>
      </div>
    </Link>
  );
};

export default Logo;
