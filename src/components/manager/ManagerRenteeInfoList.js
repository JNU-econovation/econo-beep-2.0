import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ManagerRenteeInfoHolder from "./ManagerRenteeInfoHolder";
import BluePurpleGradient from "../../styles/BluePurpleGradient";

function ManagerRenteeInfoList({
  setEditRenteeInfo,
  isEditMode,
  setIsEditMode,
}) {
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
        <div className="blank-space">
          {!isEditMode ? (
            <AddRenteeButton
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              <BluePurpleGradient />
              <AiOutlinePlusCircle
                style={{ fill: "url(#blue-purple-gradient)" }}
              />
            </AddRenteeButton>
          ) : null}
        </div>
      </InfoHeaderContainer>
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
      <ManagerRenteeInfoHolder
        setEditRenteeInfo={setEditRenteeInfo}
        setIsEditMode={setIsEditMode}
      />
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

const AddRenteeButton = styled.div`
  border-radius: 50%;
  font-size: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
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
