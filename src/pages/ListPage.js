import React, { useState } from 'react';
import styled from 'styled-components';

const ListPage = () => {
  const StyledItemBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    align-items: center;
  `;

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const handleWrite = () => {
    //ListPage.js의 setPosts를 호출해 글쓰기 한 데이터를 담아야함
    let post = { id: 6, title: 'input data' };
  };

  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });

  const handleChangeTitle = (e) => {
    console.log(e.target.value);
    setPost({ title: e.target.value });
  };
  const handleChangeContent = (e) => {
    console.log(e.target.value);
    setPost({ content: e.target.value });
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>리스트 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목입력"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용입력"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} 제목: {post.title}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
