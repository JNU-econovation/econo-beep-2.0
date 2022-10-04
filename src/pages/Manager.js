import Body from "../components/Body";
import styled from "styled-components";
import Header from "../components/header/Header";
import ManagerButtonSearchHolder from "../components/manager/ManagerButtonSearchHolder";

function Manager() {
  return (
    <Body>
      <Header />
      <ManagerSection>
        <ManagerButtonSearchHolder />
      </ManagerSection>
    </Body>
  );
}

const ManagerSection = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);

  background-color: ${(props) => props.theme.managerBgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Manager;
