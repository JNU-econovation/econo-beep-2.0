import styled from "styled-components";
import Body from "../styles/Body";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import routes from "../routes";
import LogoStyle from "../styles/LogoStyle";
import PageBannerSlider from "../components/home/PageBannerSlider";
import HomeHeader from "../components/header/HomeHeader";
import { useState } from "react";
import Menu from "../components/home/Menu";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen ? (
        <Menu setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <Body>
          <PageTitle title="Home" />
          <MainPage>
            <HomeHeader setIsMenuOpen={setIsMenuOpen} />
            <SearchBarBox>
              <Logo>econoBeep</Logo>
              <SearchBar searchApiUrl={routes.searchAll} placeholder="검색" />
            </SearchBarBox>
            <PageBannerSlider />
          </MainPage>
        </Body>
      )}
    </>
  );
}

const MainPage = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBarBox = styled.div`
  position: absolute;
  top: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    left: 10vw;
    width: 80vw;
  }

  @media screen and (min-width: 768px) {
    left: 27.5vw;
    width: 45vw;
  }
`;

const Logo = styled(LogoStyle)`
  text-align: center;
  font-size: 48px;
  margin-bottom: 25px;
`;

export default Home;
