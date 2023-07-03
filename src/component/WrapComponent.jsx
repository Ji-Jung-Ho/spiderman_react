import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './MainComponent';
import HeaderComponent from './HeaderComponent';
import GoodsComponent from './goodsComponent/GoodsComponent';
import Spiderman1Component from './spidermanComponent/Spiderman1Component';
import Spiderman2Component from './spidermanComponent/Spiderman2Component';
import Spiderman3Component from './spidermanComponent/Spiderman3Component';
import Spiderman4Component from './spidermanComponent/Spiderman4Component';
import VenomComponent from './spidermanComponent/VenomComponent';
import SignUpComponent from './memberComponent/SignUpComponent';
import FooterComponent from './FooterComponent';

export default function WrapComponent () {

  return (
    <div id="wrap">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainComponent />}></Route>
        <Route path="/goods" element={<HeaderFooterLayout component={<GoodsComponent />} />} />
        <Route path="/sam" element={<HeaderFooterLayout component={<Spiderman1Component />} />} />
        <Route path="/amazing" element={<HeaderFooterLayout component={<Spiderman2Component />} />} />
        <Route path="/tom" element={<HeaderFooterLayout component={<Spiderman3Component />} />} />
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