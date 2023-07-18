import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Spiderman1Component() {
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
      <section className="section4">
        <div className="sec4-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className={`trailer-container ${isTomSpiderMan1 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/LjgFtASzrBA" 
              title="[스파이더맨: 홈커밍] 2차 예고편" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen
              ></iframe>
              </div>
            </div>
            <div className={`trailer-container ${isTomSpiderMan2 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/N9EbPfhLP7U?list=PLX1HOVtn6MKXLTXkONfqO_-cKYFS2L6ve" 
              title="[스파이더맨: 파 프롬 홈] 파이널 예고편"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen
              ></iframe>
              </div>
            </div>
            <div className={`trailer-container ${isTomSpiderMan3 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/yFZh-Wqi7RI" 
              title="[스파이더맨: 노 웨이 홈] 2차예고편"
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
            <img src={`${tomSrc}/tom_spider_man_${isTomSpiderMan1 ? '1' : isTomSpiderMan2 ? '2' : isTomSpiderMan3 ? '3' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className="sec6-container">
          <div className={`spiderman-movie-info ${isTomSpiderMan1 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
                <p>
                  Fifteen-year-old Peter Park (Tom Holland) made his spectacular debut as Spider-Man in Captain America: Civil War. But I never thought the road to becoming a hero would be so difficult! Peter returns to the house where he lives with Aunt May (Marisa Tomei) after experiencing the world of the powerful Avengers for a while. He is put under the watchful eye of his new mentor, Tony Stark (Robert Downey Jr.). He tries to live the way he used to, but he can't shake the desire to become more of a hero than his friendly neighborhood Spider-Man. In the meantime, he faces a big crisis while fighting against the powerful villain Vulture (Michael Keaton). Peter decides to become a true hero to protect the precious things.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Jon Watts</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tom Holland, Michael Keaton, Robert Downey Jr.</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Jul 7, 2017</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${tomSrc}/tom_spider_man_1_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="movie-review">
              <div className="review-title">
                <h2>review</h2>
              </div>
              <div className="review-content">
                <ul className='review-container'>
                  <li className='review-list'>
                    <div className="review-box">
                      <p  className='review'>
                        Spider-Man: Homecoming is so joyously entertaining that it’s enough to temporarily cure any superhero fatigue. There’s wit, smarts and a nifty, inventive plot that serves as a reminder of what buoyant fun such films can bring.
                      </p>
                      <span>The Guardian - Benjamin Lee</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p  className='review'>
                        It may not quite reach the heights of Raimi’s Spider-Man 2, but Spider-Man: Homecoming emerges as one of the character’s strongest films to date, granting him a clean slate and infinite room to grow.
                      </p>
                      <span>We Got This Covered - Robert Yaniz Jr.</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p  className='review'>
                        Spider-Man: Homecoming is a return to form, featuring an incredibly likable cast, a compelling and complicated villain, and a irrepressibly charming Spider-Man. Welcome home, Peter.
                      </p>
                      <span>ScreenCrush - Matt Singer</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isTomSpiderMan2 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
              <p>
                Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.
              </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Jon Watts</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tom Holland, Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, JB Smoove, Jacob Batalon, Martin Starr, with Marisa Tomei and Jake Gyllenhaal</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Jul 2, 2019</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${tomSrc}/tom_spider_man_2_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="movie-review">
              <div className="review-title">
                <h2>review</h2>
              </div>
              <div className="review-content">
                <ul className='review-container'>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review tom2-review'>
                        Spider-Man: Far From Home is great fun, filled with heart, humor and lots of cool stuff for fans to geek out over.
                      </p>
                      <span>IGN - Jim Vejvoda</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review tom2-review'>
                        Spider-Man: Far From Home is a heck of a lot of fun. And I can’t get over how great of a Mysterio movie this is.
                      </p>
                      <span>Uproxx - Mike Ryan</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review tom2-review'>
                        Far From Home succeeds with an unusual, troubling virtue: The best parts are the most fake.
                      </p>
                      <span>Entertainment Weekly - Darren Franich</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isTomSpiderMan3 ? 'show-movie-info' : 'hide-movie-info'}`}>
          <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
                <p>
                  For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Jon Watts</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tom Holland, Zendaya, Jacob Batalon</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Dec 17, 2021</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${tomSrc}/tom_spider_man_3_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="movie-review">
              <div className="review-title">
                <h2>review</h2>
              </div>
              <div className="review-content">
                <ul className='review-container'>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        Briskly balancing a dizzying assortment of parts, Marvel's latest (by way of Sony) looks destined to do what only a spider can -- namely, lure vast numbers of fans into its web.
                      </p>
                      <span>CNN - Brian Lowry</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review tom3-review2'>
                        No Way Home is Spider-Man’s most intriguing & fun story yet. Though the multiverse looms large, the film's thoughtful in its focus on Peter's journey.
                      </p>
                      <span>Screen Rant - Mae Abdulbaki</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review tom3-review3'>
                        A MASSIVE treat for every Spidey fan out there.
                      </p>
                      <span>User Review - Achyut_Prashast_Singh</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
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
