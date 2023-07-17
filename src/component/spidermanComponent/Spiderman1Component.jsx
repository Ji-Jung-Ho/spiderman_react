import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Spiderman1Component({샘스파}) {
  const [isSpiderMan1, setIsSpiderMan1] = useState(true);
  const [isSpiderMan2, setIsSpiderMan2] = useState(false);
  const [isSpiderMan3, setIsSpiderMan3] = useState(false);
  const [isSpidermanHovered, setIsSpidermanHovered] = useState(false);
  const [isGoblinHovered, setIsGoblinHovered] = useState(false);

  const onSpidermanHoverEnter = () => {
    setIsSpidermanHovered(true);
  };

  const onSpidermanHoverLeave = () => {
    setIsSpidermanHovered(false);
  };

  const onGoblinHoverEnter = () => {
    setIsGoblinHovered(true);
  };

  const onGoblinHoverLeave = () => {
    setIsGoblinHovered(false);
  };
  
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

  const samSrc = "./img/spiderman_movie_img/sam-spiderman/"
  const imgSrc = "./img/spiderman_movie_img/";

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
              <img src={`${imgSrc}/disneybtn_asset2x_6.png`} alt="" />
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
            <img src={`${samSrc}/sam_spider_man_${isSpiderMan1 ? '1' : isSpiderMan2 ? '2' : isSpiderMan3 ? '3' : ''}_logo.png`} alt="" />
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
            <img src={`${samSrc}/sam_spider_man_${isSpiderMan1 ? '1' : isSpiderMan2 ? '2' : isSpiderMan3 ? '3' : ''}_logo.png`} alt="" />
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
                <p>
                  "Spider-Man" centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: "With great power comes great responsibility."
                </p>
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
                <img src={`${samSrc}/sam_spider_man_1_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul>
                  <li className={isSpidermanHovered  ? 'spiderman' : 'peter-parker'} onMouseEnter={onSpidermanHoverEnter} onMouseLeave={onSpidermanHoverLeave}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSpidermanHovered  ? `${samSrc}spiderman1_spiderman_character.jpg` : `${samSrc}spiderman1_peter-parker_character.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>{isSpidermanHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='actor'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_mary-jane-watson_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>mary-jane</span></li>
                          <li><span className='acter'>kirsten dunst</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={isGoblinHovered  ? 'green-goblin' : 'norman-osborn'} onMouseEnter={onGoblinHoverEnter} onMouseLeave={onGoblinHoverLeave}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isGoblinHovered  ? `${samSrc}spiderman1_green-goblin_character.jpg` : `${samSrc}spiderman1_norman-osborn_character.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>{isGoblinHovered  ? 'green-goblin' : 'norman-osborn'}</span></li>
                          <li><span className='actor'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_harry-osborn_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>harry-osborn</span></li>
                          <li><span className='acter'>James Franco</span></li>
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
                        Maguire and Dunst keep Spider-Man on a high with their sweet-sexy yearning, spinning a web of dazzle and delicacy that might just restore the good name of movie escapism.
                      </p>
                      <span>Rolling Stone - Peter Travers</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        Everything feels more real and urgent, it actually feels more human than some live-action films we get to see.
                      </p>
                      <span>WXIX-TV (Cincinnati, OH) - TT STERN-ENZI</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
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
              <p>
                When a failed nuclear fusion experiment results in an explosion that kills his wife, Dr. Otto Octavius (Alfred Molina) is transformed into Dr. Octopus, a cyborg with deadly metal tentacles. Doc Ock blames Spider-Man (Tobey Maguire) for the accident and seeks revenge. Meanwhile, Spidey's alter ego, Peter Parker, faces fading powers and self-doubt. Complicating matters are his best friend's (James Franco) hatred for Spider-Man and his true love's (Kirsten Dunst) sudden engagement to another man.
              </p>
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
                <img src={`${samSrc}/sam_spider_man_2_poster.png`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_spiderman_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_mary-jane-watson_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box goblin">
                        <img className='goblin' src="./img/spiderman_movie_img/sam-spiderman/spiderman1_norman-osborn_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_harry-osborn_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
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
                        Amazingly, it's not all the visual splendor or killer action sequences that elevate Spider-Man 2 above its predecessor and almost every superhero movie that has come before.
                      </p>
                      <span>Newsweek</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                      With special effects so convincing you don't even think about them, a head-case hero and a three-dimensional villain who is his equal, socko Spider-Man 2 has something for everyone.
                      </p>
                      <span>USA TodayMike - Clark</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
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
                  Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.
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
              </div>
              <div className="movie-poster">
                <img src={`${samSrc}/sam_spider_man_3_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_spiderman_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_mary-jane-watson_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box goblin">
                        <img className='goblin' src="./img/spiderman_movie_img/sam-spiderman/spiderman1_norman-osborn_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="img-box">
                        <img src="./img/spiderman_movie_img/sam-spiderman/spiderman1_harry-osborn_character.jpg" alt="" />
                      </div>
                      <div className="caption-box">
                        <ul>
                          <li><span className='character-name-1'>spider-man</span></li>
                          <li><span className='character-name-2'>peter-parker</span></li>
                          <li><span className='acter'>Tobey Maguire</span></li>
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
                        Amazingly, it's not all the visual splendor or killer action sequences that elevate Spider-Man 2 above its predecessor and almost every superhero movie that has come before.
                      </p>
                      <span>Newsweek</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                      With special effects so convincing you don't even think about them, a head-case hero and a three-dimensional villain who is his equal, socko Spider-Man 2 has something for everyone.
                      </p>
                      <span>USA TodayMike - Clark</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
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
                  <img src={`${imgSrc}amazing/amazing_spider_man_1_poster.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man</p>
                    <p className='production-year'>2012</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}tom-spiderman/tom_spider_man_1_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Homecoming</p>
                    <p className='production-year'>2017</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/miles" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}miles/miles_1_card_1.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>into the spider-verse</p>
                    <p className='production-year'>2018</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}venom/venom_1_card_1.jpg`} alt="" />
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
