import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Spiderman1Component() {
  const [isSpiderMan1, setIsSpiderMan1] = useState(true);
  const [isSpiderMan2, setIsSpiderMan2] = useState(false);
  const [isSpiderMan3, setIsSpiderMan3] = useState(false);

  const onClickSpiderMan1Toggle = () => {
    setIsSpiderMan1(true);
    setIsSpiderMan2(false);
    setIsSpiderMan3(false);
  };

  const onClickSpiderMan2Toggle = () => {
    setIsSpiderMan1(false);
    setIsSpiderMan2(true);
    setIsSpiderMan3(false);
  };

  const onClickSpiderMan3Toggle = () => {
    setIsSpiderMan1(false);
    setIsSpiderMan2(false);
    setIsSpiderMan3(true);
  };

  const spidermanLink = {
    spiderman1_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man/4q3uPuyBeCkw',
      label: 'Go To Spider-Man1 Movie in disney+',
    },
    spiderman2_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/pokember-2/1CNlLz5NUKU6',
      label: 'Go To Spider-Man2 Movie in disney+',
    },
    spiderman3_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man-3/4GJkhwLlLW4D',
      label: 'Go To Spider-Man3 Movie in disney+',
    },
  };

  const onClickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className="section1">
        <div className="sec1-container">
          <Link 
          to={`${isSpiderMan1 ? spidermanLink.spiderman1_Disney.url : isSpiderMan2 ? spidermanLink.spiderman2_Disney.url : isSpiderMan3 ? spidermanLink.spiderman3_Disney.url : ''}`} 
          target="_blink"
          >
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
              <button className="movie-choice" onClick={onClickSpiderMan1Toggle}>
                <span className={`sub-title ${isSpiderMan1 ? 'active' : ''}`}>Spider-Man-1</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickSpiderMan2Toggle}>
                <span className={`sub-title ${isSpiderMan2 ? 'active' : ''}`}>Spider-Man-2</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickSpiderMan3Toggle}>
                <span className={`sub-title ${isSpiderMan3 ? 'active' : ''}`}>Spider-Man-3</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isSpiderMan1 ? 'spiderman1' : isSpiderMan2 ? 'spiderman2' : isSpiderMan3 ? 'spiderman3' : ''}`}>
        <div className="sec3-container">
          <div className="main-title-img">
            <img src={`./img/spiderman_movie_img/spider-man${isSpiderMan1 ? '1' : isSpiderMan2 ? '2' : isSpiderMan3 ? '3' : ''}_logo.png`} alt="" />
            {/* <div className='awards'>
              <div className="awards-list">
                <img src="./img/etc-img/spider_red_logo.png" alt="" />
                <div className="awards-title">
                  <h2>Festival <br /> Winner</h2>
                </div>
              </div>
              <div className="awards-list">
                <img src="./img/etc-img/spider_red_logo.png" alt="" />
                <div className="awards-title">
                  <h2>Best <br /> Director</h2>
                </div>
              </div>
              <div className="awards-list">
                <img src="./img/etc-img/spider_red_logo.png" alt="" />
                <div className="awards-title">
                  <h2>Official <br /> Selection</h2>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="sec4-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className={`trailer-container ${isSpiderMan1 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
                <iframe
                  src="https://www.youtube.com/embed/WMxTe3eouQc"
                  title="스파이더맨 -- 예고편"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className={`trailer-container ${isSpiderMan2 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
                <iframe
                  src="https://www.youtube.com/embed/B1R2d6eEaC4"
                  title="스파이더맨 2 -- 예고편"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className={`trailer-container ${isSpiderMan3 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
                <iframe
                  src="https://www.youtube.com/embed/QzSkaWmjIpY"
                  title="스파이더맨 3 -- 예고편"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section5'>
        <div className="sec5-container">
          <div className="background-img">
            <img src={`./img/spiderman_movie_img/spider-man${isSpiderMan1 ? '1' : isSpiderMan2 ? '2' : isSpiderMan3 ? '3' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className="sec6-container">
          <div className={`spiderman-movie-info ${isSpiderMan1 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
                <p>Average teenager Peter Parker is transformed into an extraordinary superhero after he is accidentally bitten by a radioactive spider. When his beloved uncle is savagely murdered during a robbery, young Peter vows to use his powers to avenge his death. Deeming himself "Spider-Man," he sets about ridding the streets of crime, bringing him into conflict with malevolent super-villain "Green Goblin."</p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>sam raimi</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tobey Maguire, Kirsten Dunst and Willem Dafoe</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'>May 3, 2002</div>
                </div>
              </div>
              <div className="movie-poster">
                <img src="./img/spiderman_movie_img/spiderman1.jpg" alt="" />
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
                      <p>
                        Maguire and Dunst keep Spider-Man on a high with their sweet-sexy yearning, spinning a web of dazzle and delicacy that might just restore the good name of movie escapism.
                      </p>
                      <span>Rolling Stone - Peter Travers</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p>
                        Everything feels more real and urgent, it actually feels more human than some live-action films we get to see.
                      </p>
                      <span>WXIX-TV (Cincinnati, OH) - TT STERN-ENZI</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p>
                      Iconic, Electrifying, Classy, Vibrant, and Emotionally Stimulating, Spider-Man Represents the Gold Standard in Superhero Blockbusters
                      </p>
                      <span>The Globe and Mail (Toronto) - Liam Lacey</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isSpiderMan2 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
              <p>In “Spider-Man 2,” Tobey Maguire returns as the mild-mannered Peter Parker, who is juggling the delicate balance of his dual life as college student and a superhuman crime fighter. Peter's life becomes even more complicated when he confronts a new nemesis, the brilliant Otto Octavius who has been reincarnated as the maniacal and multi-tentacled "Doc Ock." When Doc Ock kidnaps MJ, Spider-Man must swing back into action as the adventure reaches new heights of unprecedented excitement.</p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>sam raimi</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tobey Maguire, Kirsten Dunst and Alfred Molina</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'>June 30, 2004</div>
                </div>
              </div>
              <div className="movie-poster">
                <img src="./img/spiderman_movie_img/spiderman1.jpg" alt="" />
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
                      <p>
                        Amazingly, it's not all the visual splendor or killer action sequences that elevate Spider-Man 2 above its predecessor and almost every superhero movie that has come before.
                      </p>
                      <span>Newsweek</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p>
                      With special effects so convincing you don't even think about them, a head-case hero and a three-dimensional villain who is his equal, socko Spider-Man 2 has something for everyone.
                      </p>
                      <span>USA TodayMike - Clark</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p>
                        It's refreshing to witness a superhero with doubts. Maguire and Dunst again display the depth of talent they bring to these roles by injecting such everydayness into larger-than-life characters.
                      </p>
                      <span>The Hollywood Reporter - Kirk Honeycutt</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isSpiderMan3 ? 'show-movie-info' : 'hide-movie-info'}`}>
          <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
                <p>
                Peter Parker finally has the girl of his dreams, Mary Jane Watson, and New York City is in the throes of Spider-mania! But when a strange alien symbiote turns Spider-Man's suit black, his darkest demons come to light, changing Spider-Man inside as well as out. Spider-Man is in for the fight of his life against a lethal mix of villains—the deadly Sandman, Venom, and the New Goblin—as well as the enemy within himself.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>sam raimi</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tobey Maguire, Kirsten Dunst, Thomas Haden Church, Topher Grace and James Franco</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'>May 4, 2007</div>
                </div>
                {/* <ul>
                  <li>
                    <div className="detail-info">
                      <p>
                        director
                      </p>
                        <span>Sam Raimi</span>
                    </div>
                  </li>
                  <li>
                  <div className="detail-info">
                      <p>
                        cast
                      </p>
                        <span>Tobey Maguire, Kirsten Dunst, Thomas Haden Church, Topher Grace and James Franco</span>
                    </div>
                  </li>
                  <li>
                  <div className="detail-info">
                      <p>
                        release date
                      </p>
                        <span>May 4, 2007</span>
                    </div>
                  </li>
                </ul> */}
              </div>
              <div className="movie-poster">
                <img src="./img/spiderman_movie_img/spiderman3.jpg" alt="" />
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
                      <p>
                        Amazingly, it's not all the visual splendor or killer action sequences that elevate Spider-Man 2 above its predecessor and almost every superhero movie that has come before.
                      </p>
                      <span>Newsweek</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p>
                      With special effects so convincing you don't even think about them, a head-case hero and a three-dimensional villain who is his equal, socko Spider-Man 2 has something for everyone.
                      </p>
                      <span>USA TodayMike - Clark</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p>
                        It's refreshing to witness a superhero with doubts. Maguire and Dunst again display the depth of talent they bring to these roles by injecting such everydayness into larger-than-life characters.
                      </p>
                      <span>The Hollywood Reporter - Kirk Honeycutt</span>
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
                  <img src="./img/spiderman_movie_img/theamazingspiderman_card.jpg" alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src="./img/spiderman_movie_img/spider-manhomecoming_card.jpg" alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Homecoming</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles" onClick={onClickLinkClick}>
                  <img src="./img/spiderman_movie_img/intothespiderverse_card.jpg" alt="" />
                  <div className="card-info">
                    <p className='card-name'>into the spider-verse</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom" onClick={onClickLinkClick}>
                  <img src="./img/spiderman_movie_img/venom_card.jpg" alt="" />
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
