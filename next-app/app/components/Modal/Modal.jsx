"use client";
import Image from "next/image";
import styles from "./Modal.module.css";
import pic from "../../assets/img/popup-image.png";
import { Form, Formik } from "formik";
import PhoneInput from "../Inputs/PhoneInput/PhoneInput";
import CommentInput from "../Inputs/CommentInput/CommentInput";
import Checkbox from "../Inputs/Checkbox/Checkbox";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import api from "@/app/http";
import Loader from "../Loader/Loader";
import validateFeedback from "@/app/assets/utils/validateFeedback";

const Modal = ({ ...other }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const modal = searchParams.get("modal");
  const [status, setStatus] = useState("idle");

  const closeModal = () => {
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.delete("modal");

    router.replace(`${pathname}?${nextSearchParams}`);
  };

  return (
    <div className={`${styles.wrapper} ${styles.active}`} onClick={closeModal}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image src={pic} className={styles.image} alt="Интерьер дома" />

        <Formik
          initialValues={{
            phone: "",
            comment: "",
            isAgree: false,
          }}
          validate={validateFeedback}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values, { resetForm }) => {
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
                  resetForm();
                  closeModal();
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
              <Form className={styles.form}>
                <h2 className={styles.title}>Обратный звонок</h2>
                <h3 className={styles.subtitle}>
                  Заполните форму ниже, и наш специалист свяжется с вами
                  в ближайшее время.
                </h3>

                <div className={styles.name}>
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

                <div className={styles.name}>Комментарий</div>
                <CommentInput
                  name="comment"
                  placeholder="Ваш комментарий"
                  type="text"
                />

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
        <button className={styles.close} onClick={closeModal}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#FBFDFD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#FBFDFD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
