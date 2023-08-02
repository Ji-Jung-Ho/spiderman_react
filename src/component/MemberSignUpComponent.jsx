import React from 'react';
import SignUpComponent from './memberComponent/signup/SignUpComponent'
import ConfirmModalComponent from './memberComponent/signup/ConfirmModalComponent'

export default function MemberSignUpComponent () {

  const [state, setState] = React.useState({
    is컨펌모달: false,
    msg: '',
    isTimer: false
});

// is컨펌모달 상태변경 함수 구현 : 컨펌모달창 열기 함수
const isConfirmModalOpenFn=(msg)=>{
    setState({
        ...state,   // 상태변경 변수가 한개일 경우 안써도 됨
        is컨펌모달: true,
        msg: msg
    });
}
// is컨펌모달 상태변경 함수 구현 : 컨펌모달창 닫기 함수
const isConfirmModalCloseFn=(msg)=>{
    setState({
        ...state,   // 상태변경 변수가 한개일 경우 안써도 됨
        is컨펌모달: false,
        msg:'',
    });
}

  return (
    <>
      <SignUpComponent isConfirmModalOpenFn={isConfirmModalOpenFn} isTimer={state.isTimer}/>
        {state.is컨펌모달 && <ConfirmModalComponent msg={state.msg} isConfirmModalCloseFn={isConfirmModalCloseFn}/>}
    </>
  );
};