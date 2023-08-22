import React from 'react';

export default function SelectPersoanlInfomationModalComponent({ isSelectModalCloseFn }) {

  const selectModalCloseFn = (e) => {
    e.preventDefault();
    isSelectModalCloseFn();
  }

  return (
    <div id='Select'>
      <div className="warp">
        <div className="container">
          <h1>개인정보 수집·이용 동의(선택)</h1>
          <div className="content">
            <table>
              <colgroup>
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th className='title1'>수집 목적</th>
                  <th className='title2'>수집 항목</th>
                  <th className='title3'>보유 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>맞춤형 회원 서비스 제공</td>
                  <td><strong>성별*, 생년월일*</strong></td>
                  <td className='bold'>회원 탈퇴 <br /> 즉시 파기</td>
                </tr>
              </tbody>
            </table>
            <p className='sub-title'></p>
          </div>
          <div className="button-box">
            <button type='button' onClick={selectModalCloseFn}><span>확인</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};
