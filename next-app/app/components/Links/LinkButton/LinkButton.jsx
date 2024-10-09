import Link from "next/link";
import styles from "./LinkButton.module.css";

const LinkButton = ({ children, className, secondary, ...other }) => {
  return (
    <Link
      className={
        secondary
          ? `${styles.button} ${styles.secondary} ${className}`
          : `${styles.button} ${className}`
      }
      {...other}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
