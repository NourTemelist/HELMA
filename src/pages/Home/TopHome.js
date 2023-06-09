import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Navigation } from 'swiper';
import 'swiper/swiper.css';
import React from 'react';
// import 'swiper/css';
// import 'swiper/swiper.min.css';
// import 'swiper/js/navigation';
// import 'swiper/js/pagination';

import 'swiper/swiper-bundle.min.css';





// import 'swiper/css/navigation';

// import "swiper/css/scrollbar";
import styles from "./TopHome.module.css";


// import "swiper/css/autoplay";
//import photos
import img6 from "./Assets/Product 6.jpg";
import img7 from "./Assets/Product 7.jpg";
import img8 from "./Assets/Product 8.jpg";
import img9 from "./Assets/Product 9.jpg";




function createSlide() {
  return (
    <SwiperSlide>
      <div className={styles["Top-home-container"]}>
        
        <img className={styles["image-design"]} src={img6} alt="photo du produit" />
        <div class={styles["Number"]}>01</div>
        <div class={styles["Number-of-photos"]}>/04</div>
        </div>
        
      
    </SwiperSlide>
  );
}
function createSlide2() {
  return (
    <SwiperSlide>
      <div className={styles["img"]}>
        <img className={styles["image-design"]} src={img7} alt="photo du produit" />
        <div class={styles["Number"]}>02</div>
        <div class={styles["Number-of-photos"]}>/04</div>
      </div>
    </SwiperSlide>
  );
}
function createSlide3() {
  return (
    <SwiperSlide>
      <div className={styles["img"]}>
        <img className={styles["image-design"]} src={img8} alt="photo du produit" />
        <div class={styles["Number"]}>03</div>
        <div class={styles["Number-of-photos"]}>/04</div>
      </div>
    </SwiperSlide>
  );
}
function createSlide4() {
  return (
    <SwiperSlide>
      <div>
        <div className={styles["img"]}>
          <img className={styles["image-design"]} src={img9} alt="photo du produit" />
          <div class={styles["Number"]}>04</div>
        <div class={styles["Number-of-photos"]}>/04</div>
        </div>
      </div>
    </SwiperSlide>
  );
}

function TopHome() {
  return (
    <div className={styles["top-home-design"]}>
      <Swiper
        modules={[ Pagination, Autoplay]}
        SlidesPerView={1}
        Navigation
       
        autoplay={ true }
        Pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide2()}
        {createSlide3()}
        {createSlide4()}
      </Swiper>
    </div>
  );
}
export default TopHome;
