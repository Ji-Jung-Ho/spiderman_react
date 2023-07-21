import React from 'react';

export default function acrossTheSpiderVerseComponent () {
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
    </>
  );
};
