import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([
    { id: 1, name: 'kim1' },
    { id: 2, name: 'kim2' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRefs.current);
          myRefs.map((ref) => (ref.current.style.background = 'red'));
        }}
      >
        색 변경
      </button>

      {list.map((user, i) => {
        //map 에서 2번째 매개변수를 적어주면 반복문 i처럼 사용할 수 있다
        return <h1 ref={myRefs[i]}>{user.name}</h1>;
      })}
    </div>
  );
}

export default App;
