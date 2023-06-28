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
    spidermanDisney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man/4q3uPuyBeCkw?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-SPIDERMAN-EN-ShowPageMasthead-Marvel_ShowPageMasthead_SpiderMan-NA',
      label: 'Go To Spider-Man Movie in disney+',
    },
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className="section1">
        <div className="sec1-container">
          <Link to={spidermanLink.spidermanDisney.url} target="_blink">
            <div className="sec1-content">
              <span>Available right now on Disney+.</span>
              <img src="./img/spiderman-1/disneybtn_asset2x_6.png" alt="" />
            </div>
          </Link>
        </div>
      </section>
      <section className="section2">
        <div className="sec2-container">
          <div className="main-title-img">
            <img src="./img/spiderman-1/spider-man_lob_log_def_01.png" alt="" />
            <div className="awards">
              <div className="awards-list">
                <img src="./img/spiderman-1/award_symbol.svg" alt="" />
                <div className="awards-title">
                  <h2>Oscar Academy Award <br /> Best Original Score Nominations</h2>
                </div>
              </div>
              <div className="awards-list">
                <img src="./img/spiderman-1/award_symbol.svg" alt="" />
                <div className="awards-title">
                  <h2 className='add-padding'>MTV Movie Awards <br /> Best Action Sequence</h2>
                </div>
              </div>
              <div className="awards-list">
                <img src="./img/spiderman-1/award_symbol.svg" alt="" />
                <div className="awards-title">
                  <h2>BAFTA Awards <br /> Best Original Score Nominations</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="sec3-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className='sub-title'>
              <ul>
                <li>
                  <button className="movie-choice" onClick={onClickSpiderMan1Toggle}>
                    <span className={`sub-title ${isSpiderMan1 ? 'active' : ''}`}>Spider-Man-1</span>
                  </button>
                </li>
                <li>
                  <button className="movie-choice" onClick={onClickSpiderMan2Toggle}>
                    <span className={`sub-title ${isSpiderMan2 ? 'active' : ''}`}>Spider-Man-2</span>
                  </button>
                </li>
                <li>
                  <button className="movie-choice" onClick={onClickSpiderMan3Toggle}>
                    <span className={`sub-title ${isSpiderMan3 ? 'active' : ''}`}>Spider-Man-3</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className={`trailer-container ${isSpiderMan1 ? 'show-menu' : 'hide-menu'}`}>
              <div className="trailer-box">
                <iframe
                  src="https://www.youtube.com/embed/WMxTe3eouQc"
                  title="스파이더맨 -- 예고편"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="movie-intro">
                <div className="title">
                  <h2>overview</h2>
                </div>
                <div className="movie-story">
                  <p>Average teenager Peter Parker is transformed into an extraordinary superhero after he is accidentally bitten by a radioactive spider. When his beloved uncle is savagely murdered during a robbery, young Peter vows to use his powers to avenge his death. Deeming himself "Spider-Man," he sets about ridding the streets of crime, bringing him into conflict with malevolent super-villain "Green Goblin."</p>
                </div>
                <div className="movie-info">
                  <ul>
                    <li>
                      <div className="detail-info">
                        <p>
                          director <br />
                          <span>Sam Raimi</span>
                        </p>
                      </div>
                    </li>
                    <li>
                    <div className="detail-info">
                        <p>
                          cast <br />
                          <span>Tobey Maguire, Kirsten Dunst and Willem Dafoe</span>
                        </p>
                      </div>
                    </li>
                    <li>
                    <div className="detail-info">
                        <p>
                          release date <br />
                          <span>May 3, 2002</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="movie-poster">
                  <img src="./img/spiderman-1/spiderman1.jpg" alt="" />
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
                        <p className='review-travers'>
                          Maguire and Dunst keep Spider-Man on a high with their sweet-sexy yearning, spinning a web of dazzle and delicacy that might just restore the good name of movie escapism.
                        </p>
                        <span>Rolling Stone - Peter Travers</span>
                      </div>
                    </li>
                    <li className='review-list'>
                      <div className="review">
                        <p className='review-enzi'>
                          Everything feels more real and urgent, it actually feels more human than some live-action films we get to see.
                        </p>
                        <span>WXIX-TV (Cincinnati, OH) - TT STERN-ENZI</span>
                      </div>
                    </li>
                    <li className='review-list'>
                      <div className="review">
                        <p>
                          There's a particular upside-down, half-masked kiss that instantly becomes one of movie history's more memorable smooches. It's the kiss to send any teenaged boy on a spinning high, as well as launching the new age of arachnophilia.
                        </p>
                        <span>The Globe and Mail (Toronto) - Liam Lacey</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rating">
                <div className="rating-title">
                  <h2>rating</h2>
                </div>
              </div>
            </div>
            <div className={`trailer-container ${isSpiderMan2 ? 'show-menu' : 'hide-menu'}`}>
              <div className="trailer-box">
                <iframe
                  src="https://www.youtube.com/embed/B1R2d6eEaC4"
                  title="스파이더맨 2 -- 예고편"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="movie-intro">
                <div className="title">
                  <h2>overview</h2>
                </div>
                <div className="movie-story">
                  <p>In “Spider-Man 2,” Tobey Maguire returns as the mild-mannered Peter Parker, who is juggling the delicate balance of his dual life as college student and a superhuman crime fighter. Peter's life becomes even more complicated when he confronts a new nemesis, the brilliant Otto Octavius who has been reincarnated as the maniacal and multi-tentacled "Doc Ock." When Doc Ock kidnaps MJ, Spider-Man must swing back into action as the adventure reaches new heights of unprecedented excitement.</p>
                </div>
                <div className="movie-info">
                  <ul>
                    <li>
                      <div className="detail-info">
                        <p>
                          director <br />
                          <span>Sam Raimi</span>
                        </p>
                      </div>
                    </li>
                    <li>
                    <div className="detail-info">
                        <p>
                          cast <br />
                          <span>Tobey Maguire, Kirsten Dunst and Alfred Molina</span>
                        </p>
                      </div>
                    </li>
                    <li>
                    <div className="detail-info">
                        <p>
                          release date <br />
                          <span>June 30, 2004</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="movie-poster">
                  <img src="./img/spiderman-1/spiderman2.png" alt="" />
                </div>
              </div>
              <div className="movie-review">
                <div className="title">
                  <h2>review</h2>
                </div>
                <div className="review-box">
                  <ul>
                    <li>
                      <p>
                        Spider-Man 2 is the best superhero movie since the modern genre began with 'Superman' (1978). (Omitted) This movie is a superhero movie for people who don't go to see superhero movies, and it's also a movie that people who go to see superhero movies crave.
                      </p>
                      <span>Roger Ebert</span>
                    </li>
                    <li>
                      <div className="review-title">
                        <h2>Another excellent superhero movie</h2>
                      </div>
                      <div className="review">
                        <p>
                          This is a movie that surpasses the original one on many different levels! It has a better villain, a better story and, most of all, a better message. The movie is about Peter Parker who loses faith in what he does, so he loses his powers. Tobey Maguire is magnificent in this movie and he plays so well off of all the other actors in the movie. Alfred Molina is great as the villain and, as always, J.K. Simmons steal every single scene in which he is present. This is really one of the best superhero movies that has ever been made.
                        </p>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`trailer-container ${isSpiderMan3 ? 'show-menu' : 'hide-menu'}`}>
              <div className="trailer-box">
                <iframe
                  src="https://www.youtube.com/embed/QzSkaWmjIpY"
                  title="스파이더맨 3 -- 예고편"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="movie-intro">
                <div className="title">
                  <h2>overview</h2>
                </div>
                <div className="movie-story">
                  <p>Peter Parker finally has the girl of his dreams, Mary Jane Watson, and New York City is in the throes of Spider-mania! But when a strange alien symbiote turns Spider-Man's suit black, his darkest demons come to light, changing Spider-Man inside as well as out. Spider-Man is in for the fight of his life against a lethal mix of villains—the deadly Sandman, Venom, and the New Goblin—as well as the enemy within himself.</p>
                </div>
                <div className="movie-info">
                  <ul>
                    <li>
                      <div className="detail-info">
                        <p>
                          director <br />
                          <span>Sam Raimi</span>
                        </p>
                      </div>
                    </li>
                    <li>
                    <div className="detail-info">
                        <p>
                          cast <br />
                          <span>Tobey Maguire, Kirsten Dunst, Thomas Haden Church, Topher Grace and James Franco</span>
                        </p>
                      </div>
                    </li>
                    <li>
                    <div className="detail-info">
                        <p>
                          release date <br />
                          <span>May 3, 2002</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="movie-poster">
                  <img src="./img/spiderman-1/spiderman3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
