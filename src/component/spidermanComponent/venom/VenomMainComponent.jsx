import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Venom1Component from './Venom1Component';
import Venom2Component from './Venom2Component';

export default function Spiderman4Component () {
  const [isVenom1, setIsVenom1] = useState(true);
  const [isVenom2, setIsVenom2] = useState(false);

  const onClickAmazing1Toggle = () => {
    setIsVenom1(true);
    setIsVenom2(false);
  };

  const onClickAmazing2Toggle = () => {
    setIsVenom1(false);
    setIsVenom2(true);
  };

  const venomSrc = "./img/spiderman_movie_img/venom";
  const imgSrc = "./img/spiderman_movie_img"

  const venomLink = {
    venom1_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/venom/1w4uv4K4arER',
      label: 'Go To Venom_1 Movie in disney+',
    },
  };

  const onClickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className={`section1 ${isVenom1 ? 'sec1-show' : 'sec1-hide'}`}>
        <div className="sec1-container">
          <Link to={`${isVenom1 ? venomLink.venom1_Disney.url : ''}`} target="_blink">
            <div className="sec1-content">
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
              <button className="movie-choice" onClick={onClickAmazing1Toggle}>
                <span className={`sub-title ${isVenom1 ? 'active' : ''}`}>The Venom-1</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickAmazing2Toggle}>
                <span className={`sub-title ${isVenom2 ? 'active' : ''}`}>The Venom-2</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isVenom1 ? 'venom-1' : isVenom2 ? 'venom-2' : ''}`}>
        <div className={`sec3-container ${isVenom2 ? 'venom-2' : ''}`}>
          <div className="main-title-img">
            <img src={`${venomSrc}/venom_${isVenom1 ? '1' : isVenom2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      {
        isVenom1 && <Venom1Component/>
      }
      {
        isVenom2 && <Venom2Component/>
      }
      <section className='section7'>
        <div className="sec7-container">
          <div className="related-movie-title">
            <h2>RELATED MOVIES</h2>
          </div>
          <div className="related-content">
            <ul>
              <li>
                <Link to="/sam" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/sam-spiderman/sam_spider_man_3_card.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Trilogy</p>
                    <p className='production-year'>2007</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/amazing" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/amazing/amazing_spider_man_2_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man-2</p>
                    <p className='production-year'>2014</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/tom-spiderman/tom_spider_man_2_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>spiderman: Far-From-Home</p>
                    <p className='production-year'>2019</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/miles/miles_2_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Across The Spider-Verse</p>
                    <p className='production-year'>2023</p>
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
