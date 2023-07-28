import React, {useState} from 'react';

export default function HomeComingComponent () {

  const [isSpidermanHovered, setIsSpidermanHovered] = useState(false);
  const [isIronManHovered, setIsIronManHovered] = useState(false);
  const [isVultureHovered, setIsVultureHovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'spiderman') {
      setIsSpidermanHovered(true);
    } else if (character === 'vulture') {
      setIsVultureHovered(true);
    } else if (character === 'ironman') {
      setIsIronManHovered(true)
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'spiderman') {
      setIsSpidermanHovered(false);
    } else if (character === 'vulture') {
      setIsVultureHovered(false);
    } else if (character === 'ironman') {
      setIsIronManHovered(false)
    }
  };

  const spidermanClass = isSpidermanHovered ? 'spiderman homecoming' : 'peter-parker homecoming';
  const ironmanClass = isIronManHovered ? 'ironman homecoming' : 'tony-stark homecoming';
  const vultureClass = isVultureHovered ? 'vulture homecoming' : 'drian-toomes homecoming';


  const homeComingImgSrc = "./img/spiderman_movie_img/tom-spiderman/home_coming/"
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
              src="https://www.youtube.com/embed/LjgFtASzrBA" 
              title="[스파이더맨: 홈커밍] 2차 예고편" 
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
            <img src={`${commonImgSrc}/tom_spider_man_1_logo.png`} alt="" />
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
                <img src={`${commonImgSrc}/tom_spider_man_1_poster.jpg`} alt="" />
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
                        <img src={isSpidermanHovered  ? `${homeComingImgSrc}homecoming-spiderman.jpg` : `${homeComingImgSrc}homecoming-peter_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='homecoming-character-name'>{isSpidermanHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='homecoming-acter'>Tom-Holland</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={ironmanClass} 
                    onMouseEnter={() => onHoverEnter('ironman')}
                    onMouseLeave={() => onHoverLeave('ironman')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isIronManHovered  ? `${homeComingImgSrc}homecoming-ironman.jpg` : `${homeComingImgSrc}homecoming-tony_stark.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='homecoming-character-name'>{isIronManHovered  ? 'iron-man' : 'tony-stark'}</span></li>
                          <li><span className='homecoming-acter'>Robert-Downey-Jr</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='michelle-jones homecoming'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${homeComingImgSrc}homecoming-michelle_jones_watson.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='homecoming-character-name'>michelle-jones</span></li>
                          <li><span className='homecoming-acter'>Zendaya</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='ned homecoming'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${homeComingImgSrc}homecoming-ned.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='homecoming-character-name'>Ned-Leeds</span></li>
                          <li><span className='homecoming-acter'>Jacob-Batalon</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={vultureClass} 
                  onMouseEnter={() => onHoverEnter('vulture')}
                  onMouseLeave={() => onHoverLeave('vulture')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isVultureHovered  ? `${homeComingImgSrc}homecoming-vulture.jpg` : `${homeComingImgSrc}homecoming-adrian_toomes.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='homecoming-character-name'>{isVultureHovered  ? 'vulture' : 'drian-toomes'}</span></li>
                          <li><span className='homecoming-acter'>Michael-Keaton</span></li>
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
        </div>
      </section>
    </>
  );
};