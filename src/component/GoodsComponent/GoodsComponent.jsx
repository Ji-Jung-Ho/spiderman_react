import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function GoodsComponent () {

  const [state, setState] = useState([]);
  const [scroll, setScrool] = useState(0);

  const onScroll=()=>{  
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  
  useEffect(()=>{   
    axios({
      url:'./data/goods.json',
      method:'GET'
    })
    // 성공
    .then((res)=>{
      setState(res.data.goods)
      console.log(res.data)
    })
    // 에러
    .catch((err)=>{
      console.log(`AXIOS 실패!${err}`);
    });
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
},[]);

  const commaRegExp=(z)=>{
    let str = z.toString();
    const regExp = /(^\d+)(\d{3})/;

    while(regExp.test(str)){
      str = str.replace(regExp, '$1,$2');
    }
    return str;
}

  return (
    <div id="wrap">
      <main id="main" className="main2">
        <section id="section1">
          <div className="container">
            <div className="gap">
              <div className="title hide">
                <h2>피규어 및 포스터 상품</h2>
              </div>
              <div className="content">
                <a href="script:;"><img src="./img/goods/mms624s2_mb.jpg" alt="스파이더맨 노웨이홈"/></a>
              </div>
            </div>
          </div>
        </section>
        <section id="section2">
          <div className="container">
            <div className="title">
              <h2>피규어 & 영화포스터 상품</h2>
            </div>
            <div className="content">
              <div className="left">
                <div className="title-filter">
                  <span>필터</span>
                  <button><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path></svg>초기화</button>
                </div>
                  <div className="col-gap">
                    <div className="wrap">
                      <ul className="category">
                        <li>
                          <a href="#!" className="category-btn">상품 검색<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                          <div className="category-sub category-sub1">
                            <ul>
                              <li>
                                <input type="text" id="search" name="search" placeholder="검색어 입력"/>
                                <a href="script:;"title="search"><img src="/img/search.png" alt=""/></a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="#!" className="category-btn">판매 상품<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                          <div className="category-sub category-sub1">
                            <ul>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  피규어
                                  <span>60</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  영화 포스터
                                  <span>60</span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="#!" className="category-btn">캐릭터<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                          <div className="category-sub category-sub2">
                            <ul>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  오리지널 스파이더맨
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  어메이징 스파이더맨
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  new 스파이더맨
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  그외
                                </label>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="#!" className="category-btn">영화<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                          <div className="category-sub category-sub3">
                            <ul>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Spider-Man 1
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Spider-Man 2
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Spider-Man 3
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Amazing-Spider 1
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Amazing-Spider 2
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Amazing-Spider 3
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Home-Comming
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  Far-From-Home
                                </label>
                              </li>
                              <li>
                                <label className="movie">
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  No-Way-Home
                                </label>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="#!" className="category-btn">가격<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                          <div className="category-sub category-sub3">
                            <ul>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  50,000원 미만
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  50,000원 ~ 100,000원 미만
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  100,000원 ~ 200,000원 미만
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox"/>
                                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"></path><path d="M7 12.6667L10.3846 16L18 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                  200,000원 이상
                                </label>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
              <div className="right">
                <div className="order-filter">
                  <span>총 866건</span>
                  <span>
                    <a href="#!">추천순<img src="./img/goods/spiderman-logo.png" alt=""/></a>
                    <i>|</i>
                    <a href="#!">신상품순</a>
                    <i>|</i>
                    <a href="#!">판매량순</a>
                    <i>|</i>
                    <a href="#!">혜택순</a>
                    <i>|</i>
                    <a href="#!">낮은가격순</a>
                    <i>|</i>
                    <a href="#!">높은가격순</a>
                  </span>
                </div>
                <ul id="goods">
                  {
                     state && state.map((item,idx)=>{
                      return (
                        <li key={item.상품코드}>
                        <div className="col-gap">
                          <div className="wrap">
                              <div className="img-box">
                                  <img src={item.상품이미지} alt=""/>
                                  <div className="option">
                                      <a href="#!"><img src="./img/goods/icon_201704041846597800.png" alt="장바구니아이콘"/>장바구니</a>
                                      <a href="#!"><img src="./img/goods/list_blank1.png" alt="새창으로상품보기아이콘"/>상품보기</a>
                                      <button className={item.클래스}><img src="./img/goods/heart.png" alt="찜하기"/>관심상품</button>
                                  </div>
                              </div>
                                <div className="caption">
                                  <h5>{item.상품명} <span>{item.상품세부정보}</span></h5>
                                  <h3>
                                      {item.할인율 > 0 ? <strong>{Math.round(item.할인율*100)}%</strong> : ``}
                                      {<em>{commaRegExp(Math.round(item.정가*(1-item.할인율)))}원</em>}
                                  </h3>
                                    {item.할인율 > 0 ? (<h3><s>{commaRegExp(item.정가)}원</s></h3>) : ''}
                                  <h4>
                                      <strong>{item.스파이더맨이름}</strong>
                                      <strong>{item.영화제목}</strong>
                                  </h4>
                                  <h6>{item.추천상품}</h6>
                                </div>
                          </div>
                        </div>
                      </li>
                      )
                    })
                  }
                </ul>
                <div className="pagination">
                  <a href="#!"><img src="./img/goods/page_first.png" alt=""/></a>
                  <a href="#!"><img src="./img/goods/page_back.png" alt=""/></a>
                  <a href="#!">1</a>
                  <a href="#!">2</a>
                  <a href="#!">3</a>
                  <a href="#!"><img src="./img/goods/page_next.png" alt=""/></a>
                  <a href="#!"><img src="./img/goods/page_end.png" alt=""/></a>
                </div>
              </div>
            </div>
          </div> 
        </section>
      </main>
    </div>
  );
};
