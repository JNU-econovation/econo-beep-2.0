import styled from "styled-components";

const LogoStyle = styled.div`
  letter-spacing: -0.025em;
  font-family: ${(props) => props.theme.fontFamilyLogo};

  background: ${(props) => props.theme.bluePurple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export default LogoStyle;
