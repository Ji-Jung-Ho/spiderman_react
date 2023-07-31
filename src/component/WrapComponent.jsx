import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './MainComponent';
import HeaderComponent from './HeaderComponent';
import GoodsComponent from './goodsComponent/GoodsComponent';
import SamSpiderManMainComponent from './spidermanComponent/sam-spiderman/SamSpiderManMainComponent';
import AmazingSpiderManMainComponent from './spidermanComponent/amazing-spiderman/AmazingSpiderManMainComponent';
import TomSpiderManMainComponent from './spidermanComponent/tom-spiderman/TomSpiderManMainComponent';
import MilesMainComponent from './spidermanComponent/miles/MilesMainComponent';
import VenomMainComponent from './spidermanComponent/venom/VenomMainComponent';
import SignUpComponent from './memberComponent/SignUpComponent';
import SignInComponent from './memberComponent/SignInComponent';
import FooterComponent from './FooterComponent';
import AmazingSpiderman2Component from './spidermanComponent/amazing-spiderman/AmazingSpiderman2Component';

export default function WrapComponent () {

  return (
    <div id="wrap">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainComponent />}></Route>
        <Route path="/goods" element={<HeaderFooterLayout component={<GoodsComponent />} />} />
        <Route path="/sam" element={<HeaderFooterLayout component={<SamSpiderManMainComponent />} />} />
        <Route path="/amazing" element={<HeaderFooterLayout component={<AmazingSpiderManMainComponent />} />} />
        <Route path="/amazing2" element={<HeaderFooterLayout component={<AmazingSpiderman2Component />} />} />
        <Route path="/tom" element={<HeaderFooterLayout component={<TomSpiderManMainComponent />} />} />
        <Route path="/miles" element={<HeaderFooterLayout component={<MilesMainComponent />} />} />
        <Route path="/venom" element={<HeaderFooterLayout component={<VenomMainComponent />} />} />
        <Route path="/signup" element={<HeaderFooterLayout component={<SignUpComponent />} />} />
        <Route path="/signin" element={<HeaderFooterLayout component={<SignInComponent />} />} />
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