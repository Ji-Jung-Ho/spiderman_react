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
                <img src="./img/main/spiderman-main.jpg" alt="" />
                <div className='slide-content'>
                  <div className="movie-info">
                    <h2>spider-man</h2>
                    <p>
                      Starring : Tobey Maguire
                      <br/>
                      Director : Sam Raimi
                    </p>
                    <p>After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.</p>
                    </div>
                  <Link to='/sam'>
                    <button className='movie-btn'>
                      <span>More-Movie</span>
                      <img src="./img/main/link-arrow.png" alt="" />
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/amazing-spiderman-main.jpg" alt="" />
                <div className='slide-content'>
                  <div className="movie-info">
                    <h2>The Amazing Spider-Man</h2>
                    <p>
                      Starring : Andrew Garfield
                      <br/>
                      Director : Marc Webb
                    </p>
                    <p>After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.</p>
                  </div>
                  <Link to='/amazing'>
                  <button className='movie-btn'>
                    <span>More-Movie</span>
                    <img src="./img/main/link-arrow.png" alt="" />
                  </button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/new-spiderman-main.jpg" alt="" />
                <div className='slide-content'>
                  <div className="movie-info">
                    <h2>Spider-Man: Homecoming</h2>
                    <p>
                      Starring : Tom Holland
                      <br/>
                      Director : Jon Watts
                    </p>
                    <p>Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.</p>
                  </div>
                  <Link to='/tom'>
                  <button className='movie-btn'>
                    <span>More-Movie</span>
                    <img src="./img/main/link-arrow.png" alt="" />
                  </button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/miles-main.jpg" alt="" />
                <div className='slide-content'>
                  <div className="movie-info">
                    <h2>Spider-Man <br /> : Into the Spider-Verse</h2>
                    <p>
                      Starring : Jake Johnson (Miles Morales)
                      <br/>
                      Director : Bob Persichetti, Peter Ramsey, Rodney Rothman
                    </p>
                    <p>Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.</p>
                  </div>
                  <Link to='/miles'>
                  <button className='movie-btn'>
                    <span>More-Movie</span>
                    <img src="./img/main/link-arrow.png" alt="" />
                  </button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/venom-main.jpg" alt="" />
                <div className='slide-content'>
                  <div className="movie-info">
                    <h2>The Venom</h2>
                    <p>
                      Starring : Tom Hardy
                      <br/>
                      Director : Ruben Fleischer
                    </p>
                    <p>A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.</p>
                  </div>
                  <Link to='/venom'>
                  <button className='movie-btn'>
                    <span>More-Movie</span>
                    <img src="./img/main/link-arrow.png" alt="" />
                  </button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/main/goods.jpg" alt="" />
                <div className='slide-content'>
                  <div className="movie-info">
                    <h2>Spider-Man Goods</h2>
                    <p>
                      Starring : All Spider-Man, Venom
                      <br/>
                      Director : Ji-Jung-Ho
                    </p>
                    <p>All Spider-Man and Venom figures, various spiderman movie posters are available for purchase.</p>
                  </div>
                  <Link to='/goods'>
                  <button className='movie-btn goods-btn'>
                    <span>More-Goods</span>
                    <img src="./img/main/link-arrow.png" alt="" />
                  </button>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="swiper-prev-btn">
              <img src="./img/main/prev-btn.png" alt="" />
            </button>
            <button className="swiper-next-btn">
              <img src="./img/main/prev-btn.png" alt="" />
            </button>
            <div className="swiper-pagination"></div>
          </div>
        </section>
    </main>
  );
};