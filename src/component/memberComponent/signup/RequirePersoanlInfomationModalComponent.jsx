import React from 'react';

export default function RequirePersoanlInfomationModalComponent({ isRequiredModalCloseFn }) {

  const requiredModalCloseFn = (e) => {
    e.preventDefault();
    isRequiredModalCloseFn();
  }

  return (
    <div id='Require'>
      <div className="wrap">
        <div className="container">
          <h1>개인정보 수집·이용 동의(필수)</h1>
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
                  <td>
                    회원 가입의사 확인, 이용자 식별 및 본인여부, 회원자격 유지·관리,
                    계약 이행 및 약관변경 등의 고지를 위한 연락, 본인의사 확인 및
                    민원 등의 고객 고충 처리, 부정이용 방지, 비인가 사용방지 및
                    서비스 제공 및 계약의 이행, 서비스 이용 및 상담, 문의, 후기 등
                    원활한 의사소통 경로 확보, 맞춤형 회원 서비스 제공, 거점 기반
                    서비스 제공
                  </td>
                  <td>
                    이름, 아이디, 비밀번호, 휴대폰번호, 이메일, <strong>주소*</strong>
                  </td>
                  <td className='bold'>
                    회원탈퇴 <br /> 즉시 파기 <br /><br /> 부정이용 방지를 위하여
                    3개월 동안 보관 (아이디, 휴대폰 번호) 후 파기
                  </td>
                </tr>
                <tr>
                  <td>
                    서비스방문 및 이용기록 분석, 부정이용 방지 등을 위한 기록 관리
                  </td>
                  <td>
                    서비스 이용기록, 방문기록, 불량 이용기록, IP주소, 쿠키, MAC주소,
                    모바일 기기정보(앱 버전, OS 버전), ADID/IDFA(광고식별자)
                  </td>
                  <td className='bold'>
                    회원 탈퇴 즉시 또는 이용 목적 달성 즉시 파기
                  </td>
                </tr>
              </tbody>
            </table>
            <p className='sub-title'>
              ※ 단, 회원 탈퇴와 별개로 분쟁 조정, 고객문의 대응 및 법령 준수 이력
              증빙을 위하여 이메일, 문자, 알림톡 발송이력은 발송일로부터 6개월
              보관(이름, 아이디, 휴대폰 번호, 이메일) 후 파기합니다.
              <br /><br />
              ※ APPLE 계정을 통해 회원가입 할 경우 *에 해당하는 정보는 추후 서비스 이용과정에서 수집 및 이용됩니다.
              <br /><br />
              ※ 서비스 제공을 위해서 필요한 최소한의 개인정보입니다. 동의를 해
              주셔야 서비스를 이용하실 수 있으며, 동의하지 않으실 경우 서비스에
              제한이 있을 수 있습니다.
            </p>
          </div>
          <div className="button-box">
            <button type='button' onClick={requiredModalCloseFn}>
              <span>확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};