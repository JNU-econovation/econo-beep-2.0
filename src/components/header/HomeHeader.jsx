import styled from "styled-components";
import HeaderSection from "@/styles/HeaderSection";
import BluePurpleGradient from "@/styles/BluePurpleGradient";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function HomeHeader({ setIsMenuOpen }) {
  const navigate = useNavigate();

  const profileButtonClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = `http://auth.econovation.kr:8080/api/accounts/login?requestUrl=${location.href}`;
  };

  return (
    <HeaderSection>
      <ProfileButton onClick={profileButtonClick}>
        <BluePurpleGradient />
        <AiOutlineUser style={{ fill: "url(#blue-purple-gradient)" }} />
      </ProfileButton>
      <OpenMenuButton onClick={() => setIsMenuOpen(true)}>
        <BluePurpleGradient />
        <BiMenu style={{ fill: "url(#blue-purple-gradient)" }} />
      </OpenMenuButton>
    </HeaderSection>
  );
}

const OpenMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px;
  border: none;
  font-size: ${(props) => props.theme.headerButtonSize};

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

export default HomeHeader;
