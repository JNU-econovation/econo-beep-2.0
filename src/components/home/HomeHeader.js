import styled from "styled-components";
import BluePurpleGradient from "../../styles/BluePurpleGradient";
import { BiMenu, BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { AiOutlineUser } from "react-icons/ai";

function HomeHeader() {
  const navigate = useNavigate();
  return (
    <HeaderSection>
      <OpenMenuButton onClick={() => navigate(routes.menu)}>
        <BluePurpleGradient />
        <BiMenu style={{ fill: "url(#blue-purple-gradient)" }} />
      </OpenMenuButton>
      <ProfileButton onClick={() => navigate(routes.myPage)}>
        <BluePurpleGradient />
        <AiOutlineUser style={{ fill: "url(#blue-purple-gradient)" }} />
      </ProfileButton>
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  width: 100%;
  padding: 15px 10px 0 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 1;
`;

const OpenMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px;
  border: none;
  font-size: ${(props) => props.theme.headerButtonSize};
`;

const ProfileButton = styled.div`
  font-size: 30px;
  padding: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HomeHeader;
