import { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "../styles/Body";

import PageTitle from "../components/PageTitle";
import ManagerTopBar from "../components/manager/ManagerTopBar";
import RenteeInfoList from "../components/manager/RenteeInfoList";
import RenteeInfoEdit from "../components/manager/RenteeInfoEdit";
import INITIAL_RENTEE_INFO from "../constant/INITIAL_RENTEE_INFO";
import ManagerHeader from "../components/header/ManagerHeader";
import ManagementAPI from "../lib/api/ManagementAPI";
import SORT_ORDER from "../constant/SORT_ORDER";

function Manager() {
  const [isBookMode, setIsBookMode] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState(0);

  const [lastRenteeId, setLastRenteeId] = useState(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(undefined);
  const [editRenteeInfo, setEditRenteeInfo] = useState(INITIAL_RENTEE_INFO);
  const [reload, setReload] = useState(true);

  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 8;
  const [lastPage, setLastPage] = useState(false);

  const [listedRentees, setListedRentees] = useState([])

  const handleSearchPress = async () => {
    if (!isBookMode) {
      const data = await ManagementAPI.loadDevices({
        keyword: keyword,
        sort: SORT_ORDER[sortOrder],
        pageIndex: pageIndex,
        pageSize: pageSize
      });

      setListedRentees([...data]);
    } else {
      const data = await ManagementAPI.loadBooks({
        keyword: keyword,
        sort: SORT_ORDER[sortOrder],
        pageIndex: pageIndex,
        pageSize: pageSize
      });

      setListedRentees([...data])
    }
  };

  useEffect(() => {
    const loadRentees = async () => {
      if (!isBookMode) {
        const data = await ManagementAPI.loadDevices({
          sort: SORT_ORDER[sortOrder],
          pageIndex: pageIndex,
          pageSize: pageSize
        });

        setListedRentees([...data]);
      } else {
        const data = await ManagementAPI.loadBooks({
          sort: SORT_ORDER[sortOrder],
          pageIndex: pageIndex,
          pageSize: pageSize
        })

        setListedRentees([...data]);
      }
    }

    loadRentees();
  }, [isBookMode, sortOrder, reload, pageIndex])

  return (
    <Body>
      <PageTitle title="관리자" />
      <ManagerHeader />
      <ManagerSection>
        <ManagerTopBar
          isBookMode={isBookMode}
          setIsBookMode={setIsBookMode}
          setIsEditOpen={setIsEditOpen}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setLastRenteeId={setLastRenteeId}
          keyword={keyword}
          setKeyword={setKeyword}
          handleSearchPress={handleSearchPress}
        />
        <ManagerRenteeSection isEditOpen={isEditOpen}>
          <RenteeInfoList
            setEditRenteeInfo={setEditRenteeInfo}
            isEditOpen={isEditOpen}
            setIsEditOpen={setIsEditOpen}
            setIsEditMode={setIsEditMode}
            listedRentees={listedRentees}
            isBookmode={isBookMode}
          />
          {isEditOpen ? (
            <RenteeInfoEdit
              isBookMode={isBookMode}
              isEditMode={isEditMode}
              editRenteeInfo={editRenteeInfo}
              setEditRenteeInfo={setEditRenteeInfo}
              setIsEditOpen={setIsEditOpen}
              setReload={() => setReload(reload => !reload)}
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
  padding: 50px;

  background-color: ${(props) => props.theme.managerBgColor};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
