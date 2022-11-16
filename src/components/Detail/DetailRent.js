import styled, { css } from "styled-components";
import RENT_STATES from "../../constant/RENT_STATES";
import { useState } from "react";
import { EpochSecondToDateObject } from "../EpochConverter";
import RentalRecord from "./RentalRecord";

function DetailRent({ rentalHistories, rentState }) {
  const record = {
    profileImg:
      "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__480.jpg",
    name: "경주원",
    rentState: "RENTED",
    rentalDate: "2022.10.23",
    returnDate: "2022.11.04",
  };

  // const [rentalHistories, setRentalHistories] = useState([record, record]);

  return (
    <RentSection>
      <RentTopSection>
        <div className="title">대출 기록</div>
        <LoanButton value={rentState}>
          {RENT_STATES.RENT_BUTTON[rentState]}
        </LoanButton>
      </RentTopSection>
      <RentBottomSection>
        {rentalHistories.length !== 0 ? (
          rentalHistories.map((rentalHistory, index) => (
            <RentalRecord
              renterProfileImage={rentalHistory.renterProfileImage}
              renterName={rentalHistory.renterName}
              rentalEpochSecond={EpochSecondToDateObject(
                rentalHistory.rentalEpochSecond
              )}
              returnEpochSecond={EpochSecondToDateObject(
                rentalHistory.returnEpochSecond
              )}
              rentState={
                index !== 0
                  ? RENT_STATES.RENTAL_RECORD.RENTABLE
                  : RENT_STATES.RENTAL_RECORD[rentState]
              }
            />
          ))
        ) : (
          <div className="no-record">아직 대출 기록이 없어요 😱</div>
        )}
      </RentBottomSection>
    </RentSection>
  );
}

const RentSection = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  padding: 30px;
`;

const RentTopSection = styled.div`
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.borderGray};

  .title {
    color: ${(props) => props.theme.black};
    font-weight: 700;
    font-size: 20px;
  }
`;

const LoanButton = styled.button`
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

const RentBottomSection = styled.div`
  width: 100%;
  height: 100%;

  .no-record {
    width: 100%;
    padding: 90px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: ${(props) => props.theme.firstGray};
  }
`;
export default DetailRent;
