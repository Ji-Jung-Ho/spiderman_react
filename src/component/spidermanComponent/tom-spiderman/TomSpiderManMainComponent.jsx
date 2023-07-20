import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeComingComponent from './HomeComingComponent';
import FarFromHomeComponent from './FarFromHomeComponent';
import NoWayHomeComponent from './NoWayHomeComponent';

export default function TomSpiderManMainComponent() {
  const [isTomSpiderMan1, setIsTomSpiderMan1] = useState(true);
  const [isTomSpiderMan2, setIsTomSpiderMan2] = useState(false);
  const [isTomSpiderMan3, setIsTomSpiderMan3] = useState(false);

  const onClickTomSpiderMan1Toggle = () => {
    setIsTomSpiderMan1(true);
    setIsTomSpiderMan2(false);
    setIsTomSpiderMan3(false);
  };

  const onClickTomSpiderMan2Toggle = () => {
    setIsTomSpiderMan1(false);
    setIsTomSpiderMan2(true);
    setIsTomSpiderMan3(false);
  };

  const onClickTomSpiderMan3Toggle = () => {
    setIsTomSpiderMan1(false);
    setIsTomSpiderMan2(false);
    setIsTomSpiderMan3(true);
  };

  const spidermanLink = {
    spiderman1_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man-homecoming/4cLMEzWGqQaG',
      label: 'Go To Tom-Spider-Man1 Movie in disney+',
    },
    spiderman2_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man-far-from-home/3PtrmOKmcLb4',
      label: 'Go To Tom-Spider-Man2 Movie in disney+',
    },
  };

  const tomSrc = "./img/spiderman_movie_img/tom-spiderman"
  const imgSrc = "./img/spiderman_movie_img"

  const onClickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className={`section1 ${isTomSpiderMan1 || isTomSpiderMan2 ? 'sec1-show' : 'sec1-hide'}`}>
        <div className="sec1-container">
          <Link 
          to={`${isTomSpiderMan1 ? spidermanLink.spiderman1_Disney.url : isTomSpiderMan2 ? spidermanLink.spiderman2_Disney.url : ''}`} 
          target="_blink"
          >
            <div className='sec1-content'>
              <span>Available right now on Disney+.</span>
              <img src="./img/spiderman_movie_img/disneybtn_asset2x_6.png" alt="" />
            </div>
          </Link>
        </div>
      </section>
      <section className='section2'>
        <div className='sub-title'>
          <ul>
            <li>
              <button className="movie-choice" onClick={onClickTomSpiderMan1Toggle}>
                <span className={`sub-title ${isTomSpiderMan1 ? 'active' : ''}`}>Home-Comming</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickTomSpiderMan2Toggle}>
                <span className={`sub-title ${isTomSpiderMan2 ? 'active' : ''}`}>Far-From-Home</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickTomSpiderMan3Toggle}>
                <span className={`sub-title ${isTomSpiderMan3 ? 'active' : ''}`}>No-Way-Home</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isTomSpiderMan1 ? 'tom-spiderman1' : isTomSpiderMan2 ? 'tom-spiderman2' : isTomSpiderMan3 ? 'tom-spiderman3' : ''}`}>
        <div className="sec3-container">
          <div className="main-title-img">
            <img src={`${tomSrc}/tom_spider_man_${isTomSpiderMan1 ? '1' : isTomSpiderMan2 ? '2' : isTomSpiderMan3 ? '3' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      {
        isTomSpiderMan1 && <HomeComingComponent/>
      }
      {
        isTomSpiderMan2 && <FarFromHomeComponent/>
      }
      {
        isTomSpiderMan3 && <NoWayHomeComponent/>
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
                  <img src={`${imgSrc}/sam-spiderman/sam_spider_man_3_card.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Trilogy</p>
                    <p className='production-year'>2007</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/amazing/amazing_spider_man_1_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/miles/miles_2_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Into The Spider-Verse</p>
                    <p className='production-year'>2018</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/venom/venom_2_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Venom-2</p>
                    <p className='production-year'>2021</p>
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
