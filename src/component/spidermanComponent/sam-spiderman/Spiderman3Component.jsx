import React, {useState} from 'react';

export default function Spiderman3Component () {
  const [isSpidermanHovered, setIsSpidermanHovered] = useState(false);
  const [isSandManHovered, setIsSandManHovered] = useState(false);
  const [isGreenGoblinJrHovered, setIsGreenGoblinJrHovered] = useState(false);
  const [isVenomHovered, setIsVenomHovered] = useState(false);
  

  const onHoverEnter = (character) => {
    if (character === 'spider-man') {
      setIsSpidermanHovered(true);
    } else if (character === 'sand-man') {
      setIsSandManHovered(true);
    } else if (character === 'green-goblin-jr') {
      setIsGreenGoblinJrHovered(true);
    } else if (character === 'venom') {
      setIsVenomHovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'spider-man') {
      setIsSpidermanHovered(false);
    } else if (character === 'sand-man') {
      setIsSandManHovered(false);
    } else if (character === 'green-goblin-jr') {
      setIsGreenGoblinJrHovered(false);
    } else if (character === 'venom') {
      setIsVenomHovered(false);
    }
  };

  const spiderman3Class = isSpidermanHovered  ? 'spider-man spiderman3' : 'peter-parker spiderman3';
  const sandManClass = isSandManHovered  ? 'sand-man spiderman3' : 'Flint-Marko spiderman3';
  const greenGoblinJrClass = isGreenGoblinJrHovered  ? 'green-goblin-jr spiderman3' : 'harry-osborn spiderman3';
  const venomClass = isVenomHovered  ? 'venom spiderman3' : 'eddie-brock spiderman3';

  const spiderman3ImgSrc = "./img/spiderman_movie_img/sam-spiderman/spiderman_3/"
  const CommonImgSrc = "./img/spiderman_movie_img/sam-spiderman/"

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
            <img src={`${CommonImgSrc}/sam_spider_man_3_logo.png`} alt="" />
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
                <img src={`${CommonImgSrc}/sam_spider_man_3_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content">
                <ul className='character-ul'>
                  <li className={spiderman3Class} 
                    onMouseEnter={() => onHoverEnter('spider-man')}
                    onMouseLeave={() => onHoverLeave('spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSpidermanHovered  ? `${spiderman3ImgSrc}spiderman3-spider_man.jpg` : `${spiderman3ImgSrc}spiderman3-peter_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='spiderman3-character-name'>{isSpidermanHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='spiderman3-acter'>Tobey-Maguire</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='merry-june spiderman3'>
                    <a href="#!">
                      <div className="img-box">
                      <img src={`${spiderman3ImgSrc}spiderman3-mary_jane_watson.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='spiderman3-character-name'>mary-jane</span></li>
                          <li><span className='spiderman3-acter'>kirsten-dunst</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={sandManClass} 
                  onMouseEnter={() => onHoverEnter('sand-man')}
                  onMouseLeave={() => onHoverLeave('sand-man')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSandManHovered  ? `${spiderman3ImgSrc}spiderman3-sand_man.jpg` : `${spiderman3ImgSrc}spiderman3-flint_marko.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='spiderman3-character-name'>{isSandManHovered  ? 'sand-man' : 'flint-marko'}</span></li>
                          <li><span className='spiderman3-acter'>Thomas-Haden-Church</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={venomClass} 
                  onMouseEnter={() => onHoverEnter('venom')}
                  onMouseLeave={() => onHoverLeave('venom')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isVenomHovered  ? `${spiderman3ImgSrc}spiderman3-venom.jpg` : `${spiderman3ImgSrc}spiderman3-eddie_brock_jr.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='spiderman3-character-name'>{isVenomHovered  ? 'venom' : 'Eddie-Brock'}</span></li>
                          <li><span className='spiderman3-acter'>Topher-Grace</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={greenGoblinJrClass} 
                  onMouseEnter={() => onHoverEnter('green-goblin-jr')}
                  onMouseLeave={() => onHoverLeave('green-goblin-jr')}
                  >
                    <a href="#!">
                      <div className="img-box">
                        <img src={isGreenGoblinJrHovered  ? `${spiderman3ImgSrc}spiderman3-green_goblin_jr.jpg` : `${spiderman3ImgSrc}spiderman3-harry_osborn.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='spiderman3-character-name'>{isGreenGoblinJrHovered  ? 'green-goblin' : 'harry-osborn'}</span></li>
                          <li><span className='spiderman3-acter'>James-Franco</span></li>
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
