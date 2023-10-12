import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

//이 파일에 재사용을 위한 하나의 컴포넌트를 생성함
//이때 styled component를 쓰면 js, css파일이 합쳐지니까 관리가 쉬워짐
const StyledHeaderButton = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledHeaderLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
    <StyledHeaderButton backgroundColor="green">
      <ul>
        <li>
          <StyledHeaderLink to="/">홈</StyledHeaderLink>
        </li>
        <li>
          <StyledHeaderLink to="/login/10">로그인</StyledHeaderLink>
        </li>
      </ul>
    </StyledHeaderButton>
  );
};

export default Header;
