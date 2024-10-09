"use client";
import { Field } from "formik";
import styles from "./Checkbox.module.css";

const Checkbox = ({ text, ...other }) => {
  return (
    <label className={styles.container}>
      <Field type="checkbox" className={styles.input} {...other} />
      <div className={styles.checkbox}>
        <svg
          className={styles.icon}
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1L6 12L1 7"
            stroke="#E97550"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {text && <div className={styles.text}>{text}</div>}
    </label>
  );
};

export default Checkbox;
