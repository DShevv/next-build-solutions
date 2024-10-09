"use client";

import Image from "next/image";
import styles from "./Feedback.module.css";
import picture from "../../assets/img/form-image.png";
import { Form, Formik } from "formik";
import PhoneInput from "../Inputs/PhoneInput/PhoneInput";
import CommentInput from "../Inputs/CommentInput/CommentInput";
import Checkbox from "../Inputs/Checkbox/Checkbox";
import Button from "../Button/Button";
import { useState } from "react";
import Loader from "../Loader/Loader";
import api from "@/app/http";
import validateFeedback from "@/app/assets/utils/validateFeedback";

const Feedback = () => {
  const [status, setStatus] = useState("idle");

  return (
    <section className={styles.container}>
      <Image src={picture} className={styles.image} alt="Интерьер дома" />
      <Formik
        initialValues={{
          phone: "",
          comment: "",
          isAgree: false,
        }}
        validate={validateFeedback}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values) => {
          setStatus("loading");
          const res = await api.post("http://89.22.234.225:3005/feedback", {
            phone: values.phone,
            comment: values.comment,
          });

          if (res?.status === 200) {
            setTimeout(() => {
              setStatus("success");
              setTimeout(() => {
                setStatus("idle");
              }, 2000);
            }, 2000);

            return;
          }

          setStatus("idle");
        }}
      >
        {(formik) => {
          const { values, errors, setFieldValue } = formik;
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
                  isError={errors.phone ? 1 : 0}
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
                <Button type="submit" disabled={!values.isAgree}>
                  {status === "loading" ? (
                    <Loader />
                  ) : status === "success" ? (
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L6 12L1 7"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    "Отправить"
                  )}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default Feedback;
