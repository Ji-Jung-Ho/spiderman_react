import React, {useState} from 'react';

export default function NewSpiderVerseComponent () {

  const [isSpiderman1Hovered, setIsSpiderman1Hovered] = useState(false);
  const [isSpiderman2Hovered, setIsSpiderman2Hovered] = useState(false);
  const [isSpiderman3Hovered, setIsSpiderman3Hovered] = useState(false);
  const [isSpiderman4Hovered, setIsSpiderman4Hovered] = useState(false);
  const [isSpiderman5Hovered, setIsSpiderman5Hovered] = useState(false);
  const [isVillain1Hovered, setIsVillain1Hovered] = useState(false);
  const [isVillain2Hovered, setIsVillain2Hovered] = useState(false);


  const onHoverEnter = (character) => {
    if (character === 'spiderman1') {
      setIsSpiderman1Hovered(true);
    } else if (character === 'spiderman2') {
      setIsSpiderman2Hovered(true);
    } else if (character === 'spiderman3') {
      setIsSpiderman3Hovered(true);
    } else if (character === 'spiderman4') {
      setIsSpiderman4Hovered(true);
    } else if (character === 'spiderman5') {
      setIsSpiderman5Hovered(true);
    } else if (character === 'villain1') {
      setIsVillain1Hovered(true);
    } else if (character === 'villain2') {
      setIsVillain2Hovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'spiderman1') {
      setIsSpiderman1Hovered(false);
    } else if (character === 'spiderman2') {
      setIsSpiderman2Hovered(false);
    } else if (character === 'spiderman3') {
      setIsSpiderman3Hovered(false);
    } else if (character === 'spiderman4') {
      setIsSpiderman4Hovered(false);
    } else if (character === 'spiderman5') {
      setIsSpiderman5Hovered(false);
    } else if (character === 'villain1') {
      setIsVillain1Hovered(false);
    } else if (character === 'villain2') {
      setIsVillain2Hovered(false);
    }
  };

  const spiderman1Class = isSpiderman1Hovered ? 'spider-man1 miles1' : 'miles-morales miles1';
  const spiderman2Class = isSpiderman3Hovered ? 'spider-man3 miles1' : 'gwen-stacy miles1';
  const spiderman3Class = isSpiderman2Hovered ? 'spider-man2 miles1' : 'peter-b-parker miles1';
  const spiderman4Class = isSpiderman4Hovered ? 'spider-man4 miles1' : 'peter-b-parker miles1';
  const spiderman5Class = isSpiderman5Hovered ? 'spider-man5 miles1' : 'peter-porker miles1';
  const villain1Class = isVillain1Hovered ? 'prowler miles1' : 'aaron-davis miles1';
  const villain2Class = isVillain2Hovered ? 'dr-octopus miles1' : 'olivia miles1';

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
                  <li className={spiderman1Class} 
                    onMouseEnter={() => onHoverEnter('spiderman1')}
                    onMouseLeave={() => onHoverLeave('spiderman1')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSpiderman1Hovered  ? `${miles1ImgSrc}newspiderverse-miles_spiderman.jpg` : `${miles1ImgSrc}newspiderverse-miles.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>{isSpiderman1Hovered  ? 'spider-man' : 'miles-morales'}</span></li>
                          <li><span className='miles1-acter'>Shameik Moore</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman2Class}
                  onMouseEnter={() => onHoverEnter('spiderman2')}
                  onMouseLeave={() => onHoverLeave('spiderman2')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderman2Hovered  ? `${miles1ImgSrc}newspiderverse-gwen_spiderman.jpg` : `${miles1ImgSrc}newspiderverse-gwen.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles1-character-name'>{isSpiderman2Hovered  ? 'spider-gwin' : 'gwen-stacy'}</span></li>
                          <li><span className='miles1-acter'>Hailee Steinfeld</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman3Class}
                  onMouseEnter={() => onHoverEnter('spiderman3')}
                  onMouseLeave={() => onHoverLeave('spiderman3')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderman3Hovered  ? `${miles1ImgSrc}newspiderverse-peter_b_parker_spiderman.jpg` : `${miles1ImgSrc}newspiderverse-peter_b_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles1-character-name'>{isSpiderman3Hovered  ? 'spider-man' : 'peter-b-parker'}</span></li>
                          <li><span className='miles1-acter'>Jake Johnson</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman4Class}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-peni_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>Peni-Parker</span></li>
                          <li><span className='miles1-acter'>Kimiko Gleen</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman5Class}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-spiderman_noir.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>Spider-Man-Noir</span></li>
                          <li><span className='miles1-acter'>Nicolas Cage</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman5Class}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-peter_pork.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>Spider-Ham</span></li>
                          <li><span className='miles1-acter'>John Mulaney</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className='villain'>
                <li className={villain1Class} 
                    onMouseEnter={() => onHoverEnter('villain1')}
                    onMouseLeave={() => onHoverLeave('villain1')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isVillain1Hovered  ? `${miles1ImgSrc}newspiderverse-prowler.jpg` : `${miles1ImgSrc}newspiderverse-aaron_davis.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='miles1-character-name'>{isVillain1Hovered  ? 'prowler' : 'aaron-davis'}</span></li>
                            <li><span className='miles1-acter'>Mahershala Ali</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={villain2Class} 
                    onMouseEnter={() => onHoverEnter('villain2')}
                    onMouseLeave={() => onHoverLeave('villain2')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isVillain2Hovered  ? `${miles1ImgSrc}newspiderverse-dr_octopus.jpg` : `${miles1ImgSrc}newspiderverse-olivia.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='miles1-character-name'>{isVillain2Hovered  ? 'dr-octopus' : 'olivia'}</span></li>
                            <li><span className='miles1-acter'>Kathryn Hahn</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className='villanin miles1'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-kingpin.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>kingpin</span></li>
                          <li><span className='miles1-acter'>Liev Schreiber</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='villanin miles1'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles1ImgSrc}newspiderverse-green_goblin.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles1-character-name'>green-goblin</span></li>
                          <li><span className='miles1-acter'>Jorma Tarco</span></li>
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
