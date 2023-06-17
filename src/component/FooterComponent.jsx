import React from 'react';
import {Link}  from 'react-router-dom';

export default function FooterComponent () {
  return (
  <footer id="footer">
    <div className="row1">
      <div className="container">
        <div className="movie-info">
          <Link to="https://namu.wiki/w/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8(%EC%98%81%ED%99%94)" target="_blank">
            <img src="./img/footer/sam-logo.jpg" alt=""/>
            <span>original-spiderman</span>
          </Link>
          <Link to="https://namu.wiki/w/%EC%96%B4%EB%A9%94%EC%9D%B4%EC%A7%95%20%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8(%EC%98%81%ED%99%94)" target="_blank">
            <img src="./img/footer/amazing-logo.jpg" alt=""/>
            <span>amazing-spiderman</span>
          </Link>
          <Link to="https://namu.wiki/w/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8:%20%ED%99%88%EC%BB%A4%EB%B0%8D" target="_blank">
            <img src="./img/footer/tom-logo.jpg" alt=""/>
            <span>new-spiderman</span>
          </Link>
          <Link to="https://www.smartresize.com/ko/search?q=%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8" target="_blank">
            <img src="./img/footer/miles-logo.jpg" alt=""/>
            <span>miles-morales</span>
          </Link>
          <Link to="https://namu.wiki/w/%EB%B2%A0%EB%86%88(%EC%98%81%ED%99%94)" target="_blank">
            <img src="./img/footer/venom-logo.jpg" alt=""/>
            <span>venom</span>
          </Link>
        </div>
      </div>
    </div>
    <div className="row2">
      <div className="container">
        <div className="sns-icon">
          <ul>
            <li><a href="#!"><img src="./img/footer/ico_instagram.png" alt=""/></a></li>
            <li><a href="#!"><img src="./img/footer/ico_fb.png" alt=""/></a></li>
            <li><a href="#!"><img src="./img/footer/ico_blog.png" alt=""/></a></li>
            <li><a href="#!"><img src="./img/footer/ico_naverpost.png" alt=""/></a></li>
            <li><a href="#!"><img src="./img/footer/ico_youtube.png" alt=""/></a></li>
          </ul>
        </div>
        <div className='infomation agree-to-terms-of-use'>
          <a href="#!">
            <span>이용약관 동의</span>
          </a>
        </div>
        <div className='infomation privacy-policy'>
          <a href="#!">
            <span>개인정보 보호정책</span>
          </a>
        </div>
        <div className='infomation coment'>
          <span>
            &copy;In 2023, Ho Jung will create the Spider-Man website.
          </span>
        </div>
      </div>
    </div>
  </footer>
  );
};
