[33mcommit bc9529c513b84895f9602bfa2895052a3b503ef2[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Wed Jul 26 22:20:24 2023 +0900

    Rename: VenomMainComponent
    
    VenomMainComponent
    - Component 이름 변경
    - isVenom1,2 상태 변수에 따라 Venom1, Venom2Component가 렌더링되게 구현
    
    Venom1, Venom2Component
    - character 요소 추가
    - character 이미지 추가

[33mcommit 2823a71256435dc4500cb6648cfc0db55112c2ae[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Sat Jul 22 13:10:25 2023 +0900

    Disign: AcrossTheSpiderVerseComponent character 구성 완료
    
    AcrossTheSpiderVerseComponen
    - character 이미지 추가

[33mcommit 6ac1e01775db15e280986c0a10568208edb59043[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Fri Jul 21 19:17:33 2023 +0900

    Disign: NewSpiderVerseComponent character 구성 완료
    
    NewSpiderVerseComponent
    - character 이미지 추가
    
    MilesMainComponent
    - Component 이름 변경
    - NewSpiderVerseComponent, ArcossTheSpiderVerse 상태 변수에 따라 각 영화 시리즈 렌더링 되게 구현
    
    spiderman_commonent.scss
    - NewSpiderVerse (miles1)에 대한 .charact-ul 및 .villain의 li 넓이 변경

[33mcommit 47569814cf11c95b74bd9022159bbf1484564a35[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Thu Jul 20 22:22:19 2023 +0900

    Disign: tomSpiderManMainComponent 화면 디자인 수정
    
    tomSpiderManMainComponent
    - 영화 시리즈 상태 변수에 따라 영화 정보가 렌더링 되게 구현
    - component 이름 수정
    
    HomeComingComponent, FarFromHomeComponent, NoWayHomeComponent
    - 각 컴포넌트별 character 요소 구현 완료
    - component 이름 수정
    - character 요소에 사용할 이미지 추가

[33mcommit 0592f58206a155b0b8e2eeb297fb02b8f07e516b[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Wed Jul 19 22:33:41 2023 +0900

    Disign: SpiderManComponent 영화 시리즈별 세분화 작업
    
    sam-spiderman, amazing-spiderman
    - 영화 시리즈별 Component 구현
    - MainComponent에서 상태 변수에 따라 각 영화의 시리즈가 렌더링 되도록 구현
    - 시리즈별 charcter 구현 완료
    
    tom-spiderman
    - character 이미지 추가
    - 시리즈별 Component 추가
    
    spiderman_component.scss
    - character li에 hover 시 scale 추가

[33mcommit a751e36a70af713231ca4ff1c22029b9a5636b5e[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Tue Jul 18 20:35:06 2023 +0900

    Disgin: spiderman component 세분화
    
    spiderman1component
    - character 이미지 호버 시 이미지 변경 기능 추가

[33mcommit 43ed427609fc7e2f3c512aeb022514045591af29[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Mon Jul 17 22:55:48 2023 +0900

    Disign: spiderman1 component character 디자인
    
    - character content의 요소를 json 데이터를 사용하지 않고 상태 변수를 통해 렌더링이 되게 수정
    - character img 추가 및 경로 수정

[33mcommit b66fc48c0aa863ae2f3fab193e7d66a7481a9d29[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Sun Jul 16 22:16:33 2023 +0900

    Disign: spiderman component related movies 이미지 추가 및 경로 수정
    
    spiderman1 coponent
    - character content 추가 및 css 작업 완료
    - character content의 요소를 json 데이터를 사용하여 렌더링 되게하는 작업 시작

[33mcommit aefbaa9d9281a21a54fbae69930ad34d6734f8c0[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Fri Jul 14 15:55:20 2023 +0900

    Disign: spiderman component  poster 이미지 추가 및 경로 수정
    
    spiderman3 component
    - section6 텍스트 작업 완료

[33mcommit b37b4d3b1e244adfd5986280f33edea817cd03a2[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Thu Jul 13 21:52:23 2023 +0900

    Disign: spiderman component 디자인
    
    spiderman1,2,3,4 component
    - review-content 클래스 이름 변경
    - related-content Link 경로 수정
    
    spiderman2 component
    - LinkClick 이벤트 추가
    
    spiderman4, venom component
    - 화면 구성 및 디자인 완료

[33mcommit 4f9543f46f492a7df1f1501cabc998674c36e620[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Wed Jul 12 13:12:07 2023 +0900

    Disign: venom component 이미지 추가 및 화면 구성
    
    spiderman1,4 related movies 출시일 텍스트 수정

[33mcommit 627a278cd1d12be57d763f247be5c0eecb5d81a4[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Tue Jul 11 16:10:36 2023 +0900

    Disign: spiderman 1,2,3,4 component 이미지 변경 및 경로 변경
    
    spiderman4 component 화면 구성

[33mcommit b1094ce2575c13dc37175436d16671e56b5ea030[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Sat Jul 8 15:50:30 2023 +0900

    Disign: spiderman3 component 디자인
    
    spiderman1 component
    - 이미지 경로 및 이름 수정
    spiderman2 component
    
    - 화면 구성 및 디자인 완료
    
    spiderman3 component
    - 화면 구성 및 css 디자인
    
    header component
    - nav Link 클릭 시 화면 최상단 이동 기능 추가

[33mcommit 13fc2d29cb0ca5a7dfad7e658aa2c21a0fa7dfaf[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Fri Jul 7 21:11:48 2023 +0900

    Disign: spiderman1,2 movie-story, review 텍스트 변경

[33mcommit ce39d7545c3ea9dc2dd8d27a53b535757c6a5885[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Thu Jul 6 19:00:26 2023 +0900

    Disign: spiderman2 component 디자인 추가
    
    - amazing-spiderman1 > section6 > spiderman-moive-info 텍스트 수정 및 리뷰 추가
    - amazing-spiderman1 > section6 > related-content 이미지 변경

[33mcommit a9fb51f3a1a8caae7567e0c13c987b70f8e82881[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Wed Jul 5 21:51:35 2023 +0900

    Disign: spiderman2 component 디자인
    
    spiderman2 component
    -section2 sub-title이 상단에 고정되게 변경
    - section3, 5 배경 이미지 변경
    spiderman1 component
    - Link 클릭 시 화면이 최상단으로 이동하는 기능 추가

[33mcommit a920a7e5930f07fe670bc247e89811a7e3ef795e[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Tue Jul 4 20:56:55 2023 +0900

    Disign: spiderman1, spiderman2 component 디자인 수정
    
    spiderman1 component
    - section2 awards 부분 삭제
    - section 구성 변경
    
    spiderman2 component
    - 전체적인 뼈대 구성 및 디자인
    - spiderman2 img 추가

[33mcommit ef54981093186ee0ffbe1227e117a8cc6ed5806d[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Mon Jul 3 21:33:45 2023 +0900

    Feat: header component 페이지 이동 시 menu가 보이지 않게 수정
    
    spiderman1 component 디자인 완료

[33mcommit f463cde6b8570f2bdb64a08acbe128c6764783b8[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Sun Jul 2 13:18:43 2023 +0900

    Disign: spiaderman1 component 컨텐츠 추가 및 디자인
    
    related movies 컨텐츠 추가

[33mcommit 63e920ee73915523d7738ef95c8217fe0dcc2da1[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Sat Jul 1 09:27:06 2023 +0900

    Disign:  spiderman1 컴포넌트 디자인 및 조건부 렌더링
    
    sub-title 클릭 시 background와 main-title이 상태변수에 따라 스파이더맨 영화 정보가 다르게 출력되도록 구현

[33mcommit ecfbb3e32fb1e8c259b1b0b109a47c0228a6dbaa[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Wed Jun 28 20:29:34 2023 +0900

    Disign: spiderman-1 컴포넌트 구조 변경 및 디자인 작업
    
    spiderman-1 컴포넌트
     - movie-review 구현 및 디자인 완료
     - award_symbol.svg 생성

[33mcommit bc2a49c092d8c57543595f4cd9141035fe80875a[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Mon Jun 19 22:19:29 2023 +0900

    Disign: spiderman-1 컴포넌트 디자인
    
    spiderman-1 컴포넌트 movie-choice 토글 기능 추가
    영화 시리즈별 상태 관리 변수 생성
    trailer 구조 변경
    movie-intro, movie-review 클래스 추가 및 디자인

[33mcommit 39b256a8d531e9104bbc5978d66d7e0ad08d8a2b[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Sun Jun 18 23:00:42 2023 +0900

    Design: main, header, spiderman-1 컴포넌트 디자인
    
    main 컴포넌트 slide 이미지 변경 및 goods slide 추가
    header 컴포넌트 row1,2 높이 변경 및 row2-imgbox 스타일 변경
    spiderman-1 컴포넌트 생성 및 section1~4 스타일 설정

[33mcommit 107cd7869eea4569ce5e4ca451ea5d2130a021c8[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Sat Jun 17 23:21:46 2023 +0900

    footercomponent 제작

[33mcommit 52a1aedb4adc51e74c3a535acc55fa246a56c997[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Fri Jun 16 21:48:31 2023 +0900

    main 페이지 movie-info 추가

[33mcommit 19e569a17ce69dcf661168aa985f0d84b8d70736[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Wed Jun 14 22:34:54 2023 +0900

    main 페이지 슬라이드 구현

[33mcommit 1dac3f294f89fe015b85b2561aa07c96b0015fb6[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Tue Jun 13 22:42:04 2023 +0900

    main 페이지 슬라이드 이미지 추가

[33mcommit 36f9c88e492f6fcce6b2a5c873eef4387acf0595[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Mon Jun 12 23:03:01 2023 +0900

    header menu hover event 추가, signup, movie, goods 페이지 링크 연결
    goods 페이지 axios로 상품 데이터 구현
    signup 페이지 디자인 구현

[33mcommit 42c0dfef65bd78f003a3eda38b75f56b5657d70f[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Fri Jun 9 23:35:23 2023 +0900

    header 슬라이드 메뉴 이미지 변경
    goods 페이지 1차 구현

[33mcommit ff7b764c7e46c067235912c594ce03218ce9f185[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Thu Jun 8 22:04:38 2023 +0900

    header 슬라이드 메뉴 토글 추가 및 메뉴 이미지 추가

[33mcommit 2a7208f5561a181e506c94ae2a5f764b1bdac55d[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Wed Jun 7 20:48:16 2023 +0900

    spiderman react 시작
    header 슬라이드 메뉴 구현
    main page구현

[33mcommit 73f065fe6b7a697ca9074d7de3374445d8640282[m
Author: DESKTOP-SMD51TC\kiik5 <kiik52@naver.com>
Date:   Fri Jun 2 14:17:04 2023 +0900

    Initialize project using Create React App
