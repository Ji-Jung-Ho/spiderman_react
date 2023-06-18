import React from 'react';
import {Link}  from 'react-router-dom';

export default function Spiderman1Component () {

  const spidermanLink = {
    spidermanDisney :{
      url: 'https://www.disneyplus.com/ko-kr/movies/spider-man/4q3uPuyBeCkw?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-SPIDERMAN-EN-ShowPageMasthead-Marvel_ShowPageMasthead_SpiderMan-NA',
      label: 'Go To Spider-Man Movie in disney+'
    },
  }

  return (
    <main id="main" className='spiderman-movie-1'>
      <section className="section1">
        <div className="sec1-container">
          <Link to={spidermanLink.spidermanDisney.url} target='_blink'>
            <div className="sec1-content">
              <span>Available right now on Disney+.</span>
              <img src="./img/spiderman-1/disneybtn_asset2x_6.png" alt="" />
            </div>
          </Link>
        </div>
      </section>
      <section className='section2'>
        <div className="sec2-container">
          <div className="title">
            <img src="./img/spiderman-1/spider-man_lob_log_def_01.png" alt="" />
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="sec3-container">
          <div className="sub-title">
            <ul>
              <li>
                <button className='movie-choice'>
                  <span>Spider-Man-1</span>
                </button>
              </li>
              <li>
                <button className='movie-choice'>
                  <span>Spider-Man-2</span>
                </button>
              </li>
              <li>
                <button className='movie-choice'>
                  <span>Spider-Man-3</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="sec4-container">
          <div className="spiderman-trailer">
            <div className="trailer spider-man-1">
              <iframe 
              width="640" 
              height="361" 
              src="https://www.youtube.com/embed/WMxTe3eouQc" 
              title="스파이더맨 -- 예고편" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              ></iframe>
            </div>
            <div className="trailer spider-man-2">
              <iframe 
              width="640" 
              height="361" 
              src="https://www.youtube.com/embed/B1R2d6eEaC4" 
              title="스파이더맨 2 -- 예고편"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              ></iframe>
            </div>
            <div className="trailer spider-man-3">
              <iframe 
              width="640" 
              height="361" 
              src="https://www.youtube.com/embed/QzSkaWmjIpY" 
              title="스파이더맨 3 -- 예고편"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
