import React from 'react';

export default function ConfirmModalComponent ({msg, isConfirmModalCloseFn}) {
  const onClickClose = (e) => {
    e.preventDefault();
    isConfirmModalCloseFn();
  }
  return (
    <div id='confirmModal'>
      <div id="wrap">
        <div className="container">
          <div className="content">
            <h2>{msg}</h2>
          </div>
          <div className="btn-box">
            <button className='modal-ok-btn' onClick={onClickClose}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};