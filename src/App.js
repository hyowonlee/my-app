import logo from './logo.svg';
import './App.css';

function App() {
  let list = [1, 2, 3]; // 이 값에 서버에서 restcontroller로 받아온 데이터를 저장하면 화면에 데이터를 뿌릴수 있을것
  //그러니 이 list 값만 관리 하면되겠지

  return (
    <div>
      <div>
        {list.map((n) => {
          return <h1>{n}</h1>;
        })}
      </div>
      <div>
        {list.map((n) => {
          return n;
        })}
      </div>
    </div>
  );
}

export default App;
