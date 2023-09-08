import React from 'react';
import Header from '../components/Header';
import Login from '../components/login/Login';
import Footer from '../components/Footer';

//components 폴더 안의 컴포넌트들을 합쳐서 로그인 페이지를 만드는 컴포넌트를 생성
//메인 페이지에선 이 컴포넌트만 작성해주면 안에 있는 3개 컴포넌트를 한번에 생성
//재사용도 굉장히 편하다
const LoginPage = () => {
  return (
    <div>
      <Header />
      <Login></Login>
      <Footer />
    </div>
  );
};

export default LoginPage;
