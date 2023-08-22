import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //let number = 1;
  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1);
    console.log('add',number);
  }

  return (
    <div>
      <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>더하기</button>
      </div>
    </div>
  );
}

export default App;
