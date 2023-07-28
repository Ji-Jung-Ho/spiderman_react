import React, {useState} from 'react';

export default function AmazingSpiderman2Component () {

  const [isAmazingHovered, setisAmazingHovered] = useState(false);
  const [isGreenGoblinHovered, setIsGreenGoblinHovered] = useState(false);
  const [isElectorHovered, setIsElectorHovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'spider-man') {
      setisAmazingHovered(true);
    } else if (character === 'green-goblin') {
      setIsGreenGoblinHovered(true);
    } else if (character === 'elector') {
      setIsElectorHovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'spider-man') {
      setisAmazingHovered(false);
    } else if (character === 'green-goblin') {
      setIsGreenGoblinHovered(false);
    } else if (character === 'elector') {
      setIsElectorHovered(false);
    }
  };

  const amazingSpiderman2SpidermanClass = isAmazingHovered ? 'amazing-spider-man' : 'peter-parker';
  const amazingspiderman2Villanin1Class = isGreenGoblinHovered ? 'green-goblin' : 'harry-osborn';
  const amazingspiderman2Villanin2Class = isElectorHovered ? 'elector' : 'max-dillon';

  const amazing2ImgSrc = "./img/spiderman_movie_img/amazing/amazing_spiderman_2/"
  const commonImgSrc = "./img/spiderman_movie_img/amazing/"

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
                src="https://www.youtube.com/embed/f11ZLEpwCZM" 
                title="[어메이징 스파이더맨2] 본 예고편 (2014.04.23 대개봉)" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section5'>
        <div className="sec5-container">
          <div className="background-img">
            <img src={`${commonImgSrc}/amazing_spider_man_2_logo.png`} alt="" />
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
                <img src={`${commonImgSrc}/amazing_spider_man_2_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul className='character-ul'>
                  <li className={amazingSpiderman2SpidermanClass} 
                    onMouseEnter={() => onHoverEnter('spider-man')}
                    onMouseLeave={() => onHoverLeave('spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isAmazingHovered  ? `${amazing2ImgSrc}amazing2-spider_man.jpg` : `${amazing2ImgSrc}amazing2-peter_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isAmazingHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='acter'>Andrew-Garfield</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='gwen-stacy'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${amazing2ImgSrc}amazing2-gwen_stacy.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>gwen-stacy</span></li>
                          <li><span className='acter'>Emma-Stone</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={amazingspiderman2Villanin1Class} 
                  onMouseEnter={() => onHoverEnter('green-goblin')}
                  onMouseLeave={() => onHoverLeave('green-goblin')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isGreenGoblinHovered  ? `${amazing2ImgSrc}amazing2-green_goblin.jpg` : `${amazing2ImgSrc}amazing2-harry_osborn.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isGreenGoblinHovered  ? 'green-goblin' : 'harry-osborn'}</span></li>
                          <li><span className='acter'>Dane-DeHaan</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={amazingspiderman2Villanin2Class} 
                  onMouseEnter={() => onHoverEnter('elector')}
                  onMouseLeave={() => onHoverLeave('elector')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isElectorHovered  ? `${amazing2ImgSrc}amazing2-electro.jpg` : `${amazing2ImgSrc}amazing2-max_dillon.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isElectorHovered  ? 'electro' : 'max-dillon'}</span></li>
                          <li><span className='acter'>Jamie-Foxx</span></li>
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
                        There are two types of superhero movies: the ones that brood and the ones that swing. The Amazing Spider-Man 2 is proudly the latter, filled with high-energy action.
                      </p>
                      <span>New York Daily News - Joe Neumaier</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        There is still Spider-Man's personal turmoil, crises of romance and loyalty, that Webb occasionally holds a few beats too long. Yet the performances ring true, with arresting chemistry where it counts.
                      </p>
                      <span>Tampa Bay Times - Steve Persall</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        One heck of a fun film -- and the most enjoyable and rewarding superhero movie I've seen in a while. Read full
                      </p>
                      <span>New Orleans Times - PicayuneMike ScottApr</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
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