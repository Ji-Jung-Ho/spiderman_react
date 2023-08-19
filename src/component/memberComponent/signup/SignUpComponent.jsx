import React, {useState, useEffect} from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'; 

export default function SignUpComponent({회원, isConfirmModalOpenFn, isTimer, isAgreeToTermsOfUseModalOpenFn}) {

  const [state, setState] = useState(회원);

  // 아이디 입력상자 입력 이벤트
  const onChangeId = (e) => {
    const regExp1 = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g; // 특수문자
    const regExp2 = /.{6,16}/g; // 6자 이상 16자 이하
    const regExp3 = /(?=.*[A-Za-z])+(?=.*[0-9])*/g; // 영문 혹은 영문과 숫자를 조합
    const regExp4 = /\s/g; // 공백
    const regExp5 = /[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;  // 영문/숫자 앞에 한글이 한글자 이상, 한글 뒤에 영문/숫자가 한글자 이상
    const regExp6 = /([a-zA-Z0-9])+([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])|([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+([a-zA-Z0-9])/;  // 영문/숫자 앞에 한글이 한글자 이상, 한글 뒤에 영문/숫자가 한글자 이상

    let {value} = e.target;
    let idErrMsg = '';
    let userId = value.replace(regExp1, '');
    let isUserId = true;
  
    if (regExp2.test(userId) === false || regExp3.test(userId) === false) {
      isUserId = false;
      idErrMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
      if (regExp5.test(userId) === true) {
        isUserId = false;
        idErrMsg = '한글은 입력이 불가능합니다.';
      }
      else if (regExp4.test(userId) === true) {
        isUserId = false;
        idErrMsg = '공백을 사용할 수 없습니다.';
      }
    }  
    else if (regExp6.test(userId) === true) {
      isUserId = false;
      idErrMsg = '한글은 입력이 불가능합니다.';
    }
     else {
      isUserId = true;
    }

    setState({
      ...state,
      userId: userId,
      isUserId: isUserId,
      idErrMsg: idErrMsg,
    });
  };
  // 아이디 중복확인 버튼 클릭 이벤트
  const onClickIdDoubleCheck = (e) => {
  e.preventDefault();

  const regExp1 = /.{6,16}/g; // 6자 이상 16자 이하
  const regExp2 = /(?=.*[A-Za-z])+(?=.*[0-9])*/g; // 영문 혹은 영문과 숫자를 조합
  const regExp3 = /\s/g; // 공백
  const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]+/g; // 한글 자모음 및 한글
  const regExp5 = /([a-zA-Z0-9])+([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])|([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+([a-zA-Z0-9])/;  // 영문/숫자 앞에 한글이 한글자 이상, 한글 뒤에 영문/숫자가 한글자 이상

  let {userId} = state;
  let idDoubleCheck = null;

  if (regExp1.test(userId) === false || regExp2.test(userId) === false || regExp3.test(userId) === true) {
    isConfirmModalOpenFn('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합')
    if (regExp4.test(userId) === true) {
      isConfirmModalOpenFn('아이디에 한글을 사용할 수 없습니다. 영문 혹은 영문, 숫자를 조합');
    }
  }
  else if (regExp5.test(userId) === true) {
    isConfirmModalOpenFn('아이디에 한글을 사용할 수 없습니다.')
  }
  else {
    axios({
      url: 'http://kiik52.dothome.co.kr/spiderman/member_select.php',
      method: 'GET'
    })
      .then((res) => {
        let result = res.data.map((item) => item.userId === state.userId);
        if (result.includes(true)) {
          isConfirmModalOpenFn('사용 불가능한 아이디 입니다.');
          idDoubleCheck = false;
        } 
        else {
          isConfirmModalOpenFn('사용할 수 있는 아이디입니다.');
          idDoubleCheck = true;
        }
        setState({
          ...state,
          idDoubleCheck: idDoubleCheck
        });
      })
      .catch((err) => {
        console.log('Axios 실패 결과: ', err.data);
      });
  }
  };
  // 비밀번호 입력상자 입력 이벤트
  const onChangePw = (e) => {
    const regExp1 = /.{10,}/g;
    const regExp2 = /^(?=.*[A-Za-z])(?=.*[0-9`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?])([A-Za-z0-9`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]+)$/; // 최소한 하나 이상의 영문자(대문자 또는 소문자), 영문자, 숫자, 특수문자의 조합이어야 합니다.
    const regExp3 = /\s/g;
    const regExp4 = /(\d)\1\1/g; //동일한 숫자 3개 이상 연속 사용 불가

    let {value} = e.target
    let pwErrMsg = '';
    let isUserPw = false;

    if (regExp1.test(value) === false) {
      pwErrMsg = '최소 10자 이상 입력'
      isUserPw = false;
    }
    else if (regExp2.test(value) === false || regExp3.test(value) === true) {
      pwErrMsg = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합'
      isUserPw = false;
    }
    else if (regExp4.test(value) === true) {
      pwErrMsg = '동일한 숫자 3개 이상 연속 사용 불가'
      isUserPw = false;
    }
    else {
      pwErrMsg = '';
      isUserPw = true;
    }

    setState({  
      ...state,
      userPw : value,
      isUserPw : isUserPw,
      pwErrMsg : pwErrMsg
    })

  }
  // 비밀번호 확인 입력상자 입력 이벤트
  const onChangePwDoubleCheck=(e)=>{
    const {value} = e.target;
    let pwDoubleCheckErrMsg = '';
    let isPwDoubleCheck = false;

    if (state.userPw !== value) {
      pwDoubleCheckErrMsg = '동일한 비밀번호를 입력해 주세요'
      isPwDoubleCheck = false
    }
    else {
      isPwDoubleCheck = true;
    }

    setState({
      ...state,
      isPwDoubleCheck: isPwDoubleCheck,
      pwDoubleCheckErrMsg : pwDoubleCheckErrMsg
    })

  }
  // 이름 입력상자 입력 이벤트
  const onChangeName=(e)=>{
    const regExp = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g;

    const {value} = e.target;
    let name = value.replace(regExp, '');
    let nameErrMsg = '';
    let isName = false;

    if (value === '') {
      nameErrMsg = '이름을 입력해 주세요';
      isName = false;
    }
    else {
      nameErrMsg = '';
      isName = true;
    }
    setState({
      ...state,
      name : name,
      nameErrMsg : nameErrMsg,
      isName : isName
    })
  }
  // 이메일 입력상자 입력 이벤트
  const onChangeEmail=(e)=>{
    const regExp1 = /\s/g;
    const regExp2 =/^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*@[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*\.[A-Za-z]{2,3}$/g;
    const regExp3 = /[@()\\[\]":;,<>]/g;

    const {value} = e.target;
    let emailErrMsg = '';
    let isEmail = false;

    if (value === '') {
      emailErrMsg = '이메일을 입력해 주세요';
      isEmail = false;
    }
    else if (regExp1.test(value) === true || regExp2.test(value) === false || regExp3.test(value) === false) {
      emailErrMsg = '이메일 형식으로 입력해 주세요.';
      isEmail = false;
    }
    else {
      emailErrMsg = '';
      isEmail = true;
    }

    setState({
      ...state,
      email : value,
      emailErrMsg : emailErrMsg,
      isEmail : isEmail
    })

  }
  // 이메일 중복확인 버튼 클릭 이벤트
  const onChangeEmailDoubleCheck=(e)=>{
    e.preventDefault();

    const regExp1 = /\s/g;
    const regExp2 =/^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*@[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*\.[A-Za-z]{2,3}$/g;
    const regExp3 = /[@()\\[\]":;,<>]/g;

    const {email} = state;
    let emailDoubleCheck = false;

    if (email === '') {
      isConfirmModalOpenFn('이메일을 입력해주세요');
    }
    else if (regExp1.test(email) === true || regExp2.test(email) === false || regExp3.test(email) === false) {
      isConfirmModalOpenFn('이메일 형식으로 입력해 주세요.');
    }
    else {
      axios({
        url: 'http://kiik52.dothome.co.kr/spiderman/member_select.php',
        method: 'GET'
      })
      .then((res)=>{
        let result = res.data.map((item) => item.email === state.email);
        if (result.includes(true)) {
          isConfirmModalOpenFn('사용 불가능한 이메일 입니다.');
          emailDoubleCheck = false;
        } 
        else {
          isConfirmModalOpenFn('사용 가능한 이메일 입니다.');
          emailDoubleCheck = true;
        }
        setState({
          ...state,
          emailDoubleCheck: emailDoubleCheck
        });
      })
      .catch((err)=>{
        console.log('Axios 실패 결과 : ', err.data);
      })
    }


  }
  // 핸드폰 입력상자 입력 이벤트
  const onChangeHp=(e)=>{
    const regExp1 = /[^\d]/g

    const {value} = e.target;
    let hp = value.replace(regExp1, '');
    let hpErrMsg = '';
    let isHp = false;

    if( value.length > 1 ){
      isHp = true;
    }
    else {
        isHp = false;
    }
    if (state.isAnotherHp && hp.length === 0) {
      hpErrMsg = '휴대폰 번호를 입력해주세요';
    }

    setState({
      ...state,
      hp: hp,
      isHp: isHp,
      hpErrMsg: hpErrMsg,
    })
  }
  // 핸드폰 인증번호 받기 버튼 클릭 이벤트
  const onClickHpCertified=(e)=>{
    e.preventDefault();

    const regExp2 = /^01[0|1|2|6|7|8|9]+[0-9]{3,4}[0-9]{4}$/g; // 10~11자리의 01로 시작하는 핸드폰 번호

    let num = Math.floor(Math.random() * 900000 + 100000);
    let isCertificationNumberInputBox = false;
    let isInputHp = false;
    let isHp = true;
    let CertificationNumberInputBox = '';

    if( regExp2.test( state.hp )===false ){
      isConfirmModalOpenFn('잘못된 휴대폰 번호 입니다. \n 확인 후 다시 시도해 주세요.');
      isCertificationNumberInputBox = false;
      isInputHp = false;
      isHp = true;
  }
  else {
      isConfirmModalOpenFn(`인증번호가 발송되었습니다. \n ${num}`);
      isCertificationNumberInputBox = true;
      isInputHp = true;
      isHp = false;
      CertificationNumberInputBox = '';
  }

    setState({
      ...state,
      CertificationNumber: num,
      CertificationNumberInputBox: CertificationNumberInputBox,
      isCertificationNumberInputBox: isCertificationNumberInputBox,
      isHp: isHp,
      isInputHp: isInputHp
    });
  }
  // 인증번호 입력상자 온 체인지(키업) 이벤트 구현
  const onChangeCertificationNumberInputBox=(e)=>{
    const {value} = e.target;
    const regExp1 = /[^\d]/g;
    let CertificationNumberInputBox = value.replace(regExp1, "");
    let isHpNumOkBtn = false;

    if (value.length >= 1) {
        clearInterval(state.setId);
    }

    // 공백도 1을 포함하기 때문에 1이상이 아니 1보다 커야한다.
      if (CertificationNumberInputBox.length >= 1) {
        isHpNumOkBtn = true;
      } 
      else {
        isHpNumOkBtn = false;
      }

      setState({
        ...state,
        CertificationNumberInputBox: CertificationNumberInputBox,
        isHpNumOkBtn: isHpNumOkBtn
      })
  }
  // 인증번호 확인 버튼 클릭 이벤트 구현
  const onClickHpOkBtn=(e)=>{
    e.preventDefault();
    let hpCertified = false;
    let isCertificationNumberInputBox  = true;
    let isAnotherHp = false;
    let isHpNumOkBtn = false;
    let isHp = false;

    if (Number(state.CertificationNumberInputBox) === state.CertificationNumber) {
        isConfirmModalOpenFn('인증에 성공 하였습니다.');
        isCertificationNumberInputBox = false;
        hpCertified = true;
        isAnotherHp = true;
        isHp = true;
    } else {
      isConfirmModalOpenFn('잘못된 인증 코드 입니다.');
        isCertificationNumberInputBox = true;
        hpCertified = false;
        isAnotherHp = false;
        isHp = false;
    }
    setState({
        ...state,
        isHp: isHp,
        isHpNumOkBtn: isHpNumOkBtn,
        isCertificationNumberInputBox: isCertificationNumberInputBox,
        isAnotherHp: isAnotherHp,
        hpCertified: hpCertified
    })
  }
  // 다른번호 인증 버튼 클릭 이벤트 구현
  const onClickAnotherHpBtn=(e)=>{
    e.preventDefault();

    setState ({
        ...state,
        isInputHp: false,
        isAnotherHp: false,
        isHpNumOkBtn: false,
        isHp: true,
        hp: '',
        hpErrMsg: '휴대폰 번호를 입력해주세요.'

    })
  }
  // 인증번호 타이머카운트 이벤트 구현
  function hpTimerCount() {
    let setId  = 0;
    let minute = 2;
    let second = 59; //0~59

    setId = setInterval(function () {
        second--;
        if (second < 0) {
        second = 59;
        minute--;
        if (minute < 0) {
          clearInterval(setId);
          minute = 0;
          second = 0;
          isConfirmModalOpenFn('유효 시간이 만료되었습니다. \n 다시 시도해 주세요.');
          }
        }

        setState({
            ...state,
            setId: setId,
            minute: minute,
            second: second
        })
    }, 1000);
  }
  useEffect(() => {
    if (isTimer) {
      hpTimerCount(); // isTimer가 true일 때에만 타이머 함수 실행
    }
  }, [isTimer]);

  // 카카오 주소검색 api 팝업창
  const addressSearchFn=()=>{
    const _fileName = './address_popup.html';
    const _winName = '_address_api';
    const _width = 550;
    const _height = 569;
    const _top =  (window.innerHeight-420)/2;
    const _left = (window.innerWidth-_width)/2;
    window.open( _fileName , _winName ,`width=${_width},height=${_height},top=${_top},left=${_left}`);
  }
  // 주소검색 버튼 클릭 이벤트 구현
  const onClickAddressSearchBtn=(e)=>{
    e.preventDefault();
    addressSearchFn();
  }
  // address1 입력상자 입력 이벤트 구현
  const onChangeInputAddr1=(e)=>{
    // const {value} = e.target;

    // setState({
    //     ...state,
    //     address1: value
    // })
  }
  // address2 입력상자 입력 이벤트 구현
  const onChangeInputAddr2=(e)=>{
    // const {value} = e.target;

    // setState({
    //     ...state,
    //     address2: value
    // })
  }
  // 주소 재검색 버튼 클릭 이벤트 구현
  const onClickAddrReBtn=(e)=>{
      e.preventDefault();
      addressSearchFn();
  }
  // 로딩시 세션스토리지에 저장된 값(search_address) 불러오고 유지하기
  // 비동기 방식으로 처리 (Promise)
  const getSessionAddress=()=>{
    function getPromise(){
      return new Promise((success, error) => {
        let address1 = '';
        let address2 = '';
        let isAddrHide = false;
        let isAddrApiBtn = false;
            
        if ( sessionStorage.getItem('search_address') !== null ) {
          try {
            address1 = JSON.parse(`${sessionStorage.getItem('search_address')}`).address1
            address2 = JSON.parse(`${sessionStorage.getItem('search_address')}`).address2
            isAddrHide = true;
            isAddrApiBtn = true;

            // 주소 객체 생성
            const Obj = {
              address1: address1,
              address2: address2,
              isAddrHide: isAddrHide,
              isAddrApiBtn: isAddrApiBtn
            }
            success(Obj);
          }
          catch {
            error('검색 주소가 없습니다.')
          }
        }
        else {
          address1 = '';
          address2 = '';
          isAddrHide = false;
          isAddrApiBtn = false;
          error('주소가져오기 오류(주소값 없음)');
        }
      });
    }
      // 세션에서 주소를 가져오고 성공하면 성공 객체 데이터를 가져와서 state에 저장
      getPromise()
      .then((res)=>{
        setState({
          ...state,
          address1: res.address1,
          address2: res.address2,
          isAddrHide: res.isAddrHide,
          isAddrApiBtn: res.isAddrApiBtn
        });
      })
      .catch((err)=>{
        return console.log(err);
      });
  }
  React.useEffect(()=>{
      getSessionAddress();
  },[state.address1, state.address2])

  // 생년 입력상자 입력 이벤트 구현
  const onChangeYear=(e)=>{
    const regExp1 = /[^\d]/g;
    const {value} = e.target;
    const birthYear = value.replace(regExp1, '');

    setState({
      ...state,
      birthYear: birthYear
    })
  }
  // 생월 입력상자 입력 이벤트 구현
  const onChangeMonth=(e)=>{
    const regExp1 = /[^\d]/g;
    const {value} = e.target;
    const birthMonth = value.replace(regExp1, '');

    setState({
      ...state,
      birthMonth: birthMonth
    })
  }
  // 생일 입력상자 입력 이벤트 구현
  const onChangeDate=(e)=>{
    const regExp1 = /[^\d]/g;
    const {value} = e.target;
    const birthDate = value.replace(regExp1, '');

    setState({
      ...state,
      birthDate: birthDate
    })
  }
  // 생년월일 전체 입력상자 입력 이벤트 구현
  useEffect(()=>{
    const newYear = new Date().getFullYear(); // 현재년도  숫자
    const regExp2 = /^(?:0?[1-9]|1[0-2])$/g; // 생월 01 ~ 09 또는 1 ~ 9 | 10 11 12
    const regExp3 = /^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g; // 생월 01 ~ 09 또는 1 ~ 9 | 10 ~ 19 | 20~29| 30-31
    let isBirth = false;
    let birthErrMsg = '';

    if (state.birthYear === '' &&  state.birthMonth === '' && state.birthDate === '') {
      isBirth = false;
      birthErrMsg = '';
    }
    else {
      if (Number(state.birthYear) > newYear) {
        isBirth = false;
        birthErrMsg = '생년월일이 미래로 입력 되었습니다.';
      }
      else if (Number(state.birthYear) < newYear-100) {
        isBirth = false;
        birthErrMsg = '생년월일을 다시 확인해주세요.';
      }
      else if (Number(state.birthYear) >= newYear - 14) {
        isBirth = false;
        birthErrMsg = '만 14세 미만은 가입이 불가합니다.'
      }
      else {
        if (regExp2.test(state.birthMonth) === false) {
          isBirth = false;
          birthErrMsg = '태어난 월을 정확하게 입력해 주세요.'
        }
        else {
          if (regExp3.test(state.birthDate) === false) {
            isBirth = false;
            birthErrMsg = '태어난 일을 정확하게 입력해 주세요.'
          }
          else {
            isBirth = true;
            birthErrMsg = ''
          }
        }
      }
    }
    setState({
      ...state,
      isBirth: isBirth,
      birthErrMsg: birthErrMsg
    });

  },[state.birthYear, state.birthMonth, state.birthDate])

  // 이용약관동의 체크박스 전체 클릭 이벤트 구현
  const onChangeAgreetoTermsofUseAllCheck=(e)=>{
    const {checked} = e.target;
    let AgreetoTermsofUse = [];

    if (checked) {
      AgreetoTermsofUse = state.AgreetoTermsofUseContent;
    }
    else {
      AgreetoTermsofUse = [];
    }

    setState({
      ...state,
      AgreetoTermsofUse: AgreetoTermsofUse
    })
  }
  // 이용약관동의 체크박스 개별 클릭 이벤트 구현
  const onChangeAgreetoTermsofUseCheck=(e)=>{
    const {value, checked} = e.target;
    let filteredAgreements = [];

    if (checked === true) {     // 체크되면 배열안에 값 저장
      // 무료배송 체크 시 (SMS, 이메일) 상태변수 저장
      if (value === '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)') {
        // SMS와 이메일 모두 이용약관동의에 없다면 저장
        if (state.AgreetoTermsofUse.includes('SMS') === false && state.AgreetoTermsofUse.includes('이메일') === false) {
          setState({...state, AgreetoTermsofUse: [...state.AgreetoTermsofUse, value, 'SMS', '이메일']});
        }
        else if (state.AgreetoTermsofUse.includes('SMS') === true && state.AgreetoTermsofUse.includes('이메일') === false) {
          setState({...state, AgreetoTermsofUse: [...state.AgreetoTermsofUse, value, '이메일']});
        }
        else if (state.AgreetoTermsofUse.includes('SMS') === false && state.AgreetoTermsofUse.includes('이메일') === true) {
          setState({...state, AgreetoTermsofUse: [...state.AgreetoTermsofUse, value, 'SMS']});
        }
        else if (state.AgreetoTermsofUse.includes('SMS') === true && state.AgreetoTermsofUse.includes('이메일') === true) {
          setState({...state, AgreetoTermsofUse: [...state.AgreetoTermsofUse, value]});
        }
      }
      // SMS, 이메일이 둘다 체크 되면 무료배송 체크 
      // SMS === false, 이메일 === true 인 경우
      // 이메일 체크되있고, SMS은 체크가 안되어 있는 상태
      else if (value === 'SMS' && state.AgreetoTermsofUse.includes('이메일') === true) {   
        setState({...state,AgreetoTermsofUse: [...state.AgreetoTermsofUse, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)', value]})
      }
      // SMS === true, 이메일 === false 인 경우
      // SMS 체크되있고, 이메일은 체크가 안되어 있는 상태
      else if (value === '이메일' && state.AgreetoTermsofUse.includes('SMS') === true) {
        setState({...state,AgreetoTermsofUse: [...state.AgreetoTermsofUse, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)', value]})
      }
      // 그외 체크박스
      else {
        setState({...state, AgreetoTermsofUse: [...state.AgreetoTermsofUse, value]});
      }
    }
    else {  // 체크해제되면 배열에서 삭제
      // 전체 체크 해제
      if (value === '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)') {
        // 무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택) 제거
        // SMS 제거
        // 이메일 제거
        // 재배열 저장
        filteredAgreements = state.AgreetoTermsofUse.filter((item)=>item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
        filteredAgreements = filteredAgreements.filter((item)=>item !== 'SMS')
        filteredAgreements = filteredAgreements.filter((item)=>item !== '이메일')
        setState({...state,AgreetoTermsofUse: filteredAgreements});
      }
      // SMS, 이메일 둘중 하나만 체크 해제되면 무료배송은 무조건 배열안에서 삭제
      // SMS, 이메일 둘다 체크되어 있을 때 SMS만 체크 해제했을 경우
      else if (value === 'SMS' && state.AgreetoTermsofUse.includes('이메일') === true) {
        filteredAgreements = state.AgreetoTermsofUse.filter((item)=>item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
        filteredAgreements = filteredAgreements.filter((item)=>item !== 'SMS');
        setState({...state,AgreetoTermsofUse: filteredAgreements});
      }
      // 이메일, SMS 둘다 체크되어 있을 때 이메일만 체크 해제했을 경우
      else if (value === '이메일' && state.AgreetoTermsofUse.includes('SMS') === true) {
        filteredAgreements = state.AgreetoTermsofUse.filter((item)=>item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
        filteredAgreements = filteredAgreements.filter((item)=>item !== '이메일');
        setState({...state,AgreetoTermsofUse: filteredAgreements});
      }
      else {
        filteredAgreements = state.AgreetoTermsofUse.filter((item)=>item !== value);
        setState({...state,AgreetoTermsofUse: filteredAgreements});
      }
    }
  }

  // 이용약관동의 약관보기 클릭 이벤트 구현
  const onClickAgreetoTermsofUseOpenFn=(e)=>{
    e.preventDefault();
    isAgreeToTermsOfUseModalOpenFn();
  }


  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main id="signUpMain">
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
            <form action="./SignUpComponent.jsx" name="form_sign_up" id="formSignUp" method="post">
              <ul>
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>아이디</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text"
                      maxLength="16"
                      name="input_id"
                      id="inputId"
                      onChange={onChangeId} 
                      value={state.userId}
                      placeholder="아이디를 입력해주세요"
                      />
                      <button
                      type="button"
                      className="id-ok-btn"
                      onClick={onClickIdDoubleCheck}
                      >중복확인</button>
                      <p className={`error-message${state.isUserId ? '' : ' on'}`}>{state.idErrMsg}</p>
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
                      <input type="password"
                      maxLength='16'
                      name='input_pw1'
                      id='inputPw1'
                      autoComplete="off"
                      placeholder='비밀번호를 입력해주세요'
                      onChange={onChangePw}
                      value={state.userPw}
                      />
                      <p className={`error-message${state.isUserPw ? '' : ' on'}`}>{state.pwErrMsg}</p>
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
                      <input type="password"
                      maxLength='16'
                      name='input_pw2'
                      id='inputPw2'
                      autoComplete="off"
                      placeholder='비밀번호를 한번더 입력해주세요'
                      onChange={onChangePwDoubleCheck}
                      />
                      <p className={`error-message${state.isPwDoubleCheck ? '' : ' on'}`}>{state.pwDoubleCheckErrMsg}</p>
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
                      <input type="text"
                      required
                      maxLength="20"
                      name="input-name"
                      id="inputName"
                      placeholder="이름을 입력해주세요"
                      onChange={onChangeName}
                      value={state.name}
                      />
                        <p className={`error-message ${state.isName ? '' : ' on'}`}>{state.nameErrMsg}</p>
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
                      <input type="text"
                       name="input-email"
                       id="inputEmail"
                       placeholder="예:spiderman@naver.com"
                       onChange={onChangeEmail}
                       value={state.email}
                       />
                      <button type="button"
                       className="email-ok-btn"
                       onClick={onChangeEmailDoubleCheck}
                       >중복확인</button>
                      <p className={`error-message ${state.isEmail ? '' : ' on'}`}>{state.emailErrMsg}</p>
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
                      <input
                      type="text"
                      disabled={state.isInputHp}
                      maxLength="11"
                      name="input-hp"
                      id="inputHp"
                      placeholder="숫자만 입력해 주세요."
                      onChange={onChangeHp}
                      value={state.hp}
                      />
                      <button 
                      disabled = {!state.isHp}
                      type="button"
                      className={`hp-num-btn${state.isHp ? ' on' : ''}`}
                      onClick={onClickHpCertified}
                      >인증번호 받기</button>
                      <button 
                      type="button" 
                      className={`hp-num2-btn${state.isAnotherHp ? ' on' : ''}`}
                      onClick={onClickAnotherHpBtn}
                      >
                      다른번호 인증
                      </button>
                      <p className={`error-message${state.isAnotherHp ? '' : ' on'}`}>{state.hpErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className={`hp-ok-box${state.isCertificationNumberInputBox ? ' on' : ''}`}>
                  <div className="left">
                    <div className="left-wrap">
                    </div>                                
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                      type="text"
                      maxLength={6}
                      name='input_hp_ok'
                      id='inputHpOk'
                      placeholder='인증번호를 입력해 주세요.'
                      onChange={onChangeCertificationNumberInputBox}
                      value={state.CertificationNumberInputBox}
                      />
                      <span className='signup-time-count'>
                        {`${state.minute < 10 ? `0${state.minute}` : state.minute}:${state.second < 10 ? `0${state.second}` : state.second}`}
                      </span>
                      <button
                      type="button"
                      className={`hp-num-ok-btn${state.isHpNumOkBtn ? ' on' : ''}`}
                      onClick={onClickHpOkBtn}
                      >인증번호 확인</button>
                      <p className='info-message hp-info-message'>
                        인증번호가 오지 않는다면, 통신사 스팸 차단 서비스 혹은 휴대폰 번호 차단 여부를 확인해주세요.
                      </p>
                    </div>
                  </div>
                </li> 
                <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputAddr"><strong>주소</strong><i>*</i></label>
                    </div>                                
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" 
                      className={`addr-hide${state.isAddrHide ? ' on' : ''}`} 
                      name='input_addr1'
                      id='inputAddr1'
                      placeholder='카카오 주소 검색 API'
                      onChange={onChangeInputAddr1}
                      value={state.address1}
                      disabled={state.isAddrHide}
                      />
                      <button
                      type="button"
                      className={`addr-hide addr-re-btn${state.isAddrHide ? ' on' : ''}`} 
                      onClick={onClickAddrReBtn}
                      >
                      <span><img src="./img/sign_up/ico_search.svg" alt=""/>재검색</span>
                      </button>
                      <button
                      type="button"
                      className={`addr-api-btn${state.isAddrApiBtn ? ' on' : ''}`}
                      onClick={onClickAddressSearchBtn}
                      >
                      <img src="./img/sign_up/ico_search.svg" alt=""/>주소검색</button>                                
                  </div>                                    
                </div>
              </li>                        
              <li className={`addr-hide${state.isAddrHide ? ' on' : ''}`}>
                  <div className="left">
                    <div className="left-wrap">
                    </div>                                
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                      type="text"
                      name='input_addr2'
                      id='inputAddr2'
                      placeholder='나머지 주소를 입력해주세요'
                      onChange={onChangeInputAddr2}
                      value={state.address2}
                      disabled={state.isAddrHide}
                      />                                        
                    </div>
                  </div>
              </li>                        
              <li className={`addr-hide${state.isAddrHide ? ' on' : ''}`}>
                <div className="left">
                  <div className="left-wrap">
                </div>
              </div>
              <div className="right">
                  <div className="right-wrap">
                    <em className='addr-map-area'>샛별배송</em>
                    <p className={`addr-info addr-info2${state.isAddrHide ? ' on' : ''}`}>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
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
                          <li><input
                          type="text"
                          name="year"
                          id="year"
                          placeholder="YYYY"
                          maxLength={4}
                          onChange={onChangeYear}
                          value={state.birthYear}
                          /></li>
                          <li><i>/</i></li>
                          <li><input
                          type="text"
                          name="month"
                          id="month"
                          placeholder="MM"
                          maxLength={2}
                          onChange={onChangeMonth}
                          value={state.birthMonth}
                          /></li>
                          <li><i>/</i></li>
                          <li><input
                          type="text"
                          name="date"
                          id="date"
                          placeholder="DD"
                          maxLength={2}
                          onChange={onChangeDate}
                          value={state.birthDate}
                          /></li>
                        </ul>
                      </div>
                      <p className={`error-message${state.isBirth ? '' : ' on'}`}>{state.birthErrMsg}</p>
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
                          <label htmlFor="allChk"><input type="checkbox" onChange={onChangeAgreetoTermsofUseAllCheck} checked={state.AgreetoTermsofUse.length === 7} name="all_chk" id="allChk" className="chk-btn" value=""/>전체 동의합니다.</label>
                          <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                        </li>
                        <li>
                        <label htmlFor="chk1"><input type="checkbox" onChange={onChangeAgreetoTermsofUseCheck} checked={state.AgreetoTermsofUse.includes('이용약관 동의(필수)')} name='chk1' id='chk1'  className='chk-btn'  value='이용약관 동의(필수)'/>이용약관 동의(필수)</label>
                          <button type="button" onClick={onClickAgreetoTermsofUseOpenFn}><span className='viewTerms'>약관보기</span><img src="./img/sign_up/arrow_right.png" alt=""/></button>
                        </li>
                        <li>
                          <label htmlFor="chk2"><input type="checkbox" onChange={onChangeAgreetoTermsofUseCheck} checked={state.AgreetoTermsofUse.includes('개인정보 수집∙이용 동의(필수)')} name="chk2" id="chk2" className="chk-btn" value="개인정보 수집∙이용 동의(필수)"/>개인정보 수집∙이용 동의</label>(필수)
                          <button type="button" onClick={onClickAgreetoTermsofUseOpenFn}><span className='viewTerms'>약관보기</span><img src="./img/sign_up/arrow_right.png" alt=""/></button>
                        </li>
                        <li>
                          <label htmlFor="chk3"><input type="checkbox" onChange={onChangeAgreetoTermsofUseCheck} checked={state.AgreetoTermsofUse.includes('개인정보 수집∙이용 동의(선택)')} name="chk3" id="chk3" className="chk-btn" value="개인정보 수집∙이용 동의(선택)"/>개인정보 수집∙이용 동의</label>(선택)
                          <button type="button" onClick={onClickAgreetoTermsofUseOpenFn}><span className='viewTerms'>약관보기</span><img src="./img/sign_up/arrow_right.png" alt=""/></button>
                        </li>
                        <li>
                          <label htmlFor="chk4"><input type="checkbox" onChange={onChangeAgreetoTermsofUseCheck} checked={state.AgreetoTermsofUse.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')} name="chk4" id="chk4" className="chk-btn" value="무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)"/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label>(선택)
                        </li>
                        <li className='smsEmail'>
                          <label htmlFor="chk5"><input type="checkbox" onChange={onChangeAgreetoTermsofUseCheck} checked={state.AgreetoTermsofUse.includes('SMS')} name="chk5" id="chk5" className="chk-btn" value="SMS"/>SMS</label>
                          <label htmlFor="chk6" className='chk6'><input type="checkbox" onChange={onChangeAgreetoTermsofUseCheck} checked={state.AgreetoTermsofUse.includes('이메일')} name="chk6" id="chk6" className="chk-btn" value="이메일"/>이메일</label>
                        </li>
                        <li>
                          <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                        </li>
                        <li>
                          <label htmlFor="chk7"><input type="checkbox" onChange={onChangeAgreetoTermsofUseCheck} checked={state.AgreetoTermsofUse.includes('본인은 만 14세 이상입니다.(필수)')} name="chk7" id="chk7" className="chk-btn" value="본인은 만 14세 이상입니다.(필수)"/>본인은 만 14세 이상입니다.</label>(필수)
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

// props의 자료형 선언하기 : PropTypes
SignUpComponent.propTypes = {
  회원: PropTypes.shape({
      // 속성이름: 자료형지정 
      // 필수입력사항 = isRequired / 선택입력사항 = ''
      userId: PropTypes.string.isRequired,                // string
      isUserId: PropTypes.bool,                // boolean
      idErrMsg: PropTypes.string,
      idDoubleCheck: PropTypes.bool.isRequired,          // boolean : 타입스크립트 블리언 bool : 프롭 타입스

      userPw: PropTypes.string.isRequired,              // string
      pwErrMsg : PropTypes.string,                                         // string
      isUserPw : PropTypes.bool, 
      pwDoubleCheck: PropTypes.string.isRequired,          // string
      pwDoubleCheckErrMsg : PropTypes.string,                                         // string

      name: PropTypes.string.isRequired,                  // string
      nameErrMsg: PropTypes.string,
      isName: PropTypes.bool,

      email: PropTypes.string.isRequired,                // string
      emailErrMsg: PropTypes.string,
      isEmail: PropTypes.bool,
      emailDoubleCheck: PropTypes.bool.isRequired,          // boolean

      hp: PropTypes.string.isRequired,                // number
      hpCertified: PropTypes.bool.isRequired,          // boolean
      isHp: PropTypes.bool, 
      CertificationNumber: PropTypes.number,
      CertificationNumberInputBox: PropTypes.string,
      isCertificationNumberInputBox: PropTypes.bool,
      isInputHp: PropTypes.bool,
      isAnotherHp: PropTypes.bool,
      isHpNumOkBtn: PropTypes.bool,
      setId: PropTypes.number,
      minute: PropTypes.number,
      second: PropTypes.number,
      hpErrMsg: PropTypes.string,

      address1: PropTypes.string.isRequired,                 // string
      address2: PropTypes.string.isRequired,                 // string
      isAddrHide: PropTypes.bool,   
      isAddrApiBtn: PropTypes.bool,   

      birthYear: PropTypes.string,                             // number
      birthMonth: PropTypes.string,                             // number
      birthDate: PropTypes.string,                             // number
      isBirth : PropTypes.bool,
      birthErrMsg: PropTypes.string,

      AgreetoTermsofUseContent: PropTypes.array,
      AgreetoTermsofUse: PropTypes.array.isRequired,           // 배열 array
  })
}

// 회원관리의 모든 변수 관리
SignUpComponent.defaultProps = {
  회원: {
      userId: '',                     // string
      isUserId: false,                // boolean
      idErrMsg: '',
      idDoubleCheck: false,          // boolean 타입스크립트 블리언 bool 프롭 타입스

      userPw: '',                   // string
      pwErrMsg: '',
      isUserPw: false,
      pwDoubleCheck: '',               // string
      pwDoubleCheckErrMsg: '',

      name: '',                       // string
      nameErrMsg: '',
      isName: false,

      email: '',                     // string
      emailDoubleCheck: false,          // boolean
      emailErrMsg: '',
      isEmail: false,

      hp: '',                     // number
      hpCertified: false,          // boolean
      isHp: false,
      CertificationNumber: 0,
      CertificationNumberInputBox:'',
      isCertificationNumberInputBox : false,
      isInputHp : false,
      isAnotherHp : false,
      isHpNumOkBtn: false,
      setId: 0,
      minute: 2,
      second: 59,
      hpErrMsg: '',

      address1: '',                      // string
      address2: '',                      // string
      isAddrHide: false,
      isAddrApiBtn: false,

      birthYear: '',                       // number
      birthMonth: '',                       // number
      birthDate: '',                       // number
      isBirth: false,
      birthErrMsg: '',

      AgreetoTermsofUseContent: [
          `이용약관 동의(필수)`,
          `개인정보 수집∙이용 동의(필수)`,
          `개인정보 수집∙이용 동의(선택)`,
          `무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)`,
          `SMS`,
          `이메일`,
          `본인은 만 14세 이상입니다.(필수)`
      ],
      AgreetoTermsofUse: [],               // 배열 array
  }
}
