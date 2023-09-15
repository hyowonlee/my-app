import React from 'react';

const Home = (props) => {
  //구조분할 할당 (이런식으로 대입해주면 props 안에있는 key 값과 비교해서 같은 변수에 데이터가 자동으로 값이 들어간다)
  const { boards, setBoards, number, setNumber, increaseNumber } = props;

  return (
    <div>
      <h1>홈페이지 입니다. 번호 {number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호증가
      </button>
      <button onClick={increaseNumber}>번호증가2</button>
      <button
        onClick={() => {
          setBoards([]);
        }}
      >
        전체삭제
      </button>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
