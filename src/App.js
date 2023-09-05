import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const a = {
  backgroundColor: 'red',
};

function App() {
  return (
    <div>
      <div style={a}>안녕</div>
      <div className="box-style">hi</div>
    </div>
  );
}

export default App;
