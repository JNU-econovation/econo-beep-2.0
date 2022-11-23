import styled from "styled-components";

function Body({ children }) {
  return <BodyBox>{children}</BodyBox>;
}

const BodyBox = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: relative;
  z-index: 0;

  background-color: ${(props) => props.theme.bgColor};
`;

export default Body;
