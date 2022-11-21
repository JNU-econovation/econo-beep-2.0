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
