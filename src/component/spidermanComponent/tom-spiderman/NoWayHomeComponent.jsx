import React, {useState} from 'react';

export default function NoWayHomeComponent () {

  const [isSamHovered, setIsSamHovered] = useState(false);
  const [isOctopusHovered, setIsOctopusHovered] = useState(false);
  const [isElectroHovered, setIsElectroHovered] = useState(false);
  const [isGreeGoblinHovered, setIsGreeGoblinHovered] = useState(false);
  const [isSandManHovered, setIsSandManHovered] = useState(false);
  const [isLizardHovered, setIsLizardHovered] = useState(false);

  const onHoverEnter = (character) => {
    if (character === 'spiderman') {
      setIsSamHovered(true);
    } else if (character === 'octopus') {
      setIsOctopusHovered(true);
    } else if (character === 'electro') {
      setIsElectroHovered(true);
    } else if (character === 'green-goblin') {
      setIsGreeGoblinHovered(true);
    } else if (character === 'sand-man') {
      setIsSandManHovered(true);
    } else if (character === 'lizard') {
      setIsLizardHovered(true);
    } 
  };

  const onHoverLeave = (character) => {
    if (character === 'spiderman') {
      setIsSamHovered(false);
    } else if (character === 'octopus') {
      setIsOctopusHovered(false);
    } else if (character === 'electro') {
      setIsElectroHovered(false);
    } else if (character === 'green-goblin') {
      setIsGreeGoblinHovered(false);
    } else if (character === 'sand-man') {
      setIsSandManHovered(false);
    } else if (character === 'lizard') {
      setIsLizardHovered(false);
    }
  };

  const spidermanClass = isSamHovered ? 'spiderman nowayhome' : 'peter-parker nowayhome';
  const octopusClass = isOctopusHovered ? 'dr-otto nowayhome' : 'octavius nowayhome';
  const electroClass = isElectroHovered ? 'electro nowayhome' : 'max-dillon nowayhome';
  const greenGoblinClass = isGreeGoblinHovered ? 'green-goblin nowayhome' : 'noman-osborn nowayhome';
  const sandManClass = isSandManHovered ? 'sand-man nowayhome' : 'flint-marko nowayhome';
  const lizardClass = isLizardHovered ? 'lizard nowayhome' : 'curt-connors nowayhome';

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
                        <img src={isSamHovered  ? `${noWayHomeImgSrc}nowayhome-spider_man.jpg` : `${noWayHomeImgSrc}nowayhome-peter_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>{isSamHovered  ? 'spider-man' : 'peter-parker'}</span></li>
                          <li><span className='nowayhome-acter'>Tom-Holland</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='michelle-jones nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome-michelle_jones_watson.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>michelle-jones</span></li>
                          <li><span className='nowayhome-acter'>Zendaya</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='may-parker nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome-may_parker.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>may-parker</span></li>
                          <li><span className='nowayhome-acter'>Marisa-Tomei</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='ned nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome-ned.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>Ned-Leeds</span></li>
                          <li><span className='nowayhome-acter'>Jacob-Batalon</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className='dr-strange nowayhome'>
                    <a href="#!">
                      <div className="img-box">
                        <img src={`${noWayHomeImgSrc}nowayhome-dr_strange.jpg`} alt="" />
                      </div>
                      <div className="caption-box">
                        <ul className='caption-ul'>
                          <li><span className='nowayhome-character-name'>dr-strange</span></li>
                          <li><span className='nowayhome-acter'>Benedict-Cumberbatch</span></li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className='villain'>
                <li className={octopusClass} 
                    onMouseEnter={() => onHoverEnter('octopus')}
                    onMouseLeave={() => onHoverLeave('octopus')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isOctopusHovered  ? `${noWayHomeImgSrc}nowayhome-dr_octopus.jpg` : `${noWayHomeImgSrc}nowayhome-octavius.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isOctopusHovered  ? 'dr-octopus' : 'octavius'}</span></li>
                            <li><span className='nowayhome-acter'>Alfred-Molina</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={electroClass} 
                    onMouseEnter={() => onHoverEnter('electro')}
                    onMouseLeave={() => onHoverLeave('electro')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isElectroHovered  ? `${noWayHomeImgSrc}nowayhome-electro.jpg` : `${noWayHomeImgSrc}nowayhome-max_dillon.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isElectroHovered  ? 'electro' : 'max-dillon'}</span></li>
                            <li><span className='nowayhome-acter'>Jamie-Foxx</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={greenGoblinClass} 
                    onMouseEnter={() => onHoverEnter('green-goblin')}
                    onMouseLeave={() => onHoverLeave('green-goblin')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isGreeGoblinHovered  ? `${noWayHomeImgSrc}nowayhome-green_goblin.jpg` : `${noWayHomeImgSrc}nowayhome-norman_osborn.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isGreeGoblinHovered  ? 'green-goblin' : 'norman-osborn'}</span></li>
                            <li><span className='nowayhome-acter'>Willem-Dafoe</span></li>
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
                          <img src={isSandManHovered  ? `${noWayHomeImgSrc}nowayhome-sand_man.jpg` : `${noWayHomeImgSrc}nowayhom-flint_marko.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isSandManHovered  ? 'sandman' : 'flint-marko'}</span></li>
                            <li><span className='nowayhome-acter'>Thomas-Haden-Church</span></li>
                          </ul>
                        </div>
                      </a>
                  </li>
                  <li className={lizardClass} 
                    onMouseEnter={() => onHoverEnter('lizard')}
                    onMouseLeave={() => onHoverLeave('lizard')}
                    >
                      <a href="#!">
                        <div className="img-box">
                          <img src={isLizardHovered  ? `${noWayHomeImgSrc}nowayhome-lizard.jpg` : `${noWayHomeImgSrc}nowayhome-curt_connors.jpg`} alt="" />
                        </div>
                        <div className="caption-box">
                          <ul className='caption-ul'>
                            <li><span className='nowayhome-character-name'>{isLizardHovered  ? 'lizard' : 'curt-connors'}</span></li>
                            <li><span className='nowayhome-acter'>Rhys-Ifans</span></li>
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