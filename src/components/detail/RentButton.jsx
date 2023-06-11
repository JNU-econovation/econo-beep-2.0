import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import RENT_STATES from "@/constant/RENT_STATES";
import Modal from "@/components/detail/Modal";
import RentAPI from "@/lib/api/RentAPI";

function RentButton({ currentRentState, renteeId, setReload }) {
  const [rentState, setRentState] = useState(undefined);
  const [rentNote, setRentNote] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onButtonClick = async (rentState) => {
    switch (rentState) {
      case RENT_STATES.RENTABLE: {
        try {
          await RentAPI.rentRentee(renteeId);
          setRentState(RENT_STATES.RENTED);
          setReload();
        } catch (e) {
          setIsLoggedIn(false);
          setRentNote(true);
        }
        break;
      }

      case RENT_STATES.RENTED: {
        try {
          await RentAPI.returnRentee(renteeId);
          setRentState(RENT_STATES.RENTABLE);
          setReload();
        } catch (e) {
          setIsLoggedIn(false);
          setRentNote(true);
        }
        break;
      }

      case RENT_STATES.UNRENTABLE: {
        setRentNote(true);
        break;
      }

      default: {
        break;
      }
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
      <Modal
        open={rentNote}
        setOpen={setRentNote}
        text={!isLoggedIn ? "로그인 후 이용해주세요" : "현재 이용 불가합니다"}
      />
    </>
  );
}

const Button = styled.button`
  padding: 7.5px 12.5px;
  background-color: ${(props) => props.theme.bgColor};

  border: 2px solid ${(props) => props.textColor};
  border-radius: 10000px;

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
