import styled, { css } from "styled-components";
import RENT_STATES from "@/constant/RENT_STATES";
import noProfile from "@/assets/images/no-profile.png";

function RentalHistoryRow({
  renterProfileImage,
  renterName,
  rentDate,
  returnDate,
  rentState,
}) {
  return (
    <RentRecordSection>
      <RentRecordLeft>
        <img
          className="profile-img"
          src={
            !renterProfileImage
              ? noProfile
              : import.meta.env.VITE_BEEP_API + renterProfileImage
          }
          alt="profile"
        />
        <RentRecordCenter>
          <div className="rent-name">{renterName}</div>
          <div className="rent-date">
            {rentDate.getFullYear()}-{rentDate.getMonth() + 1}-
            {rentDate.getDate()}{" "}
            {returnDate
              ? ` ~ ${returnDate.getFullYear()}-${
                  returnDate.getMonth() + 1
                }-${returnDate.getDate()}`
              : undefined}
          </div>
        </RentRecordCenter>
      </RentRecordLeft>
      <RentRecordState value={rentState}>
        <div className="rent-highlight" />
        <span>{RENT_STATES.RENTAL_RECORD[rentState]}</span>
      </RentRecordState>
    </RentRecordSection>
  );
}

const RentRecordSection = styled.div`
  width: 100%;
  padding: 15px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: -1;

  .no-profile-img {
    width: 35px;
    height: 35px;
    border-radius: 1000%;
  }

  .profile-img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 1000%;
  }
`;

const RentRecordLeft = styled.div`
  display: flex;
  align-items: center;
`;

const RentRecordCenter = styled.div`
  height: 100%;
  padding-left: 15px;
  .rent-name {
    padding-bottom: 5px;
    color: ${(props) => props.theme.black};
    font-weight: 600;
    font-size: 16px;
  }

  .rent-date {
    color: ${(props) => props.theme.firstGray};
    font-weight: 600;
    font-size: 12px;
  }
`;

const RentRecordState = styled.div`
  height: 100%;
  margin-right: 10px;
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
    font-size: 14px;
    font-weight: 500;
    position: relative;
  }

  .rent-highlight {
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
  }
`;

export default RentalHistoryRow;
