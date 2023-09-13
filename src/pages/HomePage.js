import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';
import { useEffect } from 'react';

const HomePage = () => {
  // http 요청을 한다고 가정(js에서 http요청은 jquery ajax(외부lib), fetch(네이티브js), axios(외부lib)
  // 근데 jquery는 쓰지마라)
  // 이런 로직은 Header같은 컴포넌트만들어놓은 파일에선 하지마라 왜냐면 컴포넌트는 재사용되니까 필요없는데 딸려갈수도있음
  // 그러니 변수저장이나 로직같은건 컴포넌트 조립하는 페이지파일에서 해라
  const [boards, setBoards] = useState([]);

  //최초 한번만 실행되게
  useEffect(() => {
    //http로 비동기 다운로드 했다고 가정
    let data = [
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
      { id: 3, title: 'title3', content: 'content3' },
    ];

    //비동기 다운로드 했으니 다운 다 안돼도 화면은 뜰거임 그럼 다운 다 되기전엔 해당 값이 비어있다
    //다운이 다 되고 아래의 setBoards를 실행하는 순간 state 값의 변화가 일어나니 재랜더링이 일어나서
    //해당하는 값이 들어가게 될것 그래서 이 값은 반드시 state 값이여야 함 아니면 다운로드된 값이 보여지지 않음
    setBoards([...data]);
  }, []);

  return (
    <div>
      <Header />
      {/* 이런식으로 tag의 속성처럼 값을 적어주면 해당 컴포넌트로 값이 넘어가는데 이걸 props라 한다 */}
      <Home boards={boards} id={1} />
      <Footer />
    </div>
  );
};

export default HomePage;
