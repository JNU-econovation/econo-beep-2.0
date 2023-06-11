import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { PropTypes } from "prop-types";

import PageTitle from "@/components/common/layout/PageTitle";
import DesktopNavBar from "@/components/common/layout/DesktopNavBar";
import MobileNavBar from "@/components/common/layout/MobileNavBar";

const Body = styled.section`
  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 0;

  background-color: ${(props) => props.theme.bgColor};
  overflow-y: hidden;

  &is100vh {
    height: calc(var(--vh, 1vh) * 100);
    overflow-y: hidden;
  }
`;

function Layout({ title, pageType, is100vh, paddingBottom, children }) {
  return (
    <>
      <PageTitle title={title} />
      <Body is100vh={is100vh}>
        {isMobile ? (
          <MobileNavBar pageType={pageType} paddingBottom={paddingBottom} />
        ) : (
          <DesktopNavBar />
        )}
        {children}
      </Body>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  pageType: PropTypes.string,
  is100vh: PropTypes.bool,
  children: PropTypes.node,
  paddingBottom: PropTypes.bool,
};

Layout.defaultTypes = {
  title: undefined,
  pageType: undefined,
  is100vh: false,
  children: undefined,
  paddingBottom: false,
};

export default Layout;
