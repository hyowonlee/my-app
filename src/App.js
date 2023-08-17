import logo from './logo.svg';
import './App.css';

let a = 10;
const b = 20;

function App() {
  let c;
  let d = undefined;
  console.log(1, c);

  const mystyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={mystyle}>안녕 {a === 10 ? '10입니다' : '10이 아닙니다'}</div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다'}</h1>
      <hr />
    </div>
  );
}

export default App;
