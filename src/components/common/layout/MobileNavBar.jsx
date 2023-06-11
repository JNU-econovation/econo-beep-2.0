import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PropTypes } from "prop-types";
import { BiMenu } from "react-icons/bi";

import BluePurpleGradient from "@/styles/BluePurpleGradient";
import ModalPortal from "@/components/common/CreatePortal";
import MenuSideBar from "@/components/common/layout/MenuSideBar";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes";

const Container = styled.div`
  width: 100%;
  padding: 1.25rem 1rem 0 1rem;

  ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: 1.25rem;
    `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 0;
`;

const PageType = styled.div`
  padding-left: 0.25rem;
  font-size: 1.2rem;
  font-weight: 500;
  background: ${(props) => props.theme.bluePurple};
  color: transparent;
  -webkit-background-clip: text;
`;

const Logo = styled(PageType)`
  font-family: ${({ theme }) => theme.fontFamilyLogo};
  font-size: 1.3rem;
`;

const OpenMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  cursor: pointer;
`;

function MobileNavBar({ pageType, paddingBottom }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Container paddingBottom={paddingBottom}>
      {pageType ? (
        <PageType>{pageType}</PageType>
      ) : (
        <Logo
          onClick={() => {
            navigate(routes.home);
          }}
        >
          econoBeep
        </Logo>
      )}

      <OpenMenuButton onClick={() => setIsMenuOpen(true)}>
        <BluePurpleGradient />
        <BiMenu style={{ fill: "url(#blue-purple-gradient)" }} />
      </OpenMenuButton>

      {isMenuOpen && (
        <ModalPortal>
          <MenuSideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </ModalPortal>
      )}
    </Container>
  );
}

MobileNavBar.propTypes = {
  pageType: PropTypes.string,
  paddingBottom: PropTypes.bool,
};

MobileNavBar.defaultProps = {
  pageType: undefined,
  paddingBottom: false,
};

export default MobileNavBar;
