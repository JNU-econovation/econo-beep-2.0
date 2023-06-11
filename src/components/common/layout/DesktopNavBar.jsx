import React from "react";
import styled from "styled-components";
import HeaderSection from "../../../styles/HeaderSection";
import LogoStyle from "../../../styles/LogoStyle";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes";

const Container = styled(HeaderSection)`
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.03);
`;

const Logo = styled(LogoStyle)`
  padding: 14px;
  font-size: 24px;
  cursor: pointer;
`;

const RightBox = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.25rem;
  margin: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5d5e64;
  background-color: ${({ theme }) => theme.bgColor};
`;

function DesktopNavBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo onClick={() => navigate(routes.home)}>econoBeep</Logo>
      <RightBox>
        <Button onClick={() => navigate(routes.books)}>도서</Button>
        <Button onClick={() => navigate(routes.device)}>기자재</Button>
        <Button onClick={() => navigate(routes.manager)}>관리자</Button>
      </RightBox>
    </Container>
  );
}

export default DesktopNavBar;
