import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Spiderman4Component () {
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
      <section className="section4">
        <div className="sec4-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className={`trailer-container ${isMiles1 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/vhkCBOsOoYY" 
              title="[스파이더맨: 뉴 유니버스] 3차 예고편" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen
              ></iframe>
              </div>
            </div>
            <div className={`trailer-container ${isMiles2 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/aa0WjdSYdCk" 
              title="[스파이더맨: 어크로스 더 유니버스] 인터내셔널 예고편" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section5'>
        <div className="sec5-container">
          <div className="background-img">
            <img className='miles' src={`${milesSrc}/miles_${isMiles1 ? '1' : isMiles2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className="sec6-container">
          <div className={`spiderman-movie-info ${isMiles1 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
                <p>
                  Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his father's, he pursues a quest to solve his parents' disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors' alter ego, the Lizard.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Marc Webb</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Andrew Garfield and Emma Stone</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'>July 3, 2012</div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${milesSrc}/miles_1_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="movie-review">
              <div className="review-title">
                <h2>review</h2>
              </div>
              <div className="review-box">
                <ul className='review-container'>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-1'>
                        Not just a reboot - it's a rejuvenation. From the first image of sensory awakening to the final acceptance of adult responsibility, it pulses with the warm blood of a very human hero.
                      </p>
                      <span>ST. LOUIS POST-DISPATCH - Joe Williams</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-2'>
                        As a new chapter in the superpowered arachnid saga, it stands on its own quite nicely, focusing more on human emotions than on a panoply of special effects.
                      </p>
                      <span>USA Today - Claudia Puig</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-3'>
                        What's most amazing in The Amazing Spider-Man turns out to be not the shared sensations of blockbuster wow! the picture elicits, but rather the shared satisfactions of intimate awww.
                      </p>
                      <span>Entertainment Weekly - Lisa Schwarzbaum</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isMiles2 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
              <p>
                Confident in his powers as Spider-Man, Peter Parker (Andrew Garfield) embraces his new role as a hero and spends time with Gwen Stacy (Emma Stone) in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro (Jamie Foxx), Peter must confront an enemy far more powerful than he is. And when his old friend Harry Osborn (Dane DeHaan) returns, Peter comes to realize that all his enemies have one thing in common: Oscorp.
              </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Marc Webb</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Andrew Garfield, Emma Stone, Dane DeHaan, Jamie Foxx, Colme Pau, Felicity Jones</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'>June 30, 2014</div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${milesSrc}/miles_2_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="movie-review">
              <div className="review-title">
                <h2>review</h2>
              </div>
              <div className="review-box">
                <ul className='review-container'>
                  <li className={'review-list'}>
                    <div className="review">
                      <p className='review-spider2'>
                        There are two types of superhero movies: the ones that brood and the ones that swing. The Amazing Spider-Man 2 is proudly the latter, filled with high-energy action.
                      </p>
                      <span>New York Daily News - Joe Neumaier</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-spider2'>
                        There is still Spider-Man's personal turmoil, crises of romance and loyalty, that Webb occasionally holds a few beats too long. Yet the performances ring true, with arresting chemistry where it counts.
                      </p>
                      <span>Tampa Bay Times - Steve Persall</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-spider2'>
                        One heck of a fun film -- and the most enjoyable and rewarding superhero movie I've seen in a while. Read full
                      </p>
                      <span>New Orleans Times - PicayuneMike ScottApr</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section7'>
        <div className="sec7-container">
          <div className="related-movie-title">
            <h2>RELATED MOVIES</h2>
          </div>
          <div className="related-content">
            <ul>
              <li>
                <Link to="/amazing">
                  <img src={`${imgSrc}/sam-spiderman/sam_spider_man_3_card.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Trilogy</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom">
                  <img src={`${imgSrc}/amazing/amazing_spider_man_1_poster.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles">
                  <img src={`${imgSrc}/tom-spiderman/tom_spider_man_2_card.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>spiderman: Far-From-Home</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom">
                  <img src={`${imgSrc}/venom/venom_1_card.jpg`} alt="" />
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
