import React from 'react';

export default function HeaderComponent ()  {

  const [isOpen, setOpen] = React.useState(false);
  const [isClose, setClose] = React.useState(false);

  const onClickMeunOpen=()=>{
    setOpen (isOpen => !isOpen);
  }
  return (
    <header id="header">
      <div className="menu">
        <button onClick={onClickMeunOpen}>
          <img src="./img/Hambar.png" alt="" />
        </button>
        <ul className= {isOpen ? 'show-menu' : 'hide-menu'}>
          <button onClick={onClickMeunOpen}>
            <img src="./img/close.png" alt="" />
          </button>
          <li>
            <h2>Movie</h2>
            <div className="movie-menu">
              <ul>
                <li>SpiderMan</li>
                <li>Amazing-Spiderman</li>
                <li>New-Spiderman</li>
                <li>Miles-Morales</li>
                <li>Venom</li>
              </ul>
            </div>
          </li>
          <li>캐릭터 굿즈</li>
        </ul>
      </div>
    </header>
  );
};
