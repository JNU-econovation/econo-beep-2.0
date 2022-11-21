import styled, { css } from "styled-components";
import RENT_STATES from "../../constant/RENT_STATES";
import { EpochSecondToDateObject } from "../../lib/utils/EpochConverter";
import RentalHistory from "./RentalHistory";

function RentalHistoryList({ rentalHistories, rentState }) {
  return (
    <Section>
      {rentalHistories.length !== 0 ? (
        rentalHistories.map((rentalHistory, index) => (
          <RentalHistory
            key={index}
            renterProfileImage={rentalHistory?.renterProfileImage}
            renterName={rentalHistory?.renterName}
            rentDate={EpochSecondToDateObject(rentalHistory?.rentalEpochSecond)}
            returnDate={rentalHistory.returnEpochSecond ? EpochSecondToDateObject(rentalHistory?.returnEpochSecond) : undefined}
            rentState={
              index !== 0
                ? RENT_STATES.RENTABLE
                : RENT_STATES[rentState]
            }
          />
        ))
      ) : (
        <div className="no-record">아직 대출 기록이 없어요 😱</div>
      )}
    </Section>
  );
}

const Section = styled.div`
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
export default RentalHistoryList;
