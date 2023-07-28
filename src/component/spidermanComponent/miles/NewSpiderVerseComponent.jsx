import React, {useState} from 'react';

export default function NewSpiderVerseComponent () {

  const [isMilseHovered, setIsMilseHovered] = useState(false);
  const [isGwenStacyHovered, setIsGwenStacyHovered] = useState(false);
  const [isPeterBParkerHovered, setIsPeterBParkerHovered] = useState(false);
  const [isProwlerHovered, setIsProwlerHovered] = useState(false);
  const [isOctopusHovered, setIsOctopusHovered] = useState(false);


  const onHoverEnter = (character) => {
    if (character === 'miles-spider-man') {
      setIsMilseHovered(true);
    } else if (character === 'spider-gwen') {
      setIsGwenStacyHovered(true);
    } else if (character === 'peter-b-parker-spider-man') {
      setIsPeterBParkerHovered(true);
    } else if (character === 'Prowler') {
      setIsProwlerHovered(true);
    } else if (character === 'octopus') {
      setIsOctopusHovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'miles-spider-man') {
      setIsMilseHovered(false);
    } else if (character === 'spider-gwen') {
      setIsGwenStacyHovered(false);
    } else if (character === 'peter-b-parker-spider-man') {
      setIsPeterBParkerHovered(false);
    } else if (character === 'Prowler') {
      setIsProwlerHovered(false);
    } else if (character === 'octopus') {
      setIsOctopusHovered(false);
    }
  };

  const milesSpiderManClass = isMilseHovered ? 'miles-spider-man miles1' : 'miles-morales miles1';
  const gwenSpiderManClass = isGwenStacyHovered ? 'spider-gwen miles1' : 'gwen-stacy miles1';
  const peterBPrakerSpiderManClass = isPeterBParkerHovered ? 'peter-b-paker-spider-man miles1' : 'peter-b-parker miles1';
  const villain1Class = isProwlerHovered ? 'prowler miles1' : 'aaron-davis miles1';
  const villain2Class = isOctopusHovered ? 'dr-octopus miles1' : 'olivia miles1';

  const miles1ImgSrc = "./img/spiderman_movie_img/miles/new_spider_verse/"
  const commonImgSrc = "./img/spiderman_movie_img/miles/"
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
              src="https://www.youtube.com/embed/vhkCBOsOoYY" 
              title="[스파이더맨: 뉴 유니버스] 3차 예고편" 
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
            <img className='miles' src={`${commonImgSrc}/miles_1_logo.png`} alt="" />
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
                  Bitten by a radioactive spider in the subway, Brooklyn teenager Miles Morales suddenly develops mysterious powers that transform him into the one and only Spider-Man. When he meets Peter Parker, he soon realizes that there are many others who share his special, high-flying talents. Miles must now use his newfound skills to battle the evil Kingpin, a hulking madman who can open portals to other universes and pull different versions of Spider-Man into our world.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>
                    <span>Bob Persichetti</span>
                    <span>Peter Ramsey</span>
                    <span>Rodney Rothman</span>
                  </div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>
                    <span>Shameik Moore</span>
                    <span>Jake Johnson</span>
                    <span>Hailee Steinfeld</span>
                    </div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Dec 14, 2018</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${commonImgSrc}/miles_1_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content miles1">
                <ul className='character-ul miles1'>
                  <li className={milesSpiderManClass} 
                    onMouseEnter={() => onHoverEnter('miles-spider-man')}
                    onMouseLeave={() => onHoverLeave('miles-spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isMilseHovered  ? `${miles1ImgSrc}newspiderverse-miles_spiderman.jpg` : `${miles1ImgSrc}newspiderverse-miles.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>{isMilseHovered  ? 'spider-man' : 'miles-morales'}</span></li>
                          <li><span className='miles1-acter'>Shameik-Moore</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={gwenSpiderManClass}
                  onMouseEnter={() => onHoverEnter('spider-gwen')}
                  onMouseLeave={() => onHoverLeave('spider-gwen')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isGwenStacyHovered  ? `${miles1ImgSrc}newspiderverse-gwen_spiderman.jpg` : `${miles1ImgSrc}newspiderverse-gwen.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles1-character-name'>{isGwenStacyHovered  ? 'spider-gwin' : 'gwen-stacy'}</span></li>
                          <li><span className='miles1-acter'>Hailee-Steinfeld</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={peterBPrakerSpiderManClass}
                  onMouseEnter={() => onHoverEnter('peter-b-parker-spider-man')}
                  onMouseLeave={() => onHoverLeave('peter-b-parker-spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isPeterBParkerHovered  ? `${miles1ImgSrc}newspiderverse-peter_b_parker_spiderman.jpg` : `${miles1ImgSrc}newspiderverse-peter_b_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles1-character-name'>{isPeterBParkerHovered  ? 'spider-man' : 'peter-b-parker'}</span></li>
                          <li><span className='miles1-acter'>Jake-Johnson</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='peni-parker miles1'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-peni_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>Peni-Parker</span></li>
                          <li><span className='miles1-acter'>Kimiko-Gleen</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='spider-man-noir milse1'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-spiderman_noir.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>Spider-Man-Noir</span></li>
                          <li><span className='miles1-acter'>Nicolas-Cage</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='spider-ham miles1'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-peter_pork.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>Spider-Ham</span></li>
                          <li><span className='miles1-acter'>John-Mulaney</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className='villain'>
                <li className={villain1Class} 
                    onMouseEnter={() => onHoverEnter('Prowler')}
                    onMouseLeave={() => onHoverLeave('Prowler')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isProwlerHovered  ? `${miles1ImgSrc}newspiderverse-prowler.jpg` : `${miles1ImgSrc}newspiderverse-aaron_davis.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='miles1-character-name'>{isProwlerHovered  ? 'prowler' : 'aaron-davis'}</span></li>
                            <li><span className='miles1-acter'>Mahershala-Ali</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={villain2Class} 
                    onMouseEnter={() => onHoverEnter('octopus')}
                    onMouseLeave={() => onHoverLeave('octopus')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isOctopusHovered  ? `${miles1ImgSrc}newspiderverse-dr_octopus.jpg` : `${miles1ImgSrc}newspiderverse-olivia.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='miles1-character-name'>{isOctopusHovered  ? 'dr-octopus' : 'olivia'}</span></li>
                            <li><span className='miles1-acter'>Kathryn-Hahn</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className='kingpin miles1'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-kingpin.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>kingpin</span></li>
                          <li><span className='miles1-acter'>Liev-Schreiber</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='green-goblin miles1'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-green_goblin.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>green-goblin</span></li>
                          <li><span className='miles1-acter'>Jorma-Tarco</span></li>
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
                        Briskly balancing a dizzying assortment of parts, Marvel's latest (by way of Sony) looks destined to do what only a spider can -- namely, lure vast numbers of fans into its web.
                      </p>
                      <span>CNN - Brian Lowry</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review tom3-review2'>
                        No Way Home is Spider-Man’s most intriguing & fun story yet. Though the multiverse looms large, the film's thoughtful in its focus on Peter's journey.
                      </p>
                      <span>Screen Rant - Mae Abdulbaki</span>
                      <img src="./img/etc-img/spider_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review tom3-review3'>
                        A MASSIVE treat for every Spidey fan out there.
                      </p>
                      <span>User Review - Achyut_Prashast_Singh</span>
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
