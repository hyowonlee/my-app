import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { styled } from 'styled-components';
import { Title } from './MyCss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
