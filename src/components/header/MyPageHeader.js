import HeaderSection from "../../styles/HeaderSection";
import styled from "styled-components";
import routes from "../../routes";
import LogoStyle from "../../styles/LogoStyle";
import { useNavigate } from "react-router-dom";

function MyPageHeader() {
  const navigate = useNavigate();
  return (
    <StyledHeaderSection>
      <Logo onClick={() => navigate(routes.home)}>econoBeep</Logo>
    </StyledHeaderSection>
  );
}

const StyledHeaderSection = styled(HeaderSection)`
  background-color: ${(props) => props.theme.myPageBgColor};
`;

const Logo = styled(LogoStyle)`
  padding: 14px;
  font-size: 24px;
  cursor: pointer;
`;

export default MyPageHeader;
