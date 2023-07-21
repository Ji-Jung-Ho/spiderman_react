import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import NewSpiderVerseComponent from './NewSpiderVerseComponent'
import AcrossTheSpiderVerseComponent from './AcrossTheSpiderVerseComponent'

export default function MilesMainComponent () {
  const [isMiles1, setIsMiles1] = useState(true);
  const [isMiles2, setIsMiles2] = useState(false);

  const onClickAmazing1Toggle = () => {
    setIsMiles1(true);
    setIsMiles2(false);
  };

  const onClickAmazing2Toggle = () => {
    setIsMiles1(false);
    setIsMiles2(true);
  };

  const milesSrc = "./img/spiderman_movie_img/miles";
  const imgSrc = "./img/spiderman_movie_img"

  const milesLink = {
    miles_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man-into-the-spider-verse/OtXRBHlsLLV9',
      label: 'Go To Amazing-Spider-Man Movie in disney+',
    },
  };

  const onClickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className={`section1 ${isMiles1 ? 'sec1-show' : 'sec1-hide'}`}>
        <div className="sec1-container">
          <Link to={`${isMiles1 ? milesLink.miles_Disney.url : ''}`} target="_blink">
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
                <span className={`sub-title ${isMiles1 ? 'active' : ''}`}>Into the Spider-Verse</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickAmazing2Toggle}>
                <span className={`sub-title ${isMiles2 ? 'active' : ''}`}>Across the Spider-Verse</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isMiles1 ? 'miles-1' : isMiles2 ? 'miles-2' : ''}`}>
        <div className="sec3-container">
          <div className="main-title-img">
            <img src={`${milesSrc}/miles_${isMiles1 ? '1' : isMiles2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      {
        isMiles1 && <NewSpiderVerseComponent/>
      }
      {/* {
        isMiles2 && <AcrossTheSpiderVerseComponent/>
      } */}
      <section className='section7'>
        <div className="sec7-container">
          <div className="related-movie-title">
            <h2>RELATED MOVIES</h2>
          </div>
          <div className="related-content">
            <ul>
              <li>
                <Link to="/sam" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/sam-spiderman/sam_spider_man_1_poster.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Trilogy</p>
                    <p className='production-year'>2002</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/amazing" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/amazing/amazing_spider_man_2_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man-2</p>
                    <p className='production-year'>2014</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/tom-spiderman/tom_spider_man_3_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>spiderman: No-Way-Home</p>
                    <p className='production-year'>2021</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/venom/venom_2_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Venom: LET THERE BE CARNAGE </p>
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
