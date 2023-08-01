import React from 'react';

export default function SignUpComponent() {
  return (
    <main id="signUpMain" className='signup'>
      <section id="signUp">
        <div className="container">
          <div className="title">
            <div className="main-title">
              <h2>Sign-Up</h2>
            </div>
            <div className="sub-title">
              <span><i>*</i>필수입력사항</span>
            </div>
          </div>
          <div className="content">
            <form action="./member_sign_up.php" name="form_sign_up" id="formSignUp" method="post">
              <ul>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>아이디</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength="16" name="input_id" id="inputId" placeholder="아이디를 입력해주세요"/>
                      <button type="button" className="id-ok-btn">중복확인</button>
                      <p className="error-message1"></p>
                      <p className="error-message2"></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputPw1"><strong>비밀번호</strong><i>*</i></label>
                    </div>                                
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="password" maxLength='16' name='input_pw1' id='inputPw1' autoComplete="off" placeholder='비밀번호를 입력해주세요'/>
                      <p className='error-message'></p>
                    </div>
                  </div>
                </li>                        
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputPw2"><strong>비밀번호확인</strong><i>*</i></label>
                    </div>                                
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="password" maxLength='16' name='input_pw2' id='inputPw2' autoComplete="off" placeholder='비밀번호를 한번더 입력해주세요'/>
                      <p className="error-message"></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputName"><strong>이름</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" required maxLength="20" name="input-name" id="inputName" placeholder="이름을 입력해주세요"/>
                        <p className="error-message"></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor=""><strong>이메일</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" name="input-email" id="inputEmail" placeholder="예:spiderman@naver.com"/>
                      <button type="button" className="email-ok-btn">중복확인</button>
                      <p className="error-message"></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor=""><strong>휴대폰</strong><i>*</i></label>
                    </div>
                 </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength="11" name="input-hp" id="inputHp" placeholder="아이디를 입력해주세요."/>
                      <button disabled type="button" className="hp-num-btn">인증번호 받기</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor=""><strong>주소</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" className="addr-hide" maxLength="11" name="input-addr1" id="inputAddr1" placeholder="카카오 주소 검색 API"/>
                      <button disabled type="button" className="addr-re-btn addr-hide"><img src="./img/ico_search.svg" alt=""/>재검색</button>
                      <button type="button" className="addr-api-btn"><img src="./img/search_btn.png" alt=""/>주소검색</button>
                      <p className="addr-info addr-info1">배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                    </div>
                  </div>
                </li>
                <li className="addr-hide">
                  <div className="left">
                    <div className="left-wrap">
                        
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength="11" name="input-addr2" id="inputAddr2" placeholder="나머지 주소를 입력하세요"/>
                    </div>
                  </div>
                </li>
                <li className="addr-hide">
                  <div className="left">
                    <div className="left-wrap">
                        
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <em className="addr-map-area">샛별배송</em>
                      <p className="addr-info addr-info2">배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                        <label htmlFor=""><strong>성별</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap gender">
                      <label htmlFor="male"><input type="radio" name="gender" id="male" value="남자"/>남자</label>
                      <label htmlFor="female"><input type="radio" name="gender" id="female" value="여자"/>여자</label>
                      <label htmlFor="unselect"><input type="radio" name="gender" id="unselect" value="선택안함" checked/>선택안함</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor=""><strong>생년월일</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap birth">
                      <div className="birth-box">
                        <ul>
                          <li><input type="text" name="year" id="year" placeholder="YYYY"/></li>
                          <li><i>/</i></li>
                          <li><input type="text" name="month" id="month" placeholder="MM"/></li>
                          <li><i>/</i></li>
                          <li><input type="text" name="date" id="date" placeholder="DD"/></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="add-input-box-list">
                  <div className="left">
                    <div className="left-wrap">
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap add-input-box2">
                      <input type="text" name="add-input-text" id="add-input-text" placeholder="추천인 아이디를 입력해주세요"/>
                      <p className="add-input-guid-text">가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</p>
                    </div>
                  </div>
                </li>
                <li className="hor-line">
                  <hr/>
                </li>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor=""><strong>이용약관동의</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap service">
                      <ul>
                        <li>
                          <label htmlFor="allChk"><input type="checkbox" name="all_chk" id="allChk" className="chk-btn" value=""/>전체 동의합니다.</label>
                          <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                        </li>
                        <li>
                          <label htmlFor="chk1"><input type="checkbox" name="chk1" id="chk1" className="chk-btn" value=""/>이용약관 동의</label>(필수)
                          <button type="button"><span>약관보기</span><img src="./img/sign_up/arrow_right.png" alt=""/></button>
                        </li>
                        <li>
                          <label htmlFor="chk2"><input type="checkbox" name="chk2" id="chk2" className="chk-btn" value=""/>개인정보 수집∙이용 동의</label>(필수)
                          <button type="button"><span>약관보기</span><img src="./img/sign_up/arrow_right.png" alt=""/></button>
                        </li>
                        <li>
                          <label htmlFor="chk3"><input type="checkbox" name="chk3" id="chk3" className="chk-btn" value=""/>개인정보 수집∙이용 동의</label>(선택)
                          <button type="button"><span>약관보기</span><img src="./img/sign_up/arrow_right.png" alt=""/></button>
                        </li>
                        <li>
                          <label htmlFor="chk4"><input type="checkbox" name="chk4" id="chk4" className="chk-btn" value=""/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label>(선택)
                        </li>
                        <li>
                          <label htmlFor="chk5"><input type="checkbox" name="chk5" id="chk5" className="chk-btn" value="SMS"/>SMS</label>
                          <label htmlFor="chk6" className='chk6'><input type="checkbox" name="chk6" id="chk6" className="chk-btn" value="이메일"/>이메일</label>
                        </li>
                        <li>
                          <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                        </li>
                        <li>
                          <label htmlFor="chk7"><input type="checkbox" name="chk7" id="chk7" className="chk-btn" value=""/>본인은 만 14세 이상입니다.</label>(필수)
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="button-box">
                <button type="submit" className="submit-btn">가입하기</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
