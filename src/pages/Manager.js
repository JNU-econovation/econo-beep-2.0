import { useState } from "react";
import styled from "styled-components";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import Header from "../components/header/Header";
import ManagerButtonSearchHolder from "../components/manager/ManagerButtonSearchHolder";
import ManagerRenteeInfoList from "../components/manager/ManagerRenteeInfoList";
import ManagerRenteeInfoEdit from "../components/manager/ManagerRenteeInfoEdit";

function Manager() {
  const [isBookMode, setIsBookMode] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [editRenteeInfo, setEditRenteeInfo] = useState(null);

  const handleSearchPress = () => {};

  return (
    <Body>
      <PageTitle title="관리자" />
      <Header />
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
        <ManagerRenteeSection>
          <ManagerRenteeInfoList setEditRenteeInfo={setEditRenteeInfo} />
          <ManagerRenteeInfoEdit editRenteeInfo={editRenteeInfo} />
        </ManagerRenteeSection>
      </ManagerSection>
    </Body>
  );
}

const ManagerSection = styled.section`
  width: 100vw;
  min-height: calc(100vh - 60px);
  padding: 0 5%;

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
  grid-template-columns: auto 400px;
`;

export default Manager;
