import { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

import RENT_STATES from "../../constant/RENT_STATES";
import PopUp from "./PopUp";

function RentButton({ currentRentState, renteeId }) {
  const localStorage = window.localStorage;
  const [rentState, setRentState] = useState(undefined);
  const [unrentableNote, setUnrentableNote] = useState(true);

  const rentRentee = async () => {
    // setRentState(RENT_STATES.RENTED);

    const response = await axios.put(
      process.env.REACT_APP_BEEP_API + "/api/rentee/" + renteeId + "/rent",
      {
        accessToken: localStorage.getItem("accessToken"),
      }
    );

    console.log(response);
  };

  const returnRentee = async () => {
    // setRentState(RENT_STATES.RENTABLE);

    const response = await axios.put(
      process.env.REACT_APP_BEEP_API + "/api/rentee/" + renteeId + "/return",
      {
        accessToken: localStorage.getItem("accessToken"),
      }
    );

    console.log(response);
  };

  const onButtonClick = (rentState) => {
    if (rentState === RENT_STATES.RENTABLE) {
      setRentState(RENT_STATES.RENTED);
      rentRentee();
    } else if (rentState === RENT_STATES.RENTED) {
      setRentState(RENT_STATES.RENTABLE);
      returnRentee();
    }
    if (rentState === RENT_STATES.UNRENTABLE) {
      setUnrentableNote(true);
    }
  };

  useEffect(() => {
    setRentState(currentRentState);
  }, [currentRentState]);

  return (
    <>
      <Button value={rentState} onClick={() => onButtonClick(rentState)}>
        {RENT_STATES.RENT_BUTTON[rentState]}
      </Button>
      <PopUp
        open={unrentableNote}
        setOpen={setUnrentableNote}
        text="현재 대출 불가"
      />
    </>
  );
}

const Button = styled.button`
  padding: 7.5px 12.5px;
  background-color: ${(props) => props.theme.bgColor};

  border: 2px solid ${(props) => props.textColor};
  border-radius: 10000px;
  //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  cursor: pointer;

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
`;

export default RentButton;
