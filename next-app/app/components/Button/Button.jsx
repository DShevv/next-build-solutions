import styles from "./Button.module.css";

const Button = ({ children, secondary, ...other }) => {
  return (
    <button
      className={
        secondary ? `${styles.button} ${styles.secondary}` : styles.button
      }
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
