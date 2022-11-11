import styled, { css } from "styled-components";
import RENT_STATES from "../../constant/RENT_STATES";

function RentState({ rentState }) {
  return (
    <Section>
      <Text value={rentState}>
        <Highlight value={rentState} />
        <span>{RENT_STATES.KOREAN[rentState]}</span>
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

  ${(props) =>
    props.value === RENT_STATES.RENTED &&
    css`
      color: ${props.theme.rentPink};
    `}

  ${(props) =>
    props.value === RENT_STATES.RENTABLE &&
    css`
      color: ${props.theme.rentGreen};
    `}
  
  ${(props) =>
    props.value === RENT_STATES.UNRENTABLE &&
    css`
      color: ${props.theme.rentGray};
    `}

  span {
    position: relative;
    z-index: 1;
  }
`;

const Highlight = styled.div`
  width: 120%;
  height: 65%;

  position: absolute;
  bottom: 0;
  left: -10%;

  ${(props) =>
    props.value === RENT_STATES.RENTED &&
    css`
      background-color: ${props.theme.rentPinkHighlight};
    `}

  ${(props) =>
    props.value === RENT_STATES.RENTABLE &&
    css`
      background-color: ${props.theme.rentGreenHighlight};
    `}

  ${(props) =>
    props.value === RENT_STATES.UNRENTABLE &&
    css`
      background-color: ${props.theme.rentGrayHighlight};
    `}
`;

export default RentState;
