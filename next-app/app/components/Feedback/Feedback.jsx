"use client";

import Image from "next/image";
import styles from "./Feedback.module.css";
import picture from "../../assets/img/form-image.png";
import { Form, Formik } from "formik";
import PhoneInput from "../Inputs/PhoneInput/PhoneInput";
import CommentInput from "../Inputs/CommentInput/CommentInput";
import Checkbox from "../Inputs/Checkbox/Checkbox";
import Button from "../Button/Button";

const Feedback = () => {
  return (
    <section className={styles.container}>
      <Image src={picture} alt="Интерьер дома" />
      <Formik
        initialValues={{
          phone: "",
          comment: "",
          isAgree: false,
        }}
      >
        {(formik) => {
          const { values, setFieldValue } = formik;
          console.log(values);
          return (
            <Form>
              <h2 className={styles.title}>Остались вопросы?</h2>
              <h3 className={styles.subtitle}>
                Заполните форму ниже, и наш специалист свяжется с вами
                в ближайшее время.
              </h3>

              <div className={styles.row}>
                <div className={styles.rowTitle}>
                  Телефон
                  <span>*</span>
                </div>
                <PhoneInput
                  name="phone"
                  placeholder="+375 (99) 999-99-99"
                  mask="+375 (99) 999-99-99"
                  onChange={(e) => {
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/ /g, "");
                    setFieldValue("phone", value);
                  }}
                />
              </div>
              <div className={styles.row}>
                <div className={styles.rowTitle}>Комментарий</div>
                <CommentInput
                  name="comment"
                  placeholder="Ваш комментарий"
                  type="text"
                />
              </div>
              <div className={styles.controls}>
                <Checkbox
                  name="isAgree"
                  text="Согласие на обработку персональных данных"
                />
                <Button type="submit">Отправить</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default Feedback;
