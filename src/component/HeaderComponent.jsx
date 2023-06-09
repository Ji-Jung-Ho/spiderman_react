import React, { useState } from 'react';
import {Link, Outlet}  from 'react-router-dom';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter=()=>{
    setIsHover(true);
  }
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <header id="header">
        <nav className={isMenuOpen ? 'active' : ''}>
          <a href="#!">
          <div
              className={`img-box ${isHover ? 'hovered' : ''}`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <img
                src={isHover ? './img/header/spider_black_logo.png' : './img/header/spider-main-logo.png'}
                alt="spiderman_logo-img"
              />
              <span>SpiderMan</span>
            </div>
            <div className="img-box">
              <img src="./img/header/amazing_spider_red_logo.png" alt="" />
              <span>Amazing-SpiderMan</span>
            </div>
            <div className="img-box">
              <img src="./img/header/tom_spider_red_logo.png" alt="" />
              <span>New-SpiderMan</span>
            </div>
            <div className="img-box">
              <img src="./img/header/miles_red_logo.png" alt="" />
              <span>Miles-Morals</span>
            </div>
            <div className="img-box">
              <img src="./img/header/venom_red_logo.png" alt="" />
              <span>Venom</span>
            </div>
          </a>
          <Link to='/굿즈'>
          <div className="img-box">
              <img src="./img/header/HD-wallpaper-spiderman-cool-marvel-sony-spider-spider-man-far-from-home-spiderman-homecoming-spidy-venom.jpg" alt="" />
              <span>캐릭터 굿즈</span>
            </div>
          </Link>
        </nav>

        <button onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
          {isMenuOpen ? (
            <img src="./img/close.png" alt="close-img" />
          ) : (
            <img src="./img/Hambar.png" alt="menubar-img" />
          )}
          <span>spiderman</span>
        </button>
      </header>
    <Outlet/>
    </>
  );
}
