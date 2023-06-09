import React from "react";
import styled from "styled-components";

const Button = styled.div`
  margin-bottom: 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  margin-right: 1.2rem;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

const Text = styled.div`
  color: ${(props) => props.theme.black};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
`;

function MenuButton({ handleClick, imgSrc, type }) {
  return (
    <Button onClick={handleClick}>
      <Icon src={imgSrc} alt={type} />
      <Text>{type}</Text>
    </Button>
  );
}

export default React.memo(MenuButton);
