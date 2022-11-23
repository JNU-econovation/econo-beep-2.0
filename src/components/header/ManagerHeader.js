import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoStyle from "../../styles/LogoStyle";
import routes from "../../routes";
import BluePurpleGradient from "../../styles/BluePurpleGradient";
import { AiOutlineUser } from "react-icons/ai";

function ManagerHeader() {
  const navigate = useNavigate();
  return (
    <HeaderSection>
      <Logo onClick={() => navigate(routes.home)}>econoBeep</Logo>
      <ProfileButton onClick={() => navigate(routes.myPage)}>
        <BluePurpleGradient />
        <AiOutlineUser style={{ fill: "url(#blue-purple-gradient)" }} />
      </ProfileButton>
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  width: 100%;
  padding: 5px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};

  z-index: 1;
  cursor: pointer;
`;

const Logo = styled(LogoStyle)`
  padding: 14px;
  font-size: 26px;
  cursor: pointer;
`;

const ProfileButton = styled.div`
  font-size: 30px;
  padding: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default ManagerHeader;
