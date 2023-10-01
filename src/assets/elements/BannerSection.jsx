import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { NavLink as RouterLink } from "react-router-dom";
import home from "../images/imageHero.png";
import "./BannerSection.scss";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg"

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerSection() {
  const images = [
   banner1, banner2
  ];

  return (
    <div className="hero-section-main mb-3">
      <Swiper
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "22px",  
        }}
        breakpoints={{
          399: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        modules={[Navigation, Pagination]}
        className="home-swiper"
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <RouterLink className="hero-main">
              <div className="hero-section row">
                <div className="col-12 col-lg-8 hero-img">
                  <img alt="" src={imageSrc} />
                </div>
                <div className="hero-content col-12 col-lg-4">
                  <h4>Get Latest Abaya, Jilbab and kids Abaya</h4>
                  <button className="shop-now">See Products</button>
                </div>
              </div>
            </RouterLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
