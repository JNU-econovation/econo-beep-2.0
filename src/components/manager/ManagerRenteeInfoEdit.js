import styled from "styled-components";
import { useEffect } from "react";

function ManagerRenteeInfoEdit({ editRenteeInfo }) {
  console.log(editRenteeInfo);

  return <Container>d</Container>;
}

const Container = styled.div`
  margin: 0 0 10px 30px;
  padding: 10px;

  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
`;

export default ManagerRenteeInfoEdit;
