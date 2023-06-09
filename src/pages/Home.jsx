import React from "react";
import styled from "styled-components";

import routes from "@/routes";
import SearchBar from "@/components/common/SearchBar";
import LogoStyle from "@/styles/LogoStyle";
import Layout from "@/components/common/layout/Layout";
import PageBannerSlider from "@/components/home/PageBannerSlider";

function Home() {
  return (
    <Layout title="Home" is100vh>
      <SearchBarBox>
        <Logo>econoBeep</Logo>
        <SearchBar searchApiUrl={routes.searchAll} placeholder="검색" />
      </SearchBarBox>
      <PageBannerSlider />
    </Layout>
  );
}

const SearchBarBox = styled.div`
  position: absolute;
  top: 37.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 80vw;
  }

  @media screen and (min-width: 768px) {
    width: 45vw;
    min-width: 615px;
  }
`;

const Logo = styled(LogoStyle)`
  text-align: center;
  font-size: 48px;
  margin-bottom: 25px;
`;

export default Home;
