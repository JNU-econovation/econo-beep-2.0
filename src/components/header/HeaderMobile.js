import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import ProfileButton from "./ProfileButton";
import routes from "../../routes";
import BluePurpleGradient from "../../styles/BluePurpleGradient";

function HeaderMobile() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  return (
    <HeaderBox>
      <ButtonBox>
        <OpenMenuButton onClick={() => setIsToggled((isToggled) => !isToggled)}>
          <BluePurpleGradient />
          {!isToggled ? (
            <BiMenu style={{ fill: "url(#blue-purple-gradient)" }} />
          ) : (
            <BiX style={{ fill: "url(#blue-purple-gradient)" }} />
          )}
        </OpenMenuButton>
        <ProfileButton isToggled={isToggled} />
      </ButtonBox>
      <MenuBox isToggled={isToggled}>
        <MenuButton onClick={() => navigate(routes.searchBooks)}>
          도서
        </MenuButton>
        <MenuButton onClick={() => navigate(routes.searchEquipments)}>
          기자재
        </MenuButton>
        <MenuButton
          onClick={() => navigate(routes.manager)}
          style={{ borderBottom: "none" }}
        >
          관리자
        </MenuButton>
      </MenuBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

const ButtonBox = styled.div`
  width: 100%;
  padding: 15px 10px 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
`;

const OpenMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px;
  border: none;
  font-size: ${(props) => props.theme.headerButtonSize};
`;

const MenuBox = styled.div`
  width: 100%;
  border-top: ${(props) => props.theme.borderTop};
  box-shadow: ${(props) => props.theme.boxShadow};

  display: ${(props) => (props.isToggled ? "flex" : "none")};
  flex-direction: ${(props) => (props.isToggled ? "column" : null)};
  justify-content: ${(props) => (props.isToggled ? "space-between" : null)};
  align-items: ${(props) => (props.isToggled ? "center" : null)};

  position: absolute;
  top: 100%;
`;

const MenuButton = styled.div`
  width: 100px;
  height: 70px;
  padding: 10px 0;
  border-bottom: ${(props) => props.theme.borderTop};
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.firstGray};
`;

export default HeaderMobile;
