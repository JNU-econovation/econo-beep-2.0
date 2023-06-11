import React from "react";
import styled from "styled-components";
import RENT_STATES from "@/constant/RENT_STATES";
import { EpochSecondToDateObject } from "@/lib/utils/EpochConverter";
import RentalHistoryRow from "@/components/detail/RentalHistoryRow";
import RentButton from "@/components/detail/RentButton";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  padding: 30px;
`;

const NavBar = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.borderGray};

  .title {
    color: ${(props) => props.theme.black};
    font-weight: 600;
    font-size: 1.25rem;
  }
`;

const HistorySection = styled.div`
  width: 100%;
  height: 100%;
`;

const NoRecord = styled.div`
  width: 100%;
  padding: 5rem 0;

  font-weight: 400;
  font-size: 1.1rem;
  line-height: 25px;

  text-align: center;
  color: ${(props) => props.theme.firstGray};
`;

function RentalHistory({ id, rentState, rentalHistories, setReload }) {
  return (
    <Container>
      <NavBar>
        <div className="title">대출 기록</div>
        <RentButton
          currentRentState={rentState}
          renteeId={id}
          onClick={() => setReload()}
        />
      </NavBar>
      <HistorySection>
        {rentalHistories && rentalHistories.length !== 0 ? (
          rentalHistories.map((rentalHistory, index) => (
            <RentalHistoryRow
              key={index}
              renterProfileImage={rentalHistory?.renterProfileImage}
              renterName={rentalHistory?.renterName}
              rentDate={EpochSecondToDateObject(
                rentalHistory?.rentalEpochSecond
              )}
              returnDate={
                rentalHistory.returnEpochSecond
                  ? EpochSecondToDateObject(rentalHistory?.returnEpochSecond)
                  : undefined
              }
              rentState={
                index !== 0 ? RENT_STATES.RENTABLE : RENT_STATES[rentState]
              }
            />
          ))
        ) : (
          <NoRecord>아직 대출 이력이 없어요 😱</NoRecord>
        )}
      </HistorySection>
    </Container>
  );
}

export default RentalHistory;
