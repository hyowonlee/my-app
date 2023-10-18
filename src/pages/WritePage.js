import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    //ListPage.js의 setPosts를 호출해 글쓰기 한 데이터를 담아야함
    let post = { id: 6, title: 'input data' };
  };

  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목" />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
