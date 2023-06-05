import React, { useState } from "react";
import styled from "styled-components";
import {isMobile} from "react-device-detect";

import Body from "@/styles/Body";
import PageTitle from "@/components/common/PageTitle";
import SearchBar from "@/components/common/SearchBar";
import routes from "@/routes";
import LogoStyle from "@/styles/LogoStyle";

import PageBannerSlider from "@/components/home/PageBannerSlider";
import HomeMobileHeader from "@/components/header/HomeMobileHeader";
import DesktopHeader from "@/components/header/DesktopHeader";
import Menu from "@/components/home/Menu";

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
            {isMobile ? <HomeMobileHeader setIsMenuOpen={setIsMenuOpen} /> : <DesktopHeader />}
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
