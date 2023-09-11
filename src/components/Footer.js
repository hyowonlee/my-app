import React from 'react';
import { styled } from 'styled-components';

//이 파일로 재사용을 위한 하나의 컴포넌트를 생성함
//이때 styled component를 쓰면 js, css파일이 합쳐지니까 관리가 쉬워짐
const StyledFooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterList>
      <ul>
        <li>오시는길 : 123</li>
        <li>phonenum: 123</li>
      </ul>
    </StyledFooterList>
  );
};

export default Footer;
