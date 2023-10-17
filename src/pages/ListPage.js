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
  `;

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1' },
    { id: 2, title: '제목2' },
    { id: 3, title: '제목3' },
    { id: 4, title: '제목4' },
    { id: 5, title: '제목5' },
  ]);

  return (
    <div>
      <h1>리스트 페이지</h1>
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
