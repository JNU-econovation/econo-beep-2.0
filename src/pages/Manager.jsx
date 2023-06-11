import { useEffect, useState } from "react";
import styled from "styled-components";

import ManagerTopBar from "@/components/manager/ManagerTopBar";
import RenteeInfoList from "@/components/manager/RenteeInfoList";
import RenteeInfoEdit from "@/components/manager/RenteeInfoEdit";
import INITIAL_RENTEE_INFO from "@/constant/INITIAL_RENTEE_INFO";
import ManagementAPI from "@/lib/api/ManagementAPI";
import SORT_ORDER from "@/constant/SORT_ORDER";
import Layout from "@/components/common/layout/Layout";

function Manager() {
  const [isBookMode, setIsBookMode] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState(0);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(undefined);
  const [editRenteeInfo, setEditRenteeInfo] = useState(INITIAL_RENTEE_INFO);
  const [reload, setReload] = useState(true);

  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 8;
  const [totalCount, setTotalCount] = useState(0);

  const [listedRentees, setListedRentees] = useState([]);

  const handleSearchPress = async () => {
    if (!isBookMode) {
      const data = await ManagementAPI.loadDevices({
        keyword: keyword,
        sort: SORT_ORDER[sortOrder],
        pageIndex: pageIndex,
        pageSize: pageSize,
      });

      setTotalCount(data.totalCount);
      const rentees = data.deviceManagementElementDtos;
      setListedRentees([...rentees]);
    } else {
      const data = await ManagementAPI.loadBooks({
        keyword: keyword,
        sort: SORT_ORDER[sortOrder],
        pageIndex: pageIndex,
        pageSize: pageSize,
      });

      setTotalCount(data.totalCount);
      const rentees = data.bookManagementElementDtos;
      setListedRentees([...rentees]);
    }
  };

  useEffect(() => {
    const loadRentees = async () => {
      if (!isBookMode) {
        const data = await ManagementAPI.loadDevices({
          sort: SORT_ORDER[sortOrder],
          pageIndex: pageIndex,
          pageSize: pageSize,
        });

        setTotalCount(data.totalCount);
        const rentees = data.deviceManagementElementDtos;
        setListedRentees([...rentees]);
      } else {
        const data = await ManagementAPI.loadBooks({
          sort: SORT_ORDER[sortOrder],
          pageIndex: pageIndex,
          pageSize: pageSize,
        });

        setTotalCount(data.totalCount);
        const rentees = data.bookManagementElementDtos;
        setListedRentees([...rentees]);
      }
    };

    loadRentees();
  }, [isBookMode, sortOrder, reload, pageIndex]);

  return (
    <Layout title="관리자 콘솔" paddingBottom={true}>
      <ManagerSection>
        <ManagerTopBar
          isBookMode={isBookMode}
          setIsBookMode={setIsBookMode}
          setIsEditOpen={setIsEditOpen}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
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
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            pageSize={pageSize}
            totalCount={totalCount}
            setReload={() => setReload((reload) => !reload)}
          />
          {isEditOpen ? (
            <RenteeInfoEdit
              isBookMode={isBookMode}
              isEditMode={isEditMode}
              editRenteeInfo={editRenteeInfo}
              setEditRenteeInfo={setEditRenteeInfo}
              setIsEditOpen={setIsEditOpen}
              setReload={() => setReload((reload) => !reload)}
            />
          ) : null}
        </ManagerRenteeSection>
      </ManagerSection>
    </Layout>
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
