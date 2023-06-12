import { useEffect, useState } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination])

export default function MainComponent () {

    const [scroll, setScrool] = useState(0);

    const onScroll=()=>{  
      setScrool(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect (()=>{
        window.addEventListener("scroll", onScroll);
        window.scrollTo(0, 0);
      },[])
      
  return (
    <main id="main">
        <section id="section1">
          <div class="swiper-container">
            <Swiper

            > 
            <SwiperSlide><img src="./img/main/sec01/465ba2b955bd02ddb6986099399d5dc3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/main/sec01/37f93f9e16f82bb31c31ab5ea4b312fb.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/main/sec01/1444ef36a54dd43a4269b6de3efd4365.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/main/sec01/slide1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/main/sec01/465ba2b955bd02ddb6986099399d5dc3.jpg" alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section id="section2" class="sec-0206">
            <div class="container"> 
                <h2 class="title">sam-spider-man</h2>
                <span class="bottom-title">
                    <em>Tobey Maguire</em>
                    {/* <i><!-- 장식 (밑줄) --></i> */}
                </span>
            </div>
        </section>
        <section id="section3" class="sec-0206">
            <div class="container"> 
                <h2 class="title">amazing-spider-man</h2>
                <span class="bottom-title">
                    <em>Andrew Garfield</em>
                    {/* <i><!-- 장식 (밑줄) --></i> */}
                </span>
            </div>
        </section>
        <section id="section4" class="sec-0206">
            <div class="container"> 
                <h2 class="title">tom-spider-man</h2>
                <span class="bottom-title">
                    <em>Tom Holland</em>
                    {/* <i><!-- 장식 (밑줄) --></i> */}
                </span>
            </div>
        </section>
        <section id="section5" class="sec-0206" >
            <div class="container"> 
                <h2 class="title">miles-morales</h2>
                <span class="bottom-title">
                    <em>Tom Hardy</em>
                    {/* <i><!-- 장식 (밑줄) --></i> */}
                </span>
            </div>
        </section>
        <section id="section6" class="sec-0206" >
            <div class="container"> 
                <h2 class="title">the-venom</h2>
                <span class="bottom-title">
                    <em>Tom Hardy</em>
                    {/* <i><!-- 장식 (밑줄) --></i> */}
                </span>
            </div>
        </section>
        <section id="section7" class="sec-0711">
            {/* <!-- 가상 자식 요소 container이랑 형제 요소로 만든다 before 안에 배경이미지, 필터링 효과 --> */}
            <div class="container">
                <div class="title">
                    <h2>03</h2>
                    <div>
                        <h3>May 2002</h3>
                        {/* <i><!-- 장식(밑줄) --></i> */}
                    </div>
                </div>
                <div class="content">
                    <p><a href="./sam_spicer_man_music_video.html">"With great power comes great responsibility."</a></p>
                    <strong>POSTED BY JUNGHO</strong>
                </div>
            </div>
        </section>
        <section id="section8" class="sec-0711">
            <div class="container">
                <div class="title">
                    <h2>28</h2>
                    <div>
                        <h3>June 2012</h3>
                        {/* <i><!-- 장식(밑줄) --></i> */}
                    </div>
                </div>
                <div class="content">
                    <p><a href="amazing_spider_man_music_video.html" target="_blank">"I have to stop it. It's a monster <br/> I made..."</a></p>
                    <strong>POSTED BY JUNGHO</strong>
                </div>
            </div>
        </section>
        <section id="section9" class="sec-0711">
            <div class="container">
                <div class="title">
                    <h2>05</h2>
                    <div>
                        <h3>July 2017</h3>
                        {/* <i><!-- 장식(밑줄) --></i> */}
                    </div>
                </div>
                <div class="content">
                    <p><a href="./tom_spicer_man_music_video.html">"Come on, Peter Tingle!"</a></p>
                    <strong>POSTED BY JUNGHO</strong>
                </div>
            </div>
        </section>
        <section id="section10" class="sec-0711">
            <div class="container">
                <div class="title">
                    <h2>12</h2>
                    <div>
                        <h3>December 2018</h3>
                        {/* <i><!-- 장식(밑줄) --></i> */}
                    </div>
                </div>
                <div class="content">
                    <p><a href="./tom_spicer_man_music_video.html">"Come on, Peter Tingle!"</a></p>
                    <strong>POSTED BY JUNGHO</strong>
                </div>
            </div>
        </section>
        <section id="section11" class="sec-0711">
            <div class="container">
                <div class="title">
                    <h2>03</h2>
                    <div>
                        <h3>October 2018</h3>
                        {/* <i><!-- 장식(밑줄) --></i> */}
                    </div>
                </div>
                <div class="content">
                    <p><a href="./venom_music_video.html" target="_blank">"Eyes Lungs Pancreas So many snacks, so little time!"</a></p>
                    <i></i>
                    <strong>POSTED BY JUNGHO</strong>
                </div>
            </div>
        </section>  
    </main>
  );
};
