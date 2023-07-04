import React, { useState, useEffect } from 'react';
import {Link, Outlet}  from 'react-router-dom';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
 
  const onMouseEnter1=()=>{
    setIsHover1(true);
    setIsHover2(false);
    setIsHover3(false);
    setIsHover4(false);
    setIsHover5(false);
  }
  const onMouseEnter2=()=>{
    setIsHover1(false);
    setIsHover2(true);
    setIsHover3(false);
    setIsHover4(false);
    setIsHover5(false);
  }
  const onMouseEnter3=()=>{
    setIsHover1(false);
    setIsHover2(false);
    setIsHover3(true);
    setIsHover4(false);
    setIsHover5(false);
  }
  const onMouseEnter4=()=>{
    setIsHover1(false);
    setIsHover2(false);
    setIsHover3(false);
    setIsHover4(true);
    setIsHover5(false);
  }
  const onMouseEnter5=()=>{
    setIsHover1(false);
    setIsHover2(false);
    setIsHover3(false);
    setIsHover4(false);
    setIsHover5(true);
  }
  const onMouseLeave = () => {
    setIsHover1(false);
    setIsHover2(false);
    setIsHover3(false);
    setIsHover4(false);
    setIsHover5(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="header">
        <div className={isMenuOpen ? 'row1 active' : 'row1'}>
          <div className="row1-container">
            <nav>
              <Link to="/sam" onClick={closeMenu}>
                <div
                  className={`img-box ${isHover1 ? 'hovered' : ''}`}
                  onMouseEnter={onMouseEnter1}
                  onMouseLeave={onMouseLeave}
                >
                  <img
                    src={isHover1 ? './img/header/spider_black_logo.png' : './img/header/spider_red_logo.png'}
                    alt="spiderman_logo-img"
                  />
                  <span>SpiderMan</span>
                </div>
              </Link>
                <Link to='/amazing' onClick={closeMenu}>
                  <div className={`img-box ${isHover2 ? 'hovered' : ''}`}
                    onMouseEnter={onMouseEnter2}
                    onMouseLeave={onMouseLeave}
                    >
                    <img 
                      src={isHover2 ? './img/header/amazing_spider_black_logo.png' : './img/header/amazing_spider_red_logo.png'}
                      alt="spiderman_logo-img"
                      />
                    <span>Amazing-SpiderMan</span>
                  </div>
                </Link>
                <Link to='/tom' onClick={closeMenu}>
                  <div className={`img-box ${isHover3 ? 'hovered' : ''}`}
                    onMouseEnter={onMouseEnter3}
                    onMouseLeave={onMouseLeave}
                    >
                    <img 
                      src={isHover3 ? './img/header/tom_spider_black_logo.png' : './img/header/tom_spider_red_logo.png'}
                      alt="spiderman_logo-img"
                      />
                    <span>New-SpiderMan</span>
                  </div>
                </Link>
                <Link to='/miles' onClick={closeMenu}>
                  <div className={`img-box ${isHover4 ? 'hovered' : ''}`}
                    onMouseEnter={onMouseEnter4}
                    onMouseLeave={onMouseLeave}
                    >
                    <img 
                      src={isHover4 ? './img/header/miles_black_logo.png' : './img/header/miles_red_logo.png'}
                      alt="spiderman_logo-img"
                      />
                    <span>Miles-Morals</span>
                  </div>
                </Link>
                <Link to='/venom' onClick={closeMenu}>
                  <div className={`img-box ${isHover5 ? 'hovered' : ''}`}
                    onMouseEnter={onMouseEnter5}
                    onMouseLeave={onMouseLeave}
                    >
                    <img 
                    src={isHover5 ? './img/header/venom_black_logo.png' : './img/header/venom_red_logo.png'}
                    alt="spiderman_logo-img"/>
                    <span>Venom</span>
                  </div>
                </Link>
              <Link to='/goods' onClick={closeMenu}>
              <div className="img-box">
                  <img src="./img/header/HD-wallpaper-spiderman-cool-marvel-sony-spider-spider-man-far-from-home-spiderman-homecoming-spidy-venom.jpg" alt="" />
                  <span>Goods</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
        <div className="row2">
          <div className="row2-container">
            <div className="menu-btn">
              <button onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
                {isMenuOpen ? (
                  <img src="./img/header/close.png" alt="close-img" />
                ) : (
                  <img src="./img/header/Hambar.png" alt="menu-img" />
                )}
              </button>
            </div>
            <div className="title">
              <Link to="/">
                <img src="./img/header/spiderman_logo.png" alt="" />
              </Link>
            </div>
            <ul className="member">
              <li><Link to="/signup" className="on">SignUp</Link></li>
              <li><i>|</i></li>
              <li><a href="#!">SignIn</a></li>
              <li><i>|</i></li>
              <li><a href="#!">고객센터<img src="./img/header/down-arrow.png" alt=""/></a>
                <ul className="service-center">
                  <li><a href="#!">공지사항</a></li>
                  <li><a href="#!">자주하는 질문</a></li>
                  <li><a href="#!">1:1 문의</a></li>
                  <li><a href="#!">대량주문 문의</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    <Outlet/>
    </>
  );
}
