import React, {useState} from 'react';
import {Link} from 'react-router-dom'

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
                <span className={`sub-title ${isVenom1 ? 'active' : ''}`}>Venom1</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickAmazing2Toggle}>
                <span className={`sub-title ${isVenom2 ? 'active' : ''}`}>Venom2</span>
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
      <section className="section4">
        <div className="sec4-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className={`trailer-container ${isVenom1 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/KI322kD7lNk" 
              title="[베놈] 3차 예고편" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen
              ></iframe>
              </div>
            </div>
            <div className={`trailer-container ${isVenom2 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/BryJA-Xp-Q4?list=PLX1HOVtn6MKVLADnePBSEeL4d4dAlLiGm" 
              title="[베놈 2: 렛 데어 비 카니지] 2차 예고편" 
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
            <img className='miles' src={`${venomSrc}/venom_${isVenom1 ? '1' : isVenom2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className="sec6-container">
          <div className={`spiderman-movie-info ${isVenom1 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
                <p>
                  Eddie Brock, a righteous and passionate reporter who does not hesitate to cover the absurdity of society for the sake of the truth. Suspicious of the living experimentation of the giant corporation Life Foundation, he infiltrates their office and is attacked by a symbiote, an alien organism. Venom, which exerts its abilities when the symbiote controls the body and mind of its host, parasitizes on Eddie's body and causes all kinds of commotion. Meanwhile, Drake, the chairman of the Life Foundation, who secretly continued to try to create a new life form by combining humans and symbiotes, also became the symbiote's host.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Ruben Fleischer</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tom Hardy, Michelle Williams, Riz Ahmed</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'>Oct 5, 2018</div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${venomSrc}/venom_1_poster.jpg`} alt="" />
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
                        The action is dumb, the plot is weak, and the story is pitiful. Venom is a bad movie, yet surprisingly I still loved the hell out of it.
                      </p>
                      <span>FILM THREAT - Anthony Ray Bench</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-2 venom-review'>
                        good movie. good fun. Tom Hardy is in every scene.
                      </p>
                      <span>User - ThomDerd</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-3 venom-review'>
                        A bizarre yet entertaining adventure.
                      </p>
                      <span>User - Anurag-Shetty</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isVenom2 ? 'show-movie-info' : 'hide-movie-info'}`}>
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
                <img src={`${venomSrc}/venom_2_poster.jpg`} alt="" />
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
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-spider2'>
                        There is still Spider-Man's personal turmoil, crises of romance and loyalty, that Webb occasionally holds a few beats too long. Yet the performances ring true, with arresting chemistry where it counts.
                      </p>
                      <span>Tampa Bay Times - Steve Persall</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-spider2'>
                        One heck of a fun film -- and the most enjoyable and rewarding superhero movie I've seen in a while. Read full
                      </p>
                      <span>New Orleans Times - PicayuneMike ScottApr</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
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
                  <img src={`${imgSrc}/amazing/amazing_spider_man_1_poster.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/tom-spiderman/tom_spider_man_2_card.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>spiderman: Far-From-Home</p>
                    <p className='production-year'>2019</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/miles/miles_2_card.jpg`} alt="" />
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
