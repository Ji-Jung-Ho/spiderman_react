import React from 'react';

export default function Venom1Component () {


  const venom1ImgSrc = "./img/spiderman_movie_img/venom/venom1/"
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
              src="https://www.youtube.com/embed/KI322kD7lNk" 
              title="[베놈] 3차 예고편" 
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
            <img className='miles' src={`${commonImgSrc}/venom_1_logo.png`} alt="" />
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
                <img src={`${commonImgSrc}/venom_1_poster.jpg`} alt="" />
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
        </div>
      </section>
    </>
  );
};