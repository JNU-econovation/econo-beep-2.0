import styled from "styled-components";
import { useState } from "react";

function ManagerButtonSearchHolder() {
  const [isBookMode, setIsBookMode] = useState(true);
  const onButtonClick = (e) => {
    if (e.target.id === "book") {
      setIsBookMode(true);
    } else if (e.target.id === "equipment") {
      setIsBookMode(false);
    }
  };
  return (
    <Container>
      <Button id="book" state={isBookMode} onClick={onButtonClick}>
        도서
      </Button>
      <Button id="equipment" state={!isBookMode} onClick={onButtonClick}>
        기자재
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 42px;

  margin-bottom: 42px;

  display: flex;
  align-items: center;
`;

const Button = styled.div`
  width: 100px;
  height: 100%;
  margin-right: 15px;
  border-radius: 20px;

  color: ${(props) => (props.state === true ? "#FDFDFD" : "#001AFF")};
  background-color: ${(props) =>
    props.state === true ? "#001AFF" : "#CACFFF"};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 600;
`;

export default ManagerButtonSearchHolder;
