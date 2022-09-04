import React from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterBox>
      <p>ⓒ ECONOVATION Management Dpt.</p>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  margin-top: 10px;
  padding: 20px;
  border-top: 1px solid ${(props) => props.theme.borderGray};
  color: ${(props) => props.theme.firstGray};
  font-size: 11px;
`;

export default Footer;
