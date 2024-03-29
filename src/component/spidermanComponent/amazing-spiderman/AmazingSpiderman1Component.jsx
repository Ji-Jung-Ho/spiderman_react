import React, {useState} from 'react';

export default function Amazingamazing1Component () {

  const [isAmazingSpidermanHovered, setIsAmazingSpidermanHovered] = useState(false);
  const [isLizardHovered, setIsLizardHovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'spider-man') {
      setIsAmazingSpidermanHovered(true);
    } else if (character === 'lizard') {
      setIsLizardHovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'spider-man') {
      setIsAmazingSpidermanHovered(false);
    } else if (character === 'lizard') {
      setIsLizardHovered(false);
    }
  };

  const amazingSpiderman1Class = isAmazingSpidermanHovered ? 'amazing-spider-man' : 'peter-parker';
  const amazingSpiderman1villainClass = isLizardHovered ? 'lizard' : 'curt-connors';

  const amazing1ImgSrc = "./img/spiderman_movie_img/amazing/amazing_spiderman_1/"
  const CommonImgSrc = "./img/spiderman_movie_img/amazing/"

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
                src="https://www.youtube.com/embed/y0VTJPTI_u8" 
                title="어메이징 스파이더맨_메인 예고편" 
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
            <img src={`${CommonImgSrc}/amazing_spider_man_1_logo.png`} alt="" />
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
                <img src={`${CommonImgSrc}/amazing_spider_man_1_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul className='character-ul'>
                  <li className= {amazingSpiderman1Class}
                    onMouseEnter={() => onHoverEnter('spider-man')}
                    onMouseLeave={() => onHoverLeave('spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isAmazingSpidermanHovered  ? `${amazing1ImgSrc}amazing1-spider_man.jpg` : `${amazing1ImgSrc}amazing1-peter_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isAmazingSpidermanHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='acter'>Andrew-Garfield</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='gwen-stacy'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${amazing1ImgSrc}amazing1-gwen_stacy.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>gwen-stacy</span></li>
                          <li><span className='acter'>Emma-Stone</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={amazingSpiderman1villainClass}
                  onMouseEnter={() => onHoverEnter('lizard')}
                  onMouseLeave={() => onHoverLeave('lizard')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isLizardHovered  ? `${amazing1ImgSrc}amazing1-lizard.jpg` : `${amazing1ImgSrc}amazing1-curt_connors.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isLizardHovered  ? 'lizard' : 'curt-connors'}</span></li>
                          <li><span className='acter'>Rhys-Ifans</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='ben-parker'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${amazing1ImgSrc}amazing1-ben_paker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>ben-parker</span></li>
                          <li><span className='acter'>Martin-Sheen</span></li>
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
                      <p className='review'>
                        Not just a reboot - it's a rejuvenation. From the first image of sensory awakening to the final acceptance of adult responsibility, it pulses with the warm blood of a very human hero.
                      </p>
                      <span>ST. LOUIS POST-DISPATCH - Joe Williams</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        As a new chapter in the superpowered arachnid saga, it stands on its own quite nicely, focusing more on human emotions than on a panoply of special effects.
                      </p>
                      <span>USA Today - Claudia Puig</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        What's most amazing in The Amazing Spider-Man turns out to be not the shared sensations of blockbuster wow! the picture elicits, but rather the shared satisfactions of intimate awww.
                      </p>
                      <span>Entertainment Weekly - Lisa Schwarzbaum</span>
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