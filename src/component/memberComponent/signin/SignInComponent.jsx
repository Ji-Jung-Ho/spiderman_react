import React from 'react';
import {Link}  from 'react-router-dom';

export default function SignInComponent () {
  return (
    <main id="signInMain">
      <section id="signIn">
        <div class="container">
          <div class="title">
            <h2>login</h2>
          </div>
          <div class="content">
            <form id="signIn-form" name="sign_in" method="post" action="./response.php">
              <ul>
                <li><input type="text" id="id" name="id" placeholder="아이디를 입력해주세요"/></li>
                <li><input type="password" id="pw" name="pw" placeholder="비밀번호를 입력해주세요"/></li>
                <li><a href="#!">아이디찾기</a><i>|</i><a href="#!">비밀번호찾기</a></li>
                <li><button type="submit" class="submit-btn">로그인</button></li>
                <li><Link to='/signup'><button type="button" class="member-signin-btn">회원가입</button></Link></li>
              </ul>    
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};