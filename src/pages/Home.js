import styled from "styled-components";
import Header from "../components/header/Header";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import routes from "../routes";
import LogoStyle from "../styles/LogoStyle";

function Home() {
  return (
    <Body>
      <PageTitle title="Home" />
      <MainPage>
        <Header />
        <SearchBarBox>
          <Logo>econoBeep</Logo>
          <SearchBar searchApiUrl={routes.searchAll} placeholder="검색" />
        </SearchBarBox>
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

const SearchBarBox = styled.div`
  position: absolute;
  top: 40%;

  @media screen and (max-width: 767px) {
    left: 10vw;
    width: 80vw;
  }

  @media screen and (min-width: 768px) {
    left: 20vw;
    width: 60vw;
  }
`;

const Logo = styled(LogoStyle)`
  display: flex;
  justify-content: center;

  font-size: 48px;
  margin-bottom: 5px;
`;

export default Home;
