import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./LandingPage.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const LandingPage = () => {
  return (
    <>
      <div
        className={styles.banner}
        style={{
          minHeight: "60vh",
        }}
      >
        <Swiper
          freeMode={true}
          loop={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m1.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m2.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m3.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m4.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m5.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m6.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m7.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m8.jpg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgSrc: "./img/m9.jpg" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default LandingPage;
