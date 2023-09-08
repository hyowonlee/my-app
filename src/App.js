import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { styled } from 'styled-components';
import { Title } from './MyCss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Title>안녕</Title>
      {/* pages 폴더 안의 로그인 페이지라는 컴포넌트를 사용해 여러개의 컴포넌트를 한번에 조합해서 페이지를 만듬 
      이런식으로 component로 관리하면 나중에 특정 component만 재랜더링이 필요할때
      컴포넌트별로 return 리소스 관리도 가능해서 좋다*/}
      <LoginPage />
    </div>
  );
}

export default App;
