import React, {useState} from 'react';
import SignUpComponent from './memberComponent/signup/SignUpComponent'
import ConfirmModalComponent from './memberComponent/signup/ConfirmModalComponent'

export default function MemberSignUpComponent () {

  const [state, setState] = useState({
    isConfirmModal: false,
    msg: ''
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
    setState({
      ...state,
      isConfirmModal: false,
    })
  }


  return (
    <>
      <SignUpComponent isConfirmModalOpenFn={isConfirmModalOpenFn}/>
      {state.isConfirmModal && <ConfirmModalComponent msg={state.msg} isConfirmModalCloseFn={isConfirmModalCloseFn} isActive={state.isConfirmModal} />}
    </>
  );
};