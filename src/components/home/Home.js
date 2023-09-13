import React from 'react';

const Home = (props) => {
  //구조분할 할당 (이런식으로 대입해주면 props 안에있는 key 값과 비교해서 같은 변수에 데이터가 자동으로 값이 들어간다)
  const { boards, id } = props;

  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      {boards.map((board) => (
        <h3>제목 : {board.title}</h3>
      ))}
    </div>
  );
};

export default Home;
