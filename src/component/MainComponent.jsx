import { useEffect, useState } from 'react';
import React from 'react';
import {Link}  from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Mousewheel } from "swiper";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Mousewheel ])

export default function MainComponent () {

    const swiperOptions = {
      effect: 'coverflow',
      loop: true,
      slidesPerView: 2,
      centeredSlides: true,
      mousewheel: true,
      speed: 1000
    };
      
  return (
    <main id="main">
        <section id="section1">
          <div class="swiper-container">
            <Swiper
              {...swiperOptions}
              pagination={{
                type: "progressbar",
              }}
              navigation={{
                prevEl: '.swiper-prev-btn',
                nextEl: '.swiper-next-btn'
              }}
            > 
              <SwiperSlide>
                <img src="./img/main/sec01/sam-spiderman3.PNG" alt="" />
                <Link to='/spiderman1'>
                  <button className='movie-btn'>
                    <span>Click to Movie</span>
                  </button>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/sec01/amazing-spiderman-main.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/sec01/tom-spicerman-photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/sec01/miles.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/sec01/venom.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
            <button className="swiper-prev-btn">
              <img src="./img/main/sec01/prev-btn.png" alt="" />
            </button>
            <button className="swiper-next-btn">
              <img src="./img/main/sec01/prev-btn.png" alt="" />
            </button>
            <div className="swiper-pagination"></div>
          </div>
        </section>
    </main>
  );
};
