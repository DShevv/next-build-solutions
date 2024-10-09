import Link from "next/link";
import styles from "./LinkButton.module.css";

const LinkButton = ({ children, secondary, ...other }) => {
  return (
    <Link
      className={
        secondary ? `${styles.button} ${styles.secondary}` : styles.button
      }
      {...other}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
