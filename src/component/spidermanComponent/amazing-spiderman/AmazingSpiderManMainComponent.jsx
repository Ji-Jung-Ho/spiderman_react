import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import AmazingSpiderman1Component from './AmazingSpiderman1Component';
import AmazingSpiderman2Component from './AmazingSpiderman2Component';

export default function AmazingSpiderManMainComponent () {
  const [isAmazingSpiderMan1, setIsAmazingSpiderMan1] = useState(true);
  const [isAmazingSpiderMan2, setIsAmazingSpiderMan2] = useState(false);

  const onClickAmazing1Menu = () => {
    setIsAmazingSpiderMan1(true);
    setIsAmazingSpiderMan2(false);
  };

  const onClickAmazing2Menu = () => {
    setIsAmazingSpiderMan1(false);
    setIsAmazingSpiderMan2(true);
  };

  const amazing = "./img/spiderman_movie_img/amazing";
  const imgSrc = "./img/spiderman_movie_img"

  const amazingLink = {
    amazing1_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/the-amazing-spider-man/1XUNbIGBs7TO',
      label: 'Go To Amazing-Spider-Man Movie in disney+',
    },
    amazing2_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/the-amazing-spider-man-2/4h3EaB5DYH6g',
      label: 'Go To Amazing-Spider-Man Movie in disney+',
    },
  };

  const onClickLinkClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className="section1">
        <div className="sec1-container">
          <Link to={`${isAmazingSpiderMan1 ? amazingLink.amazing1_Disney.url : isAmazingSpiderMan2 ? amazingLink.amazing2_Disney.url : ''}`} target="_blink">
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
              <button className="movie-choice" onClick={onClickAmazing1Menu}>
                <span className={`sub-title ${isAmazingSpiderMan1 ? 'active' : ''}`}>Amazing-Spider-Man-1</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickAmazing2Menu}>
                <span className={`sub-title ${isAmazingSpiderMan2 ? 'active' : ''}`}>Amazing-Spider-Man-2</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isAmazingSpiderMan1 ? 'amazing-spiderman1' : isAmazingSpiderMan2 ? 'amazing-spiderman2' : ''}`}>
        <div className="sec3-container">
          <div className="main-title-img">
            <img src={`${amazing}/amazing_spider_man_${isAmazingSpiderMan1 ? '1' : isAmazingSpiderMan2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      {
        isAmazingSpiderMan1 && <AmazingSpiderman1Component/>
      }
      {
        isAmazingSpiderMan2 && <AmazingSpiderman2Component/>
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
                  <img src={`${imgSrc}/sam-spiderman/sam_spider_man_2_poster.png`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Trilogy</p>
                    <p className='production-year'>2004</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/tom-spiderman/tom_spider_man_2_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Far From Home</p>
                    <p className='production-year'>2019</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/miles/miles_1_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>into the spider-verse</p>
                    <p className='production-year'>2018</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/venom/venom_1_card_2.jpg`} alt="" />
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
