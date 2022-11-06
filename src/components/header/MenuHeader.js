import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../../styles/HeaderSection";
import LogoStyle from "../../styles/LogoStyle";
import routes from "../../routes";
import { BiX } from "react-icons/bi";
import BluePurpleGradient from "../../styles/BluePurpleGradient";

function MenuHeader() {
  const navigate = useNavigate();
  return (
    <HeaderSection>
      <Logo onClick={() => navigate(routes.home)}>econoBeep</Logo>
      <CloseButton onClick={() => navigate(-1)}>
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
