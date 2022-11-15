import { useState } from "react";
import styled from "styled-components";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import ManagerButtonSearchHolder from "../components/manager/ManagerButtonSearchHolder";
import ManagerRenteeInfoList from "../components/manager/ManagerRenteeInfoList";
import RenteeInfoEdit from "../components/manager/RenteeInfoEdit";
import INITIAL_RENTEE_INFO from "../constant/INITIAL_RENTEE_INFO";
import ManagerHeader from "../components/header/ManagerHeader";

function Manager() {
  const [isBookMode, setIsBookMode] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState(0);

  const [lastRenteeId, setLastRenteeId] = useState(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(undefined);
  const [editRenteeInfo, setEditRenteeInfo] = useState(INITIAL_RENTEE_INFO);

  const handleSearchPress = () => {};

  return (
    <Body>
      <PageTitle title="관리자" />
      <ManagerHeader />
      <ManagerSection>
        <ManagerButtonSearchHolder
          isBookMode={isBookMode}
          setIsBookMode={setIsBookMode}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setLastRenteeId={setLastRenteeId}
          keyword={keyword}
          setKeyword={setKeyword}
          handleSearchPress={handleSearchPress}
        />
        <ManagerRenteeSection isEditOpen={isEditOpen}>
          <ManagerRenteeInfoList
            setEditRenteeInfo={setEditRenteeInfo}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
          />
          {isEditOpen ? (
            <RenteeInfoEdit
              isBookMode={isBookMode}
              isEditMode={isEditMode}
              editRenteeInfo={editRenteeInfo}
              setEditRenteeInfo={setEditRenteeInfo}
              setIsEditOpen={setIsEditOpen}
            />
          ) : null}
        </ManagerRenteeSection>
      </ManagerSection>
    </Body>
  );
}

const ManagerSection = styled.section`
  width: 100vw;
  min-height: calc(100vh - 60px);
  padding: 20px 5%;

  background-color: ${(props) => props.theme.managerBgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ManagerRenteeSection = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: ${(props) =>
    props.isEditOpen ? "auto 400px" : "auto"};
`;

export default Manager;
