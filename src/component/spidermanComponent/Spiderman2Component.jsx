import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Spiderman2Component () {
  const [isAmazingSpiderMan1, setIsAmazingSpiderMan1] = useState(true);
  const [isAmazingSpiderMan2, setIsAmazingSpiderMan2] = useState(false);

  const onClickAmazing1Toggle = () => {
    setIsAmazingSpiderMan1(true);
    setIsAmazingSpiderMan2(false);
  };

  const onClickAmazing2Toggle = () => {
    setIsAmazingSpiderMan1(false);
    setIsAmazingSpiderMan2(true);
  };

  const amazingLink = {
    amazing1_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/the-amazing-spider-man/1XUNbIGBs7TO',
      label: 'Go To Amazing-Spider-Man Movie in disney+',
    },
    amazing2_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/the-amazing-spider-man-2/4h3EaB5DYH6g',
      label: 'Go To Amazing-Spider-Man Movie in disney+',
    },
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className="section1">
        <div className="sec1-container">
          <Link to={`${isAmazingSpiderMan1 ? amazingLink.amazing1_Disney.url : isAmazingSpiderMan2 ? amazingLink.amazing2_Disney.url : ''}`} target="_blink">
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
                <span className={`sub-title ${isAmazingSpiderMan1 ? 'active' : ''}`}>Amazing-Spider-Man-1</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickAmazing2Toggle}>
                <span className={`sub-title ${isAmazingSpiderMan2 ? 'active' : ''}`}>Amazing-Spider-Man-2</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isAmazingSpiderMan1 ? 'amazing-spiderman1' : isAmazingSpiderMan2 ? 'amazing-spiderman2' : ''}`}>
        <div className="sec3-container">
          <div className="main-title-img">
            <img src={`./img/spiderman_movie_img/amazing_spider_man${isAmazingSpiderMan1 ? '1' : isAmazingSpiderMan2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="sec4-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className={`trailer-container ${isAmazingSpiderMan1 ? 'show-trailer' : 'hide-trailer'}`}>
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
            <div className={`trailer-container ${isAmazingSpiderMan2 ? 'show-trailer' : 'hide-trailer'}`}>
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
            <img src={`./img/spiderman_movie_img/amazing_spider_man${isAmazingSpiderMan1 ? '1' : isAmazingSpiderMan2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className="sec6-container">
          <div className={`spiderman-movie-info ${isAmazingSpiderMan1 ? 'show-movie-info' : 'hide-movie-info'}`}>
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
                <img src="./img/spiderman_movie_img/theamazingspiderman_card.jpg" alt="" />
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
                        Maguire and Dunst keep Spider-Man on a high with their sweet-sexy yearning, spinning a web of dazzle and delicacy that might just restore the good name of movie escapism.
                      </p>
                      <span>Rolling Stone - Peter Travers</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-2'>
                        Everything feels more real and urgent, it actually feels more human than some live-action films we get to see.
                      </p>
                      <span>WXIX-TV (Cincinnati, OH) - TT STERN-ENZI</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-3'>
                        There's a particular upside-down, half-masked kiss that instantly becomes one of movie history's more memorable smooches. It's the kiss to send any teenaged boy on a spinning high, as well as launching the new age of arachnophilia.
                      </p>
                      <span>The Globe and Mail (Toronto) - Liam Lacey</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isAmazingSpiderMan2 ? 'show-movie-info' : 'hide-movie-info'}`}>
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
                  <li className={'review-list'}>
                    <div className="review">
                      <p className='review-spider2'>
                        Amazingly, it's not all the visual splendor or killer action sequences that elevate Spider-Man 2 above its predecessor and almost every superhero movie that has come before.
                      </p>
                      <span>Newsweek</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-spider2'>
                      With special effects so convincing you don't even think about them, a head-case hero and a three-dimensional villain who is his equal, socko Spider-Man 2 has something for everyone.
                      </p>
                      <span>USA TodayMike - Clark</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review">
                      <p className='review-spider2'>
                        It's refreshing to witness a superhero with doubts. Maguire and Dunst again display the depth of talent they bring to these roles by injecting such everydayness into larger-than-life characters.
                      </p>
                      <span>The Hollywood Reporter - Kirk Honeycutt</span>
                      <img src="./img/etc-img/amazing_spider_red_logo.png" alt="" />
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
                <Link to="/amazing">
                  <img src="./img/spiderman_movie_img/theamazingspiderman_card.jpg" alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Trilogy</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom">
                  <img src="./img/spiderman_movie_img/spider-manhomecoming_card.jpg" alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Homecoming</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles">
                  <img src="./img/spiderman_movie_img/intothespiderverse_card.jpg" alt="" />
                  <div className="card-info">
                    <p className='card-name'>into the spider-verse</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom">
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
