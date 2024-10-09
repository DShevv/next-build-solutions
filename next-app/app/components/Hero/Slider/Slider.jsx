"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./Slider.module.css";
import Button from "../../Button/Button";

import "swiper/css";
import LinkButton from "../../Links/LinkButton/LinkButton";

const Slider = () => {
  const pagination = {
    el: ".pagination",
    bulletClass: "bullet",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <Swiper
      className={styles.slider}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
    >
      <SwiperSlide>
        <h1 className={styles.title}>
          Создадим ваш идеальный дом в установленные сроки и с 10-летней
          гарантией
        </h1>
        <h2 className={styles.subtitle}>
          Без головной боли и отклонений от сметы строительства
        </h2>
        <LinkButton href={{ query: { modal: "1" } }}>
          Узнать стоимость
        </LinkButton>
      </SwiperSlide>
      <SwiperSlide>
        <h2 className={styles.title}>
          Мы создаем надежные и современные дома для вашего уютного проживания
        </h2>
        <h3 className={styles.subtitle}>
          В своей работе мы применяем современные технологии
          и специализированное строительное оборудование
        </h3>
        <LinkButton href={{ query: { modal: "1" } }}>
          Узнать стоимость
        </LinkButton>
      </SwiperSlide>
      <SwiperSlide>
        <h2 className={styles.title}>
          В нашей команде работают квалифицированные сотрудники с опытом работы
          от 5 лет
        </h2>
        <h3 className={styles.subtitle}>
          Мы оперативно выполняем весь спектр строительных работ
        </h3>
        <LinkButton href={{ query: { modal: "1" } }}>
          Узнать стоимость
        </LinkButton>
      </SwiperSlide>
      <div className="pagination"></div>
    </Swiper>
  );
};

export default Slider;
