import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './MainComponent';
import HeaderComponent from './HeaderComponent';
import GoodsComponent from './GoodsComponent/GoodsComponent';

export default function WrapComponent () {

  return (
    <div id="wrap">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<HeaderComponent />}>
              <Route index  element={<MainComponent />}/>
              <Route path='/굿즈' element={<GoodsComponent/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      {/* <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent> */}
    </div>
  );
};
