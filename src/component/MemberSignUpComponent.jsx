import React, {useState} from 'react';
import SignUpComponent from './memberComponent/signup/SignUpComponent'
import ConfirmModalComponent from './memberComponent/signup/ConfirmModalComponent'

export default function MemberSignUpComponent () {

  const [state, setState] = useState({
    isConfirmModal: false,
    msg: '',
    isTimer: false
  });

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
      <SignUpComponent isConfirmModalOpenFn={isConfirmModalOpenFn} isTimer={state.isTimer}/>
      {state.isConfirmModal && <ConfirmModalComponent msg={state.msg} isConfirmModalCloseFn={isConfirmModalCloseFn}/>}
    </>
  );
};