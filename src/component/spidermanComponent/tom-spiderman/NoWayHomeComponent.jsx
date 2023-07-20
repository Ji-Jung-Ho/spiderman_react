import React, {useState} from 'react';

export default function NoWayHomeComponent () {

  const [isSamHovered, setIsSamHovered] = useState(false);
  const [isVillain1Hovered, setIsVillain1Hovered] = useState(false);
  const [isVillain2Hovered, setIsVillain2Hovered] = useState(false);
  const [isVillain3Hovered, setIsVillain3Hovered] = useState(false);
  const [isVillain4Hovered, setIsVillain4Hovered] = useState(false);
  const [isVillain5Hovered, setIsVillain5Hovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'spiderman') {
      setIsSamHovered(true);
    } else if (character === 'villain1') {
      setIsVillain1Hovered(true);
    } else if (character === 'villain2') {
      setIsVillain2Hovered(true);
    } else if (character === 'villain3') {
      setIsVillain3Hovered(true);
    } else if (character === 'villain4') {
      setIsVillain4Hovered(true);
    } else if (character === 'villain5') {
      setIsVillain5Hovered(true);
    } 
  };

  const onHoverLeave = (character) => {
    if (character === 'spiderman') {
      setIsSamHovered(false);
    } else if (character === 'villain1') {
      setIsVillain1Hovered(false);
    } else if (character === 'villain2') {
      setIsVillain2Hovered(false);
    } else if (character === 'villain3') {
      setIsVillain3Hovered(false);
    } else if (character === 'villain4') {
      setIsVillain4Hovered(false);
    } else if (character === 'villain5') {
      setIsVillain5Hovered(false);
    }
  };

  const spidermanClass = isSamHovered ? 'spiderman nowayhome' : 'peter-parker nowayhome';
  const villain1Class = isVillain1Hovered ? 'dr-otto nowayhome' : 'octavius nowayhome';
  const villain2Class = isVillain2Hovered ? 'electro nowayhome' : 'max-dillon nowayhome';
  const villain3Class = isVillain3Hovered ? 'mysterio nowayhome' : 'quentin-beck nowayhome';
  const villain4Class = isVillain4Hovered ? 'mysterio nowayhome' : 'quentin-beck nowayhome';
  const villain5Class = isVillain5Hovered ? 'mysterio nowayhome' : 'quentin-beck nowayhome';

  const noWayHomeImgSrc = "./img/spiderman_movie_img/tom-spiderman/no_way_home/"
  const commonImgSrc = "./img/spiderman_movie_img/tom-spiderman/"
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
              src="https://www.youtube.com/embed/yFZh-Wqi7RI" 
              title="[스파이더맨: 노 웨이 홈] 2차예고편"
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
            <img src={`${commonImgSrc}/deiulh2-e958d335-e034-4117-8cdb-329a9a4e8562.png`} alt="" />
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
                  For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.
                </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Jon Watts</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Tom Holland, Zendaya, Jacob Batalon</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Dec 17, 2021</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${commonImgSrc}/tom_spider_man_3_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="character">
              <div className="character-title">
                <h2>Character</h2>
              </div>
              <div className="character-content nowayhome">
                <ul className='character-ul nowayhome'>
                  <li className={spidermanClass} 
                    onMouseEnter={() => onHoverEnter('spiderman')}
                    onMouseLeave={() => onHoverLeave('spiderman')}>
                    <a href="#!">
                      <div className="img-box">
                        <img src={isSamHovered  ? `${noWayHomeImgSrc}nowayhome_spiderman.jpg` : `${noWayHomeImgSrc}nowayhome_peter-parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>{isSamHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='nowayhome-acter'>Tom Holland</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome_michelle-jones-watson.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>michelle-jones</span></li>
                          <li><span className='nowayhome-acter'>Zendaya</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome_may-parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>may-parker</span></li>
                          <li><span className='nowayhome-acter'>Marisa Tomei</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome_ned.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>Ned-Leeds</span></li>
                          <li><span className='nowayhome-acter'>Jacob Batalon</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome_dr-strange.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>dr-strange</span></li>
                          <li><span className='nowayhome-acter'>Benedict Cumberbatch</span></li>
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
                          <img src={isVillain1Hovered  ? `${noWayHomeImgSrc}nowayhome_dr-otto.jpg` : `${noWayHomeImgSrc}nowayhome_octavius.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isVillain1Hovered  ? 'dr-otto' : 'octavius'}</span></li>
                            <li><span className='nowayhome-acter'>Alfred Molina</span></li>
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
                          <img src={isVillain2Hovered  ? `${noWayHomeImgSrc}nowayhome_electro.jpg` : `${noWayHomeImgSrc}nowayhome_max-dillon.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isVillain2Hovered  ? 'electro' : 'max-dillon'}</span></li>
                            <li><span className='nowayhome-acter'>Jamie Foxx</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={villain3Class} 
                    onMouseEnter={() => onHoverEnter('villain3')}
                    onMouseLeave={() => onHoverLeave('villain3')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isVillain3Hovered  ? `${noWayHomeImgSrc}nowayhome_green-goblin.jpg` : `${noWayHomeImgSrc}nowayhome_norman-osborn.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isVillain3Hovered  ? 'green-goblin' : 'norman-osborn'}</span></li>
                            <li><span className='nowayhome-acter'>Willem Dafoe</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={villain4Class} 
                    onMouseEnter={() => onHoverEnter('villain4')}
                    onMouseLeave={() => onHoverLeave('villain4')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isVillain4Hovered  ? `${noWayHomeImgSrc}nowayhome_sandman.jpg` : `${noWayHomeImgSrc}nowayhom_flint-marko.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isVillain4Hovered  ? 'sandman' : 'flint-marko'}</span></li>
                            <li><span className='nowayhome-acter'>Thomas Haden Church</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={villain5Class} 
                    onMouseEnter={() => onHoverEnter('villain5')}
                    onMouseLeave={() => onHoverLeave('villain5')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isVillain5Hovered  ? `${noWayHomeImgSrc}nowayhome_lizard.jpg` : `${noWayHomeImgSrc}nowayhome_curt-connors.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isVillain5Hovered  ? 'lizard' : 'curt-connors'}</span></li>
                            <li><span className='nowayhome-acter'>Rhys Ifans</span></li>
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