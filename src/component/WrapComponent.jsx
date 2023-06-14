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

export default function WrapComponent () {

  return (
    <div id="wrap">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route index  element={<MainComponent />}/>
            <Route path='/' element={<HeaderComponent />}>
              <Route path='/goods' element={<GoodsComponent/>}/>
              <Route path='/spiderman1' element={<Spiderman1Component/>}/>
              <Route path='/spiderman2' element={<Spiderman2Component/>}/>
              <Route path='/spiderman3' element={<Spiderman3Component/>}/>
              <Route path='/spiderman4' element={<Spiderman4Component/>}/>
              <Route path='/venom' element={<VenomComponent/>}/>
              <Route path='/signup' element={<SignUpComponent/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      {/* <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent> */}
    </div>
  );
};
