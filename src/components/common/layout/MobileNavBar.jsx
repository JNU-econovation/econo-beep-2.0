import React, { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { BiMenu } from "react-icons/bi";

import BluePurpleGradient from "@/styles/BluePurpleGradient";
import ModalPortal from "@/components/common/ModalPortal";
import MenuModal from "@/components/common/layout/MenuModal";

const Container = styled.div`
  width: 100%;
  padding: 1.25rem 1rem;

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

const OpenMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  cursor: pointer;
`;

function MobileNavBar({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <PageType>{title}</PageType>

      <OpenMenuButton onClick={() => setIsMenuOpen(true)}>
        <BluePurpleGradient />
        <BiMenu style={{ fill: "url(#blue-purple-gradient)" }} />
      </OpenMenuButton>

      {isMenuOpen && (
        <ModalPortal>
          <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </ModalPortal>
      )}
    </Container>
  );
}

MobileNavBar.propTypes = {
  title: PropTypes.string,
};

MobileNavBar.defaultProps = {
  title: undefined,
};

export default MobileNavBar;
