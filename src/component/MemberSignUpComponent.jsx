import React, {useState} from 'react';
import SignUpComponent from './memberComponent/signup/SignUpComponent'
import ConfirmModalComponent from './memberComponent/signup/ConfirmModalComponent'
import AgreetoTermsofUseModalComponent from './memberComponent/signup/AgreetoTermsofUseModalComponent';

export default function MemberSignUpComponent () {

  const [state, setState] = useState({
    isConfirmModal: false,
    msg: '',
    isTimer: false,
  });

    const [isAgreeToTermsOfUseModal, setIsAgreeToTermsOfUseModal] = useState({
      isAgreeToTermsOfUseModal: false
    })

    // isTermsView, msg 상태변경 함수
  const isAgreeToTermsOfUseModalOpenFn=()=>{
    setIsAgreeToTermsOfUseModal({
      ...isAgreeToTermsOfUseModal,
      isAgreeToTermsOfUseModal: true
    })
  }

  //  TermsViewFn 닫기 버튼 클릭 이벤트
  const isAgreeToTermsOfUseModalCloseFn=()=>{
    setIsAgreeToTermsOfUseModal({
      ...isAgreeToTermsOfUseModal,
      isAgreeToTermsOfUseModal: false
    })
  }

  // confirmModal의 상태 변경 (열기) 함수
  const isConfirmModalOpenFn=(msg)=>{
    setState({
      ...state,
      isConfirmModal: true,
      msg: msg
    })
  }
  // confirmModal의 상태 변경 (닫기) 함수
  const isConfirmModalCloseFn=()=>{
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
      <SignUpComponent isConfirmModalOpenFn={isConfirmModalOpenFn} isAgreeToTermsOfUseModalOpenFn= {isAgreeToTermsOfUseModalOpenFn} isTimer={state.isTimer}/>
      {state.isConfirmModal && <ConfirmModalComponent msg={state.msg} isConfirmModalCloseFn={isConfirmModalCloseFn}/>}
      {isAgreeToTermsOfUseModal.isAgreeToTermsOfUseModal && <AgreetoTermsofUseModalComponent isAgreeToTermsOfUseModalCloseFn={isAgreeToTermsOfUseModalCloseFn}/>}
    </>
  );
};