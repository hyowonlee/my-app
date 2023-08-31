import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum 함수실행됨:', sum);
    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      <div>
        {list.map((i) => {
          return <h1>{i}</h1>;
        })}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;
