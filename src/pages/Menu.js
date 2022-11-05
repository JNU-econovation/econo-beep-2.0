import styled from "styled-components";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import MenuHeader from "../components/header/MenuHeader";

function Menu() {
  return (
    <Body>
      <PageTitle title="Menu" />
      <MainPage>
        <MenuHeader />
      </MainPage>
    </Body>
  );
}

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
`;

export default Menu;
