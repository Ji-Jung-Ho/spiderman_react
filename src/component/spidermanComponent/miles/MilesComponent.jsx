import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function MilesComponent () {
  const [isMiles1, setIsMiles1] = useState(true);
  const [isMiles2, setIsMiles2] = useState(false);

  const onClickAmazing1Toggle = () => {
    setIsMiles1(true);
    setIsMiles2(false);
  };

  const onClickAmazing2Toggle = () => {
    setIsMiles1(false);
    setIsMiles2(true);
  };

  const milesSrc = "./img/spiderman_movie_img/miles";
  const imgSrc = "./img/spiderman_movie_img"

  const milesLink = {
    miles_Disney: {
      url:
        'https://www.disneyplus.com/ko-kr/movies/spider-man-into-the-spider-verse/OtXRBHlsLLV9',
      label: 'Go To Amazing-Spider-Man Movie in disney+',
    },
  };

  const onClickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main" className="spiderman-movie-1">
      <section className={`section1 ${isMiles1 ? 'sec1-show' : 'sec1-hide'}`}>
        <div className="sec1-container">
          <Link to={`${isMiles1 ? milesLink.miles_Disney.url : ''}`} target="_blink">
            <div className="sec1-content">
              <span>Available right now on Disney+.</span>
              <img src="./img/spiderman_movie_img/disneybtn_asset2x_6.png" alt="" />
            </div>
          </Link>
        </div>
      </section>
      <section className='section2'>
        <div className='sub-title'>
          <ul>
            <li>
              <button className="movie-choice" onClick={onClickAmazing1Toggle}>
                <span className={`sub-title ${isMiles1 ? 'active' : ''}`}>Into the Spider-Verse</span>
              </button>
            </li>
            <li><i>|</i></li>
            <li>
              <button className="movie-choice" onClick={onClickAmazing2Toggle}>
                <span className={`sub-title ${isMiles2 ? 'active' : ''}`}>Across the Spider-Verse</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className={`section3 ${isMiles1 ? 'miles-1' : isMiles2 ? 'miles-2' : ''}`}>
        <div className="sec3-container">
          <div className="main-title-img">
            <img src={`${milesSrc}/miles_${isMiles1 ? '1' : isMiles2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="sec4-container">
          <div className="trailer-title">
            <h2>official tailer</h2>
          </div>
          <div className="trailer-content">
            <div className={`trailer-container ${isMiles1 ? 'show-trailer' : 'hide-trailer'}`}>
              <div className="trailer-box">
              <iframe 
              src="https://www.youtube.com/embed/vhkCBOsOoYY" 
              title="[스파이더맨: 뉴 유니버스] 3차 예고편" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen
              ></iframe>
              </div>
            </div>
            <div className={`trailer-container ${isMiles2 ? 'show-trailer' : 'hide-trailer'}`}>
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
            <img className='miles' src={`${milesSrc}/miles_${isMiles1 ? '1' : isMiles2 ? '2' : ''}_logo.png`} alt="" />
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className="sec6-container">
          <div className={`spiderman-movie-info ${isMiles1 ? 'show-movie-info' : 'hide-movie-info'}`}>
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
                  <div className='content'>Bob Persichetti, Peter Ramsey, Rodney Rothman</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Shameik Moore, Jake Johnson, Hailee Steinfeld</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Dec 14, 2018</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${milesSrc}/miles_1_poster.jpg`} alt="" />
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
                        It’s incredibly thrilling to watch, impressively emotional throughout, and easily the best Spider-Man movie since “Spider-Man 2.”
                      </p>
                      <span>TheWrapWilliam - Bibbiani</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        It’s a slightly insane, hilariously daring and often touching mashup of everything that makes super-flicks so darn popular with the introduction of a Spider-Man who's ready-made for today’s generation of kids.
                      </p>
                      <span>USA Today - Brian Truitt</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        A confident blend of comic-book élan and stirring sentiment, Spider-Man: Into The Spider-Verse finds fresh ways to tell the familiar story of everyone’s favourite web-slinger.
                      </p>
                      <span>Screen Daily - Tim Grierson</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`spiderman-movie-info ${isMiles2 ? 'show-movie-info' : 'hide-movie-info'}`}>
            <div className="movie-intro">
              <div className="title">
                <h2>overview</h2>
              </div>
              <div className="movie-story">
              <p>
              Spider-Man VS Spider-Man?! <br/><br/>

              'Miles Morales' became the new Spider-Man after going through several growing pains.<br/>
              In front of him, Spider Woman 'Gwen' from another parallel world appears again.<br/><br/>

              We meet Spider-Man in the multiverse of all dimensions,<br/>
              Confidence in order collides and an unexpected crack occurs...<br/><br/>

              The world of the multiverse beyond imagination is open!
              </p>
              </div>
              <div className="movie-info">
                <div className="movie-info-container">
                  <div className="label">director</div>
                  <div className='content'>Joaquim Dos, SantosKemp Powers, Justin K. Thompson</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">cast</div>
                  <div className='content'>Shameik Moore, Hailee Steinfeld, Brian Tyree Henry</div>
                </div>
                <div className="movie-info-container">
                  <div className="label">release date</div>
                  <div className='content'><span>Jun 2, 2023</span></div>
                </div>
              </div>
              <div className="movie-poster">
                <img src={`${milesSrc}/miles_2_poster.jpg`} alt="" />
              </div>
            </div>
            <div className="movie-review">
              <div className="review-title">
                <h2>review</h2>
              </div>
              <div className="review-content">
                <ul className='review-container'>
                  <li className={'review-list'}>
                    <div className="review-box">
                      <p className='review'>
                        It is a smart, thrilling piece of work that reminded me of other great part twos like “The Dark Knight” and “The Empire Strikes Back."
                      </p>
                      <span>RogerEbert.com - Brian Tallerico</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review'>
                        Visually astonishing, emotionally daring, this spectacular sequel has enough wit, imagination and thrills to fill several worlds. But prepare to be left hanging till the sequel hits screens.
                      </p>
                      <span>Total Film - Jordan Farley</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
                    </div>
                  </li>
                  <li className='review-list'>
                    <div className="review-box">
                      <p className='review miles2-review'>
                        Spider-Man: Across the Spider-Verse is phenomenal from start to finish, raising the stakes, emotion and heart with beautiful artistic animation.
                      </p>
                      <span>Screen RantMolly Freeman</span>
                      <img src="./img/etc-img/miles_red_logo.png" alt="" />
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
                <Link to="/sam" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/sam-spiderman/sam_spider_man_1_poster.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>Spider-Man: Trilogy</p>
                    <p className='production-year'>2002</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/amazing" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/amazing/amazing_spider_man_2_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Amazing Spider-Man-2</p>
                    <p className='production-year'>2014</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/tom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/tom-spiderman/tom_spider_man_3_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>spiderman: No-Way-Home</p>
                    <p className='production-year'>2021</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/venom" onClick={onClickLinkClick}>
                  <img src={`${imgSrc}/venom/venom_2_card_2.jpg`} alt="" />
                  <div className="card-info">
                    <p className='card-name'>The Venom: LET THERE BE CARNAGE </p>
                    <p className='production-year'>2021</p>
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
