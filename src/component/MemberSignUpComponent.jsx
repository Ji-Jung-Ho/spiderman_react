import React, { useState } from 'react';
import SignUpComponent from './memberComponent/signup/SignUpComponent'
import ConfirmModalComponent from './memberComponent/signup/ConfirmModalComponent'
import AgreetoTermsofUseModalComponent from './memberComponent/signup/AgreetoTermsofUseModalComponent';
import RequirePersoanlInfomationModalComponent from './memberComponent/signup/RequirePersoanlInfomationModalComponent';

export default function MemberSignUpComponent() {

  const [state, setState] = useState({
    isConfirmModal: false,
    msg: '',
    isTimer: false,
  });

  // 이용약관동의 약관보기 상태 변수 함수
  const [isAgreeToTermsOfUseModal, setIsAgreeToTermsOfUseModal] = useState({
    isAgreeToTermsOfUseModal: false
  })

  // isTermsView, msg 상태변경 함수
  const isAgreeToTermsOfUseModalOpenFn = () => {
    setIsAgreeToTermsOfUseModal({
      ...isAgreeToTermsOfUseModal,
      isAgreeToTermsOfUseModal: true
    })
  }

  //  TermsViewFn 닫기 버튼 클릭 이벤트
  const isAgreeToTermsOfUseModalCloseFn = () => {
    setIsAgreeToTermsOfUseModal({
      ...isAgreeToTermsOfUseModal,
      isAgreeToTermsOfUseModal: false
    })
  }

  // 개인정보수집 동의 (필수) 상태 변수 함수
  const [isRequiredModal, setIsRequiredModal] = useState({
    isRequiredModal: false
  })

  // 개인정보수집 동의 (필수) 열기 함수
  const isRequiredModalOpenFn = () => {
    setIsRequiredModal({
      ...isRequiredModal,
      isRequiredModal: true
    })
  }

  // 개인정보수집 동의 (필수) 닫기 함수
  const isRequiredModalCloseFn = () => {
    setIsRequiredModal({
      ...isRequiredModal,
      isRequiredModal: false
    })
  }



  // confirmModal의 상태 변경 (열기) 함수
  const isConfirmModalOpenFn = (msg) => {
    setState({
      ...state,
      isConfirmModal: true,
      msg: msg
    })
  }
  // confirmModal의 상태 변경 (닫기) 함수
  const isConfirmModalCloseFn = () => {
    let isTimer = false;

    if (state.msg.indexOf('인증번호') !== -1) {
      isTimer = true;
    }
    else {
      isTimer = false;
    }

    setState({
      ...state,
      isConfirmModal: false,
      msg: '',
      isTimer: isTimer
    })
  }


  return (
    <>
      <SignUpComponent isConfirmModalOpenFn={isConfirmModalOpenFn}
        isAgreeToTermsOfUseModalOpenFn={isAgreeToTermsOfUseModalOpenFn}
        isRequiredModalOpenFn={isRequiredModalOpenFn}
        isTimer={state.isTimer} />
      {state.isConfirmModal && <ConfirmModalComponent msg={state.msg} isConfirmModalCloseFn={isConfirmModalCloseFn} />}
      {isAgreeToTermsOfUseModal.isAgreeToTermsOfUseModal && <AgreetoTermsofUseModalComponent isAgreeToTermsOfUseModalCloseFn={isAgreeToTermsOfUseModalCloseFn} />}
      {isRequiredModal.isRequiredModal && <RequirePersoanlInfomationModalComponent isRequiredModalCloseFn={isRequiredModalCloseFn} />}
    </>
  );
};