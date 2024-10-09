"use client";

import styles from "./PhoneInput.module.css";
import InputMask from "react-input-mask";

const PhoneInput = ({ isError, ...other }) => {
  return (
    <InputMask
      className={`${styles.field} ${isError ? styles.error : ""}`}
      type="tel"
      {...other}
    ></InputMask>
  );
};

export default PhoneInput;
