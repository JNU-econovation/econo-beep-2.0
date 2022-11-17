import styled, { css } from "styled-components";
import { EpochSecondToDateObject } from "../EpochConverter";
import RENT_STATES from "../../constant/RENT_STATES";
import no_profile from "../../images/no-profile.png";

function RentalRecord({
  renterProfileImage,
  renterName,
  rentalEpochSecond,
  returnEpochSecond,
  rentState,
}) {
  return (
    <RentRecordSection>
      <RentRecordLeft>
        <img
          className="profile-img"
          src={!renterProfileImage ? no_profile : renterProfileImage}
          alt="profile"
        />
        <RentRecordCenter>
          <div className="rent-name">{renterName}</div>
          <div className="rent-date">
            {EpochSecondToDateObject(rentalEpochSecond)} ~{" "}
            {EpochSecondToDateObject(returnEpochSecond)}
          </div>
        </RentRecordCenter>
      </RentRecordLeft>
      <RentRecordState value={rentState}>
        <div className="rent-highlight" />
        <span>{RENT_STATES.KOREAN[rentState]}</span>
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

  .no-profile-img {
    width: 35px;
    height: 35px;
    border-radius: 1000%;
    background-color: ;
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
  z-index: 0;

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
    z-index: 1;
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

export default RentalRecord;
