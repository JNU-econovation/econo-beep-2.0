import styled from "styled-components";
import Header from "../components/header/Header";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import routes from "../routes";
import LogoStyle from "../styles/LogoStyle";
import PageBannerSlider from "../components/home/PageBannerSlider";
import Category from "../components/home/Category";

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
        <PageBannerSlider />
      </MainPage>

      <ExpendPage>
        <Content>
          <ContentTitle>카테고리</ContentTitle>
          <Category />
        </Content>
      </ExpendPage>
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
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ExpendPage = styled(MainPage)`
  min-height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  max-width: 750px;
  margin-top: 50px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.black};
`;

export default Home;
