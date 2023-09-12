import React from 'react';

const Home = (props) => {
  const boards = props.boards;
  console.log(boards);
  return (
    <div>
      <h1>홈페이지 입니다.</h1>
    </div>
  );
};

export default Home;
