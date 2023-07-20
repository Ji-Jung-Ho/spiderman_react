import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spiderman1Component from './Spiderman1Component';
import Spiderman2Component from './Spiderman2Component';
import Spiderman3Component from './Spiderman3Component';

export default function SamSpiderManMainComponent() {
  const [isSpiderMan1, setIsSpiderMan1] = useState(true);
  const [isSpiderMan2, setIsSpiderMan2] = useState(false);
  const [isSpiderMan3, setIsSpiderMan3] = useState(false);
  
  
  const onClickSpiderMan1Menu = () => {
    setIsSpiderMan1(true);
    setIsSpiderMan2(false);
    setIsSpiderMan3(false);
  };

  const onClickSpiderMan2Menu = () => {
    setIsSpiderMan1(false);
    setIsSpiderMan2(true);
    setIsSpiderMan3(false);
  };

  const onClickSpiderMan3Menu = () => {
    setIsSpiderMan1(false);
    setIsSpiderMan2(false);
    setIsSpiderMan3(true);
  };

  const spidermanLink = {
    spiderman1_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man/4q3uPuyBeCkw',
      label: 'Go To Spider-Man1 Movie in disney+',
    },
    spiderman2_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/pokember-2/1CNlLz5NUKU6',
      label: 'Go To Spider-Man2 Movie in disney+',
    },
    spiderman3_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man-3/4GJkhwLlLW4D',
      label: 'Go To Spider-Man3 Movie in disney+',
    },
  };

  const samSrc = "./img/spiderman_movie_img/sam-spiderman/"
  const imgSrc = "./img/spiderman_movie_img/";

  const onClickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className="section1">
        <div className="sec1-container">
          <Link 
          to={`${isSpiderMan1 ? spidermanLink.spiderman1_Disney.url : isSpiderMan2 ? spidermanLink.spiderman2_Disney.url : isSpiderMan3 ? spidermanLink.spiderman3_Disney.url : ''}`} 
          target="_blink"
          >
            <div className="sec1-content">
              <span>Available right now on Disney+.</span>
              <img src={`${imgSrc}/disneybtn_asset2x_6.png`} alt="" />
            </div>
          </Link>
        </div>
      </section>
      <section className='section2'>
        <div className='sub-title'>
          <ul>
            <li>
              <button className="movie-choice" onClick={onClickSpiderMan1Menu}>
                <span className={`sub-title ${isSpiderMan1 ? 'active' : ''}`}>Spider-Man-1</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickSpiderMan2Menu}>
                <span className={`sub-title ${isSpiderMan2 ? 'active' : ''}`}>Spider-Man-2</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickSpiderMan3Menu}>
                <span className={`sub-title ${isSpiderMan3 ? 'active' : ''}`}>Spider-Man-3</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isSpiderMan1 ? 'spiderman1' : isSpiderMan2 ? 'spiderman2' : isSpiderMan3 ? 'spiderman3' : ''}`}>
        <div className="sec3-container">
          <div className="main-title-img">
            <img src={`${samSrc}/sam_spider_man_${isSpiderMan1 ? '1' : isSpiderMan2 ? '2' : isSpiderMan3 ? '3' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      {
        isSpiderMan1 && <Spiderman1Component/>
      }
      {
        isSpiderMan2 && <Spiderman2Component/>
      }
      {
        isSpiderMan3 && <Spiderman3Component/>
      }
      <section className='section7'>
        <div className="sec7-container">
          <div className="related-movie-title">
            <h2>RELATED MOVIES</h2>
          </div>
          <div className="related-content">
            <ul>
              <li>
                <Link to="/amazing" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}amazing/amazing_spider_man_1_poster.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}tom-spiderman/tom_spider_man_1_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Homecoming</p>
                    <p className='production-year'>2017</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}miles/miles_1_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>into the spider-verse</p>
                    <p className='production-year'>2018</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}venom/venom_1_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Venom</p>
                    <p className='production-year'>2018</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
