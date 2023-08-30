import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);
  const download = () => {
    let downloadData = 5;
    setData(downloadData);
  };

  // useEffect 실행시점:
  // 1. 최초 렌더링 시
  // 2. state 변수 변경시 (useEffect의 dependency list를 지정하면
  //    해당 state값이 변할때만 useEffect 실행)
  useEffect(() => {
    console.log('useEffect 실행');
    download();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(search + 1);
        }}
      >
        검색
      </button>
      <h1> 데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
