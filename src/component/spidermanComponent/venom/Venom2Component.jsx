import React, {useState} from 'react';

export default function Venom2Component () {

  const [isvenom2Hovered, setIsvenom2Hovered] = useState(false);
  const [isVenom2Hovered, setIsVenom2Hovered] = useState(false);


  const onHoverEnter = (character) => {
    if (character === 'venom') {
      setIsvenom2Hovered(true);
    } else if (character === 'carnage') {
      setIsVenom2Hovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'venom') {
      setIsvenom2Hovered(false);
    } else if (character === 'carnage') {
      setIsVenom2Hovered(false);
    }
  };

  const venomClass = isvenom2Hovered ? 'venom ' : 'eddie-brock ';
  const carnageClass = isVenom2Hovered ? 'carnage ' : 'cletus-kasady ';

  const venom2ImgSrc = "./img/spiderman_movie_img/venom/venom_2/"
  const commonImgSrc = "./img/spiderman_movie_img/venom/"

  return (
    <>
      <section className="section4">
        <div className="sec4-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className='trailer-container'>
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
            <img className='miles' src={`${commonImgSrc}/venom_2_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className="sec6-container">
          <div className='spiderman-movie-info'>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
              <p>
                <span>The era of heroes is over. </span><br/><br/>
                In front of ‘Eddie Brock’, who became a perfect partner with ‘Venom’, ‘Cletus Cassady’ appears as ‘Carnage’, foreshadowing the world of great chaos to come.
                The era of great chaos begins, will evil be punished with evil?
              </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Andy Serkis</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tom Hardy, Woody Harrelson, Michelle Williams</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Oct 1, 2021</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${commonImgSrc}/venom_2_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul className='character-ul'>
                  <li className={venomClass} 
                    onMouseEnter={() => onHoverEnter('venom')}
                    onMouseLeave={() => onHoverLeave('venom')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isvenom2Hovered  ? `${venom2ImgSrc}venom2-eddie_venom.jpg` : `${venom2ImgSrc}venom2-eddie.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isvenom2Hovered  ? 'venom' : 'eddie-brock'}</span></li>
                          <li><span className='acter'>Tom-Hardy</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={carnageClass}
                  onMouseEnter={() => onHoverEnter('carnage')}
                  onMouseLeave={() => onHoverLeave('carnage')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isVenom2Hovered  ? `${venom2ImgSrc}venom2-carnage.jpg` : `${venom2ImgSrc}venom2-cletus_kasady.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='character-name'>{isVenom2Hovered  ? 'carnage' : 'cletus-kasady'}</span></li>
                          <li><span className='acter'>Woody-Harrelson</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='anne-weying'>
                      <a href="#!">
                        <div className="img-box">
                          <img src={`${venom2ImgSrc}venom2-anne_weying.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='character-name'>anne_weying</span></li>
                            <li><span className='acter'>Michelle-Williams</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className='shriek'>
                      <a href="#!">
                        <div className="img-box">
                          <img src={`${venom2ImgSrc}venom2-shriek.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='character-name'>shriek</span></li>
                            <li><span className='acter'>Naomie-Harris</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className='patrick-mulligan'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${venom2ImgSrc}venom2-patrick_mulligan.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>patrick_mulligan</span></li>
                          <li><span className='acter'>Stephen-Graham</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="movie-review">
              <div className="review-title">
                <h2>review</h2>
              </div>
              <div className="review-content">
                <ul className='review-container'>
                  <li className={'review-list'}>
                    <div className="review-box">
                      <p className='review'>
                        Incredible film! I feel like it's hard to do a venom story with symbiotes and carnage without having Spider-Man but they are nailing it and I am loving it I hope we get more venom content.
                      </p>
                      <span>User Review - james-hockey98</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review venom2-review'>
                        It was very good. Carnage looked super scary and the ending was just super-tastic I'm hoping for a venom 3.
                      </p>
                      <span>User Review - aideniscool-77263</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        Super amazing fantastic mind blowing. Both the venom movies are good but this one is best it has much fun and many good aspects that you can't miss go and watch.
                      </p>
                      <span>User Review - marusanikishankittu</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};