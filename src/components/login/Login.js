import React from 'react';
import { styled } from 'styled-components';

//이 파일로 재사용을 위한 하나의 컴포넌트를 생성함
//이때 styled component를 쓰면 js, css파일이 합쳐지니까 관리가 쉬워짐
const StyledLoginBox = styled.div`
  padding: 30px 0 30px 0;
`;

const Login = () => {
  return (
    <StyledLoginBox>
      <h1>login page</h1>
    </StyledLoginBox>
  );
};

export default Login;
