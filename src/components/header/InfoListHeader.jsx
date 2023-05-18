import { useNavigate } from "react-router-dom";
import LogoStyle from "@/styles/LogoStyle";
import HeaderSection from "@/styles/HeaderSection";
import routes from "@/routes";
import styled from "styled-components";

function InfoListHeader({ listType }) {
  const navigate = useNavigate();
  const typeText = listType === "검색" ? "전체" : listType;
  return (
    <HeaderSection>
      <Logo onClick={() => navigate(routes.home)}>econoBeep</Logo>
      <TypeText>{typeText}</TypeText>
    </HeaderSection>
  );
}

const Logo = styled(LogoStyle)`
  padding: 14px;
  font-size: 24px;
  cursor: pointer;
`;

const TypeText = styled.div`
  padding: 14px;
  font-size: 18px;
  font-weight: 500;
  background: ${(props) => props.theme.bluePurple};
  color: transparent;
  -webkit-background-clip: text;
`;

export default InfoListHeader;
