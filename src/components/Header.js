import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

//이 파일로 재사용을 위한 하나의 컴포넌트를 생성함
//이때 styled component를 쓰면 js, css파일이 합쳐지니까 관리가 쉬워짐
const StyledHeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <StyledHeaderList backgroundColor="green">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login/10">로그인</Link>
        </li>
      </ul>
    </StyledHeaderList>
  );
};

export default Header;
