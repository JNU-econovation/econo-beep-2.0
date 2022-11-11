import HeaderSection from "../../styles/HeaderSection";
import LogoStyle from "../../styles/LogoStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import routes from "../../routes";

function DetailHeader() {
  const navigate = useNavigate();

  return (
    <HeaderSection>
      <Logo
        onClick={() => {
          navigate(routes.home);
        }}
      >
        econoBeep
      </Logo>
    </HeaderSection>
  );
}

const Logo = styled(LogoStyle)`
  padding: 14px;
  font-size: 24px;
  cursor: pointer;
`;

export default DetailHeader;
