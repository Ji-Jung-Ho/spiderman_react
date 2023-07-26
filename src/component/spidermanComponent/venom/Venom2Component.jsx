import React from 'react';

export default function Venom2Component () {
  return (
    <>
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
                  <div className='content'><span>Oct 5, 2018</span></div>
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
              <div className="review-content">
                <ul className='review-container'>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        The action is dumb, the plot is weak, and the story is pitiful. Venom is a bad movie, yet surprisingly I still loved the hell out of it.
                      </p>
                      <span>FILM THREAT - Anthony Ray Bench</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review venom1-review'>
                        good movie. good fun. Tom Hardy is in every scene.
                      </p>
                      <span>User - ThomDerd</span>
                      <img src="./img/etc-img/venom_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review venom1-review'>
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
                While Eddie Brock and Venom try to navigate their thorny relationship, a new threat rises from serial killer Cletus Kasady and a new alien symbiote.
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
                <img src={`${venomSrc}/venom_2_poster.jpg`} alt="" />
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