import styled from "styled-components";
import Header from "../components/header/Header";
import PageTitle from "../components/PageTitle";

function Home() {
  return (
    <Body>
      <PageTitle title="Home" />
      <MainPage>
        <Header />
      </MainPage>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
`;

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export default Home;
