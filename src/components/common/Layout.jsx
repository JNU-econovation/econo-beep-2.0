import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";

const Body = styled.section`
  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 0;

  background-color: ${(props) => props.theme.bgColor};
  overflow-y: hidden;

  &is100vh {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

function Layout({ title, is100vh, mobileNavBar, children }) {
  return (
    <>
      <PageTitle title={title} />
      <Body is100vh={is100vh}>
        {mobileNavBar}
        {children}
      </Body>
    </>
  );
}

export default Layout;
