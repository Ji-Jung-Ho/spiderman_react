import React from 'react';
import MainComponent from './MainComponent';
import HeaderComponent from './HeaderComponent';

export default function WrapComponent () {
  return (
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent/>
    </div>
  );
};
