import React from 'react';

export default function AgreetoTermsofUseModalComponent({ isAgreeToTermsOfUseModalCloseFn }) {

  const onClickClose = (e) => {
    e.preventDefault();
    isAgreeToTermsOfUseModalCloseFn();
  }

  return (
    <div id="AgreeToTermsOfUse">
      <div className="wrap">
        <div className="container">
          <h1>이용약관(필수)</h1>
          <div className="content">
            <strong className='main-title'>총칙</strong>
            <strong className='main-title'>제1조 [목적]</strong>
            이 약관은 주식회사 컬리(이하 주식회사 컬리 또는 주식회사 컬리가 운영하는 인터넷사이트를 “컬리”라 함)가 운영하는 온라인쇼핑몰에서 제공하는 전자상거래 관련 서비스(이하 “서비스”라 함)를 이용함에 있어 컬리와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            <strong className='main-title'>제2조 [목적]</strong>
            1. “사이버몰”이란 컬리가 상품 또는 용역(이하 “상품 등” 이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 상품 등을 거래할 수 있도록 설정한 가상의 영업장(http://www.kurly.com 등 컬리가 운영하는 웹사이트 및 모바일 웹, 앱 등을 모두 포함)을 말합니다.
            <br />
            2. "이용자"란 컬리에 접속하여 이 약관에 따라 컬리가 제공하는 서비스를 이용하는 고객을 말합니다.
            <br />
            3. “회원”이란 컬리에 회원등록을 한 자로서, 계속적으로 컬리가 제공하는 서비스를 이용할 수 있는 자를 말합니다.
            <br />
            4. "휴면회원"이란 컬리의 회원 중 최종접속일로부터 1년 이상 서비스 이용 기록이 없는 자를 말합니다. 휴면회원은 컬리의 정책에 따라 서비스 이용이 제한될 수 있으며, 다시 정상적인 회원 서비스를 이용하기 위하여는 거래 안전 등을 위하여 컬리가 정하는 본인확인 절차 등을 이행하여야 합니다.
            <br />
            5. “마켓플레이스 서비스”란 컬리가 제공하는 통신판매중개 서비스 및 관련 부가서비스 일체를 말합니다.
            <br />
            6. “판매자”란 컬리에 판매회원으로 회원등록을 하고 컬리가 제공하는 통신판매중개서비스를 통하여 상품 등을 판매하는 자로서 판매자용 이용약관(마켓플레이스 판매자용 이용약관)에 동의하고 컬리와 마켓플레이스 서비스 이용계약을 체결한 자를 말합니다.
            <strong className='main-title'>제3조 [목적]</strong>
            ① 컬리는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호/모사전송번호/전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보 보호책임자 등을 이용자가 쉽게 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
            <br />
            ② 컬리는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
            <br />
            ③ 컬리가 이 약관을 개정할 경우에는 적용일자 및 개정 내용을 명시하여 사이버몰에 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예 기간을 두고 공지합니다.
            <br />
            ④ 전항에 따라 공지된 적용일자까지 이용자가 명시적으로 거부의사를 표명하지 않을 경우에는 개정된 약관에 동의하는 것으로 간주하며, 변경된 약관에 동의하지 않는 회원은 회원 탈퇴를 요청할 수 있습니다.
            <br />
            ⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률(이하 “전자상거래법”이라 함), 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.
            <br />
            ⑥ 컬리는 이 약관에 규정되지 않은 세부적인 운영정책, 이용약관, 규칙, 지침 및 서비스 이용과 관련된 전반적인 내용(이하 총칭하여 “운영정책”이라 함)을 제정하여 운영할 수 있으며, 해당 내용을 사이버몰에 게시합니다. 운영정책은 이 약관과 더불어 고객 서비스 이용계약(이하 “이용계약”이라 함)의 일부를 구성합니다.
            <br />
            ⑦ 컬리는 컬리가 제공하는 서비스 중 특정 서비스에 관한 약관(이하 “개별약관”이라 함)을 별도로 제정할 수 있으며, 이용자가 개별약관에 동의한 경우 개별약관은 이용계약의 일부를 구성하고 개별약관에 이 약관과 상충되는 내용이 있을 경우 개별약관이 우선적으로 적용됩니다.
            <strong className='main-title'>II. 회사의 서비스</strong>
            <strong className='main-title'>제4조 [서비스의 제공 및 변경]</strong>
            ① 컬리는 다음과 같은 업무를 수행합니다.
            <br />
            1. 전자상거래 서비스(통신판매중개 서비스 포함) 및 이에 수반되는 기타 서비스
            <br />
            2. 기타 컬리가 정하는 업무
            <br />
            ② 컬리는 상품 등의 품절 또는 기술적 사양의 변경 등 사유가 발생하는 경우에는 장차 체결되는 계약에 의해 제공할 상품 등의 내용을 변경할 수 있습니다. 이 경우에는 변경된 상품 등의 내용 및 제공일자를 명시하여 현재의 상품 등의 내용을 게시한 곳에 즉시 공지합니다.
            <br />
            ③ 컬리가 제공하기로 이용자와 계약을 체결한 서비스의 내용을 상품 등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 즉시 통지합니다.
          </div>
          <div className="button-box">
            <button className='modal-ok-btn' onClick={onClickClose}><span>확인</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};