import styled from "styled-components";

function ManagerRenteeInfoList() {
  return (
    <Container>
      <InfoHeaderContainer>
        <div className="black-space" />
        <InfoHeader>
          <HeaderBox>제목</HeaderBox>
          <HeaderBox>저자</HeaderBox>
          <HeaderBox>출판사</HeaderBox>
          <HeaderBox>출판일</HeaderBox>
          <HeaderBox>비고</HeaderBox>
        </InfoHeader>
        <div className="black-space" />
      </InfoHeaderContainer>
      <ManagerRenteeInfo></ManagerRenteeInfo>
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

const ManagerRenteeInfo = styled.div`
  width: 100%;
  height: 46px;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.black};
  box-shadow: ${(props) => props.theme.managerBoxShadow};
  border-radius: ${(props) => props.theme.managerBorderRadius};

  :hover {
    box-shadow: 0 5px 20px 4px rgba(0, 0, 0, 0.06);
    transform: scale(1.015);
    transition: 0.17s;
  }
`;

export default ManagerRenteeInfoList;
