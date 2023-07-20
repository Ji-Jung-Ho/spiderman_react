import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './MainComponent';
import HeaderComponent from './HeaderComponent';
import GoodsComponent from './goodsComponent/GoodsComponent';
import SamSpiderManMainComponent from './spidermanComponent/sam-spiderman/SamSpiderManMainComponent';
import AmazingSpiderManMainComponent from './spidermanComponent/amazing-spiderman/AmazingSpiderManMainComponent';
import TomSpiderManMainComponent from './spidermanComponent/tom-spiderman/TomSpiderManMainComponent';
import Spiderman4Component from './spidermanComponent/miles/MilesComponent';
import VenomComponent from './spidermanComponent/venom/VenomComponent';
import SignUpComponent from './memberComponent/SignUpComponent';
import FooterComponent from './FooterComponent';

export default function WrapComponent () {

  return (
    <div id="wrap">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainComponent />}></Route>
        <Route path="/goods" element={<HeaderFooterLayout component={<GoodsComponent />} />} />
        <Route path="/sam" element={<HeaderFooterLayout component={<SamSpiderManMainComponent />} />} />
        <Route path="/amazing" element={<HeaderFooterLayout component={<AmazingSpiderManMainComponent />} />} />
        <Route path="/tom" element={<HeaderFooterLayout component={<TomSpiderManMainComponent />} />} />
        <Route path="/miles" element={<HeaderFooterLayout component={<Spiderman4Component />} />} />
        <Route path="/venom" element={<HeaderFooterLayout component={<VenomComponent />} />} />
        <Route path="/signup" element={<HeaderFooterLayout component={<SignUpComponent />} />} />
      </Routes>
    </BrowserRouter>
  </div>
);
}

function HeaderFooterLayout({ component: Component }) {
return (
  <>
    <HeaderComponent />
    {Component}
    <FooterComponent />
  </>
);
}