import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import RenteeInfoHolder from "@/components/manager/RenteeInfoHolder";
import BluePurpleGradient from "@/styles/BluePurpleGradient";
import Pagination from "react-js-pagination";

function RenteeInfoList({
  setEditRenteeInfo,
  isEditOpen,
  setIsEditOpen,
  setIsEditMode,
  listedRentees,
  isBookmode,
  pageIndex,
  setPageIndex,
  pageSize,
  totalCount,
  setReload,
}) {
  return (
    <Container>
      <InfoHeaderContainer>
        <div className="blank-space" />
        {!isBookmode ? (
          <DeviceInfoHeader>
            <HeaderBox>제목</HeaderBox>
            <HeaderBox>비고</HeaderBox>
          </DeviceInfoHeader>
        ) : (
          <BookInfoHeader>
            <HeaderBox>제목</HeaderBox>
            <HeaderBox>저자</HeaderBox>
            <HeaderBox>출판사</HeaderBox>
            <HeaderBox>출판일</HeaderBox>
            <HeaderBox>비고</HeaderBox>
          </BookInfoHeader>
        )}
        <div className="blank-space">
          {!isEditOpen ? (
            <AddRenteeButton
              onClick={() => {
                setIsEditOpen(true);
                setIsEditMode(false);
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
      {listedRentees.map((rentee, index) => (
        <RenteeInfoHolder
          key={index}
          setEditRenteeInfo={setEditRenteeInfo}
          setIsEditOpen={setIsEditOpen}
          setIsEditMode={setIsEditMode}
          isBookMode={isBookmode}
          rentee={rentee}
          setReload={() => setReload()}
        />
      ))}
      <Pagination
        activeClass={`${pageIndex} + 1`}
        itemsCountPerPage={pageSize}
        totalItemsCount={totalCount}
        pageRangeDisplayed={5}
        onChange={(page) => setPageIndex(page - 1)}
        prevPageText="‹"
        nextPageText="›"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.firstGray};
  }

  .pagination li {
    padding: 15px 20px;
  }
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
`;

const BookInfoHeader = styled(InfoHeader)`
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`;

const DeviceInfoHeader = styled(InfoHeader)`
  grid-template-columns: 1fr 1fr;
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

export default RenteeInfoList;
