import React, {useState} from 'react';

export default function FarFromHomeComponent () {

  const [isSpidermanHovered, setIsSpidermanHovered] = useState(false);
  const [isVillain1Hovered, setIsVillain1Hovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'spiderman') {
      setIsSpidermanHovered(true);
    } else if (character === 'villain1') {
      setIsVillain1Hovered(true);
    } 
  };

  const onHoverLeave = (character) => {
    if (character === 'spiderman') {
      setIsSpidermanHovered(false);
    } else if (character === 'villain1') {
      setIsVillain1Hovered(false);
    }
  };

  const spidermanClass = isSpidermanHovered ? 'spiderman farfromhome' : 'peter-parker farfromhome';
  const villainClass = isVillain1Hovered ? 'mysterio farfromhome' : 'quentin-beck farfromhome';

  const farFromHomeImgSrc = "./img/spiderman_movie_img/tom-spiderman/far_from_home/"
  const commonImgSrc = "./img/spiderman_movie_img/tom-spiderman/"

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
              src="https://www.youtube.com/embed/N9EbPfhLP7U?list=PLX1HOVtn6MKXLTXkONfqO_-cKYFS2L6ve" 
              title="[스파이더맨: 파 프롬 홈] 파이널 예고편"
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
            <img src={`${commonImgSrc}/tom_spider_man_2_logo.png`} alt="Far-From-Home" />
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
                <img src={`${commonImgSrc}/tom_spider_man_2_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul className='character-ul'>
                  <li className={spidermanClass} 
                    onMouseEnter={() => onHoverEnter('spiderman')}
                    onMouseLeave={() => onHoverLeave('spiderman')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSpidermanHovered  ? `${farFromHomeImgSrc}farfromhome_spiderman.jpg` : `${farFromHomeImgSrc}farfromhome_peter-parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='farfromhome-character-name'>{isSpidermanHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='farfromhome-acter'>Tom Holland</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='farfromhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${farFromHomeImgSrc}farfromhome_nick-fury.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='farfromhome-character-name'>Nick Fury</span></li>
                          <li><span className='farfromhome-acter'>Samuel L Jackson</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='farfromhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${farFromHomeImgSrc}farfromhome_michelle-jones-watson.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='farfromhome-character-name'>michelle-jones</span></li>
                          <li><span className='farfromhome-acter'>Zendaya</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='farfromhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${farFromHomeImgSrc}farfromhome_ned.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='farfromhome-character-name'>Ned-Leeds</span></li>
                          <li><span className='farfromhome-acter'>Jacob Batalon</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={villainClass} 
                  onMouseEnter={() => onHoverEnter('villain1')}
                  onMouseLeave={() => onHoverLeave('villain1')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isVillain1Hovered  ? `${farFromHomeImgSrc}farfromhome_mysterio.jpg` : `${farFromHomeImgSrc}farfromhome_quentin-beck.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='farfromhome-character-name'>{isVillain1Hovered  ? 'mysterio' : 'quentin-beck'}</span></li>
                          <li><span className='farfromhome-acter'>Jake Gyllenhaal</span></li>
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
          
        </div>
      </section>
    </>
  );
};