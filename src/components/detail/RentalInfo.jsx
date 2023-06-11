import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  padding: 1.25rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.black};
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
`;

const Description = styled.div`
  color: ${(props) => props.theme.firstGray};
  text-align: center;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 16px;
`;

function RentalInfo({ id, bookmarkCount, rentCount }) {
  return (
    <Container>
      <Column>
        <Info>{id}</Info>
        <Description>아이디</Description>
      </Column>
      <Column>
        <Info>{bookmarkCount}</Info>
        <Description>즐겨찾기</Description>
      </Column>
      <Column>
        <Info>{rentCount}</Info>
        <Description>대여</Description>
      </Column>
    </Container>
  );
}

RentalInfo.propTypes = {
  id: PropTypes.number,
  bookmarkCount: PropTypes.number,
  rentCount: PropTypes.number,
};

RentalInfo.defaultTypes = {
  id: 0,
  bookmarkCount: 0,
  rentCount: 0,
};

export default RentalInfo;
