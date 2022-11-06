import styled, { css } from "styled-components";
import RENT_STATE from "../../constant/RENT_STATE";
import { useState } from "react";

function RentState({ rentState }) {
  let text;
  let textColor;
  let highlightColor;

  if (rentState === RENT_STATE.RENTED) {
    text = "대출 중";
    textColor = (props) => props.theme.rentPink;
    highlightColor = "#FDEAEA";
  } else if (rentState === RENT_STATE.RENTABLE) {
    text = "대출 가능";
    textColor = (props) => props.theme.rentGreen;
    highlightColor = "#D1FED0";
  } else if (rentState === RENT_STATE.UNRENTABLE) {
    text = "대출 불가";
    textColor = (props) => props.theme.rentGray;
    highlightColor = "#DBDBDB";
  }

  return (
    <Section>
      <Text textColor={textColor}>
        <Highlight highlightColor={highlightColor} />
        <span>{text}</span>
      </Text>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
`;

const Text = styled.div`
  height: 100%;
  display: inline-block;
  float: right;
  position: relative;

  color: ${(props) => props.textColor};

  span {
    position: relative;
    z-index: 1;
  }
`;

const Highlight = styled.div`
  width: 110%;
  height: 65%;
  background-color: ${(props) => props.highlightColor};

  position: absolute;
  bottom: 0;
  left: -5%;
`;

export default RentState;
