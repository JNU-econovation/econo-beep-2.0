import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ManagerRenteeInfoHolder from "./ManagerRenteeInfoHolder";

function ManagerRenteeInfoList() {
  return (
    <Container>
      <InfoHeaderContainer>
        <div className="blank-space" />
        <InfoHeader>
          <HeaderBox>제목</HeaderBox>
          <HeaderBox>저자</HeaderBox>
          <HeaderBox>출판사</HeaderBox>
          <HeaderBox>출판일</HeaderBox>
          <HeaderBox>비고</HeaderBox>
        </InfoHeader>
        <div className="blank-space" />
      </InfoHeaderContainer>
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <ManagerRenteeInfoHolder />
      <RenteeLoadButton>
        <button id="prev-button">
          <FiChevronLeft />
        </button>
        <div id="current-page-number"> 1 </div>
        <div> / </div>
        <div id="max-page-number"> 3 </div>
        <button id="next-button">
          <FiChevronRight />
        </button>
      </RenteeLoadButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const InfoHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 8fr 1fr;
`;

const InfoHeader = styled.div`
  width: 100%;
  height: 38px;

  background-color: ${(props) => props.theme.managerHeaderBgColor};
  color: ${(props) => props.theme.black};
  box-shadow: ${(props) => props.theme.managerBoxShadow};
  border-radius: ${(props) => props.theme.managerBorderRadius};
  font-size: 14px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.firstGray};
`;

const RenteeLoadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.firstGray};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: ${(props) => props.theme.managerBgColor};
    color: ${(props) => props.theme.firstGray};

    font-size: 20px;
    text-align: center;
  }
`;

export default ManagerRenteeInfoList;
