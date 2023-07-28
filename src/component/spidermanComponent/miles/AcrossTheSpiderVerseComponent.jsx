import React, {useState} from 'react';

export default function AcrossTheSpiderVerseComponent () {

  const [isMilseHovered, setIsMilseHovered] = useState(false);
  const [isGwenStacyHovered, setIsGwenStacyHovered] = useState(false);
  const [isPeterBParkerHovered, setIsPeterBParkerHovered] = useState(false);
  const [isSpiderWomanHovered, setIsSpiderWomanHovered] = useState(false);
  const [isSpiderManIndiaHovered, setIsSpiderManIndiaHovered] = useState(false);
  const [isSpiderPunkHovered, setIsSpiderPunkHovered] = useState(false);
  const [isSpiderMan2099Hovered, setIsSpiderMan2099Hovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'miles-spider-man') {
      setIsMilseHovered(true);
    } else if (character === 'spider-gwen') {
      setIsGwenStacyHovered(true);
    } else if (character === 'peter-b-parker-spider-man') {
      setIsPeterBParkerHovered(true);
    } else if (character === 'spider-woman') {
      setIsSpiderWomanHovered(true);
    } else if (character === 'spider-man-india') {
      setIsSpiderManIndiaHovered(true);
    } else if (character === 'spider-punk') {
      setIsSpiderPunkHovered(true);
    } else if (character === 'spider-man-2099') {
      setIsSpiderMan2099Hovered(true);
    }
  };

  const onHoverLeave = (character) => {
    if (character === 'miles-spider-man') {
      setIsMilseHovered(false);
    } else if (character === 'spider-gwen') {
      setIsGwenStacyHovered(false);
    } else if (character === 'peter-b-parker-spider-man') {
      setIsPeterBParkerHovered(false);
    } else if (character === 'spider-woman') {
      setIsSpiderWomanHovered(false);
    } else if (character === 'spider-man-india') {
      setIsSpiderManIndiaHovered(false);
    } else if (character === 'spider-punk') {
      setIsSpiderPunkHovered(false);
    } else if (character === 'spider-man-2099') {
      setIsSpiderMan2099Hovered(false);
    }
  };

  const milesSpiderManClass = isMilseHovered ? 'miles-spider-man miles1' : 'miles-morales miles1';
  const gwenSpiderManClass = isGwenStacyHovered ? 'spider-gwen miles1' : 'gwen-stacy miles1';
  const peterBParkerSpiderManClass = isPeterBParkerHovered ? 'peter-b-paker-spider-man miles1' : 'peter-b-parker miles1';
  const spiderWomanClass = isSpiderWomanHovered ? 'spider-woman miles2' : 'jessica_drew miles2';
  const spiderManIndiaClass = isSpiderManIndiaHovered ? 'spider-man-india miles2' : 'pavitr-prabhakar miles2';
  const spiderPunkClass = isSpiderPunkHovered ? 'spider-punk miles2' : 'hobie-brown miles2';
  const spiderMan2099Class = isSpiderMan2099Hovered ? 'spider-man-2099 miles2' : 'miguel-o-hara miles2';

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
                  <li className={milesSpiderManClass} 
                    onMouseEnter={() => onHoverEnter('miles-spider-man')}
                    onMouseLeave={() => onHoverLeave('miles-spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isMilseHovered  ? `${miles2ImgSrc}atsv-miles_spider_man.jpg` : `${miles2ImgSrc}atsv-miles.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles2-character-name'>{isMilseHovered  ? 'spider-man' : 'miles-morales'}</span></li>
                          <li><span className='miles2-acter'>Shameik-Moore</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={gwenSpiderManClass}
                  onMouseEnter={() => onHoverEnter('spider-gwen')}
                  onMouseLeave={() => onHoverLeave('spider-gwen')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isGwenStacyHovered  ? `${miles2ImgSrc}atsv-spider_gwen_stacy.jpg` : `${miles2ImgSrc}atsv-gwen_stacy.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isGwenStacyHovered  ? 'spider-gwin' : 'gwen-stacy'}</span></li>
                          <li><span className='miles2-acter'>Hailee-Steinfeld</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={peterBParkerSpiderManClass}
                  onMouseEnter={() => onHoverEnter('peter-b-parker-spider-man')}
                  onMouseLeave={() => onHoverLeave('peter-b-parker-spider-man')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isPeterBParkerHovered  ? `${miles2ImgSrc}atsv-peter_b_parker_spider_man.jpg` : `${miles2ImgSrc}atsv-peter_b_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isPeterBParkerHovered  ? 'spider-man' : 'peter-b-parker'}</span></li>
                          <li><span className='miles2-acter'>Jake-Johnson</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderWomanClass}
                  onMouseEnter={() => onHoverEnter('spider-woman')}
                  onMouseLeave={() => onHoverLeave('spider-woman')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderWomanHovered  ? `${miles2ImgSrc}atsv-spider_woman.jpg` : `${miles2ImgSrc}atsv-jessica_drew.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderWomanHovered  ? 'spider-woman' : 'jessica-drew'}</span></li>
                          <li><span className='miles2-acter'>Issa-Rae</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderManIndiaClass}
                  onMouseEnter={() => onHoverEnter('spider-man-india')}
                  onMouseLeave={() => onHoverLeave('spider-man-india')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderManIndiaHovered  ? `${miles2ImgSrc}atsv-spider_man_india.jpg` : `${miles2ImgSrc}atsv-pavitr_prabhakar.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderManIndiaHovered  ? 'spider-man-india' : 'pavitr-prabhakar'}</span></li>
                          <li><span className='miles2-acter'>Karan-Soni</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className={spiderPunkClass}
                  onMouseEnter={() => onHoverEnter('spider-punk')}
                  onMouseLeave={() => onHoverLeave('spider-punk')}>
                    <a href="#!">
                      <div className="img-box">
                      <img src={isSpiderPunkHovered  ? `${miles2ImgSrc}atsv-spider_punk.jpg` : `${miles2ImgSrc}atsv-hobie_brown.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                        <li><span className='miles2-character-name'>{isSpiderPunkHovered  ? 'spider-punk' : 'hobie-brown'}</span></li>
                          <li><span className='miles2-acter'>Daniel-Kaluuya</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className='villain'>
                <li className={spiderMan2099Class} 
                    onMouseEnter={() => onHoverEnter('spider-man-2099')}
                    onMouseLeave={() => onHoverLeave('spider-man-2099')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isSpiderMan2099Hovered  ? `${miles2ImgSrc}atsv-spider_man_2099.jpg` : `${miles2ImgSrc}atsv-miguel_o_hara.jpg`} alt="across-the-spider-spider-man-2099" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='miles2-character-name'>{isSpiderMan2099Hovered  ? 'spider-man-2099' : 'miguel-o-hara'}</span></li>
                            <li><span className='miles2-acter'>Oscar-Isaac</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className='spot miles2'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${miles2ImgSrc}atsv-the_spot.jpg`} alt="across-the-spider-verse-spot-img" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='miles2-character-name'>the-spot</span></li>
                          <li><span className='miles2-acter'>Jason-Schwartzman</span></li>
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
