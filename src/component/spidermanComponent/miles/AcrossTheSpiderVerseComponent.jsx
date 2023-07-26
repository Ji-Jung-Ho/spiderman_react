import React, {useState} from 'react';

export default function AcrossTheSpiderVerseComponent () {

  const [isSpiderman1Hovered, setIsSpiderman1Hovered] = useState(false);
  const [isSpiderman2Hovered, setIsSpiderman2Hovered] = useState(false);
  const [isSpiderman3Hovered, setIsSpiderman3Hovered] = useState(false);
  const [isSpiderman4Hovered, setIsSpiderman4Hovered] = useState(false);
  const [isSpiderman5Hovered, setIsSpiderman5Hovered] = useState(false);
  const [isSpiderman6Hovered, setIsSpiderman6Hovered] = useState(false);
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
    } else if (character === 'spiderman6') {
      setIsSpiderman6Hovered(true);
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
    } else if (character === 'spiderman6') {
      setIsSpiderman6Hovered(false);
    } else if (character === 'villain1') {
      setIsVillain1Hovered(false);
    } else if (character === 'villain2') {
      setIsVillain2Hovered(false);
    }
  };

  const spiderman1Class = isSpiderman1Hovered ? 'spider-man1 miles2' : 'miles-morales miles2';
  const spiderman2Class = isSpiderman3Hovered ? 'spider-man3 miles2' : 'gwen-stacy miles2';
  const spiderman3Class = isSpiderman2Hovered ? 'spider-man2 miles2' : 'peter-b-parker miles2';
  const spiderman4Class = isSpiderman4Hovered ? 'spider-man4 miles2' : 'peter-b-parker miles2';
  const spiderman5Class = isSpiderman5Hovered ? 'spider-man5 miles2' : 'peter-porker miles2';
  const spiderman6Class = isSpiderman6Hovered ? 'spider-man6 miles2' : 'peter-porker miles2';
  const villain1Class = isVillain1Hovered ? 'prowler miles2' : 'aaron-davis miles2';

  const miles2ImgSrc = "./img/spiderman_movie_img/miles/across_the_spider_verse/"
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
              src="https://www.youtube.com/embed/aa0WjdSYdCk" 
              title="[스파이더맨: 어크로스 더 유니버스] 인터내셔널 예고편" 
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
            <img className='miles' src={`${commonImgSrc}/miles_2_logo.png`} alt="" />
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
                  Miles Morales returns for the next chapter of the Oscar®-winning Spider-Verse saga, an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team of Spider-People to face off with a villain more powerful than anything they have ever encountered.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>
                    <span>Joaquim Dos Santos</span>
                    <span>Kemp Powers</span>
                    <span>Justin K. Thompson</span>
                  </div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>
                    <span>Shameik Moore</span>
                    <span>Hailee Steinfeld</span>
                    <span>Brian Tyree Henry</span>
                  </div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Jun 2, 2023</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${commonImgSrc}/miles_2_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content miles2">
                <ul className='character-ul miles2'>
                  <li className={spiderman1Class} 
                    onMouseEnter={() => onHoverEnter('spiderman1')}
                    onMouseLeave={() => onHoverLeave('spiderman1')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSpiderman1Hovered  ? `${miles2ImgSrc}atsv-miles_spider_man.jpg` : `${miles2ImgSrc}atsv-miles.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles2-character-name'>{isSpiderman1Hovered  ? 'spider-man' : 'miles-morales'}</span></li>
                          <li><span className='miles2-acter'>Shameik Moore</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman2Class}
                  onMouseEnter={() => onHoverEnter('spiderman2')}
                  onMouseLeave={() => onHoverLeave('spiderman2')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderman2Hovered  ? `${miles2ImgSrc}atsv-spider_gwen_stacy.jpg` : `${miles2ImgSrc}atsv-gwen_stacy.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderman2Hovered  ? 'spider-gwin' : 'gwen-stacy'}</span></li>
                          <li><span className='miles2-acter'>Hailee Steinfeld</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman3Class}
                  onMouseEnter={() => onHoverEnter('spiderman3')}
                  onMouseLeave={() => onHoverLeave('spiderman3')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderman3Hovered  ? `${miles2ImgSrc}atsv-peter_b_parker_spider_man.jpg` : `${miles2ImgSrc}atsv-peter_b_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderman3Hovered  ? 'spider-man' : 'peter-b-parker'}</span></li>
                          <li><span className='miles2-acter'>Jake Johnson</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman4Class}
                  onMouseEnter={() => onHoverEnter('spiderman4')}
                  onMouseLeave={() => onHoverLeave('spiderman4')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderman4Hovered  ? `${miles2ImgSrc}atsv-spider_woman.jpg` : `${miles2ImgSrc}atsv-jessica_drew.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderman4Hovered  ? 'spider-woman' : 'jessica-drew'}</span></li>
                          <li><span className='miles2-acter'>Issa Rae</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman5Class}
                  onMouseEnter={() => onHoverEnter('spiderman5')}
                  onMouseLeave={() => onHoverLeave('spiderman5')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderman5Hovered  ? `${miles2ImgSrc}atsv-spider_man_india.jpg` : `${miles2ImgSrc}atsv-pavitr_prabhakar.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderman5Hovered  ? 'spider-man-india' : 'pavitr-prabhakar'}</span></li>
                          <li><span className='miles2-acter'>Karan Soni</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderman6Class}
                  onMouseEnter={() => onHoverEnter('spiderman6')}
                  onMouseLeave={() => onHoverLeave('spiderman6')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderman6Hovered  ? `${miles2ImgSrc}atsv-spider_punk.jpg` : `${miles2ImgSrc}atsv-hobie_brown.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderman6Hovered  ? 'spider-punk' : 'hobie-brown'}</span></li>
                          <li><span className='miles2-acter'>Daniel Kaluuya</span></li>
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
                          <img src={isVillain1Hovered  ? `${miles2ImgSrc}atsv-spider_man_2099.jpg` : `${miles2ImgSrc}atsv-miguel_o_hara.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='miles2-character-name'>{isVillain1Hovered  ? 'spider-man-2099' : 'miguel-o-hara'}</span></li>
                            <li><span className='miles2-acter'>Oscar Isaac</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className='villanin miles2'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles2ImgSrc}atsv-the_spot.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles2-character-name'>the-spot</span></li>
                          <li><span className='miles2-acter'>Jason Schwartzman</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='villanin miles2'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles2ImgSrc}atsv-mayday_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles2-character-name'>mayday-parker</span></li>
                          <li><span className='miles2-acter'></span></li>
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
