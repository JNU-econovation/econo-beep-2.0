import styled, { css } from "styled-components";
import RENT_STATES from "../../constant/RENT_STATES";
import { useState } from "react";

function DetailRent() {
  const [rentState, setRentState] = useState(RENT_STATES.RENTABLE);

  const record = {
    profileImg:
      "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__480.jpg",
    name: "경주원",
    rentState: "RENTED",
    rentalDate: "2022.10.23",
    returnDate: "2022.11.04",
  };

  const [rentRecords, setRentRecords] = useState([record, record]);

  return (
    <RentSection>
      <RentTopSection>
        <div className="title">대출 기록</div>
        <LoanButton value={rentState}>
          {RENT_STATES.RENT_BUTTON[rentState]}
        </LoanButton>
      </RentTopSection>
      <RentBottomSection>
        {rentRecords.length !== 0 ? (
          rentRecords.map((rentRecord) => (
            <RentRecordSection>
              <RentRecordLeft>
                <img
                  className="profile-img"
                  src={rentRecord.profileImg}
                  alt="profile"
                />
                <RentRecordCenter>
                  <div className="rent-name">{rentRecord.name}</div>
                  <div className="rent-date">
                    {rentRecord.rentalDate} ~ {rentRecord.returnDate}
                  </div>
                </RentRecordCenter>
              </RentRecordLeft>
              <RentRecordState value={rentRecord.rentState}>
                <div className="rent-highlight" />
                <span>{RENT_STATES.KOREAN[rentRecord.rentState]}</span>
              </RentRecordState>
            </RentRecordSection>
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
  padding-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));

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

const RentRecordSection = styled.div`
  width: 100%;
  padding: 15px 0;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .profile-img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 1000%;
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

export default DetailRent;
