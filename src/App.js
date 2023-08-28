import { useState } from 'react';
import './App.css';

function App() {
  console.log('App실행됨');

  let sample = [
    { id: 1, name: 'kim1' },
    { id: 2, name: 'kim2' },
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    setUsers(sample); // 이렇게 일땐 users와 sample은 똑같은 데이터이지만 서로 주소가 다름
    //그래서 다른 데이터로 인식해 재랜더링 됨
    //만약 최초 데이터와 주소값이 서로 같다면 재랜더링 안됨

    //setUsers([...sample]); // 이렇게 하면 주소값이 다르니 재랜더링 될 것
  };

  return (
    <div>
      <button onClick={download}>download</button>
      {users.map((user) => (
        <h1>
          {user.id}, {user.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
