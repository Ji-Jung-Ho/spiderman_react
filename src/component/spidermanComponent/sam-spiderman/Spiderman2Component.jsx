import React, {useState} from 'react';

export default function Spiderman2Component () {
  const [isSpidermanHovered, setIsSpidermanHovered] = useState(false);
  const [isOctopusHovered, setIsOctopusHovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'spider-man') {
      setIsSpidermanHovered(true);
    } else if (character === 'octopus') {
      setIsOctopusHovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'spider-man') {
      setIsSpidermanHovered(false);
    } else if (character === 'octopus') {
      setIsOctopusHovered(false);
    }
  };

  const spiderman2Class = isSpidermanHovered ? 'spider-man' : 'peter-parker';
  const octopusClass = isOctopusHovered ? 'dr-octopus' : 'octavius';

  const spiderman2ImgSrc = "./img/spiderman_movie_img/sam-spiderman/spiderman_2/";
  const commonImgSrc = "./img/spiderman_movie_img/sam-spiderman/";

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
                  src="https://www.youtube.com/embed/B1R2d6eEaC4"
                  title="스파이더맨 2 -- 예고편"
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
            <img src={`${commonImgSrc}/sam_spider_man_2_logo.png`} alt="" />
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
                <img src={`${commonImgSrc}sam_spider_man_2_poster.png`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul className='character-ul'>
                  <li className={spiderman2Class} 
                    onMouseEnter={() => onHoverEnter('spider-man')}
                    onMouseLeave={() => onHoverLeave('spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSpidermanHovered  ? `${spiderman2ImgSrc}spiderman2-spider_man.jpg` : `${spiderman2ImgSrc}spiderman2-peter_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isSpidermanHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='acter'>Tobey-Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='mary-jane'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${spiderman2ImgSrc}spiderman2-mary_jane_watson.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>mary-jane</span></li>
                          <li><span className='acter'>kirsten-dunst</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={octopusClass} 
                  onMouseEnter={() => onHoverEnter('octopus')}
                  onMouseLeave={() => onHoverLeave('octopus')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isOctopusHovered  ? `${spiderman2ImgSrc}spiderman2-dr_octopus.jpg` : `${spiderman2ImgSrc}spiderman2-octavius.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>{isOctopusHovered  ? 'dr-octopus' : 'octavius'}</span></li>
                          <li><span className='acter'>Alfred-Molina</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='harry-osborn'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${spiderman2ImgSrc}spiderman2-harry_osborn.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='character-name'>harry-osborn</span></li>
                          <li><span className='acter'>James-Franco</span></li>
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
        </div>
      </section>
    </>
  );
};