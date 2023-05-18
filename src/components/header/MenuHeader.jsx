import styled from "styled-components";
import HeaderSection from "@/styles/HeaderSection";
import LogoStyle from "@/styles/LogoStyle";
import { BiX } from "react-icons/bi";
import BluePurpleGradient from "@/styles/BluePurpleGradient";

function MenuHeader({ setIsMenuOpen }) {
  return (
    <HeaderSection>
      <Logo>econoBeep</Logo>
      <CloseButton onClick={() => setIsMenuOpen(false)}>
        <BluePurpleGradient />
        <BiX style={{ fill: "url(#blue-purple-gradient)" }} />
      </CloseButton>
    </HeaderSection>
  );
}

const Logo = styled(LogoStyle)`
  padding: 14px;
  font-size: 24px;
  cursor: pointer;
`;

const CloseButton = styled.div`
  padding: 14px;
  font-size: 32px;
  cursor: pointer;
`;

export default MenuHeader;
