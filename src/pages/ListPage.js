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

  const [id, setId] = useState(7);
  const [post, setPost] = useState({
    id: id,
    title: '',
    content: '',
  });

  const handleWrite = () => {
    setPost({
      ...post,
      id: id,
    });
    setPosts([...posts, post]);
    setId(id + 1);
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    //computed property name (js 문법 키값 동적할당)
    //대괄호로 감싸면 해당 변수값이 key값으로 동적으로 할당됨 따라서 object를 변수로 생성가능
    //(다른 언어들은 컴파일 후에 변수가 지정되니 안되기도 하고 key값쪽엔 원래 변수값이 못오고 string 만 오니까 안됨)
    //이 문법을 사용해서 데이터가 작성되는 input태그를 동적으로 할당해서 칸이 여러개여도 하나의 함수로 동적으로 처리가능
    //즉 여기에선 title, content빈칸에 대한 값 할당을 한번에 처리할 수 있는것
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });

    console.log(post);
    console.log(post.title);
    console.log(post.content);
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
        {/* button 태그를 그냥 form에서 submit 되도록 사용할 수도 있는데 대신 form 태그 속성에서 onSubmit으로 이 handleWrite를 실행해야하고
        form 태그에서 submit이 되면 새로고침이 되기에 form의 새로고침을 막는 <함수의매개변수>.preventDefault()를 handleWrite에서 실행시키면 됨*/}
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} / 제목: {post.title} / 내용: {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
