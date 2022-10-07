import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import routes from "../../routes";
import LogoStyle from "../../styles/LogoStyle";

function HeaderPc() {
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <Logo onClick={() => navigate(routes.home)}>econoBeep</Logo>
      <ButtonBox>
        <MenuButton onClick={() => navigate(routes.searchBooks)}>
          도서
        </MenuButton>
        <MenuButton onClick={() => navigate(routes.searchEquipments)}>
          기자재
        </MenuButton>
        <MenuButton onClick={() => navigate(routes.manager)}>관리자</MenuButton>
        <ProfileButton />
      </ButtonBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 0px 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${(props) => props.theme.bgColor};
    box-shadow: ${(props) => props.theme.boxShadow};

    z-index: 1;
  }
`;

const ButtonBox = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.div`
  width: 100px;
  padding: 10px 0;

  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme.firstGray};

  cursor: pointer;
`;

const Logo = styled(LogoStyle)`
  margin: 0 10px;
  font-size: 26px;
  cursor: pointer;
`;

export default HeaderPc;
