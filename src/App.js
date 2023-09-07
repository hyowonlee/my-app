import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { styled } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  return (
    <div>
      <Title>안녕</Title>
    </div>
  );
}

export default App;
