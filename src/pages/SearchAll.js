import { useSearchParams } from "react-router-dom";
import routes from "../routes";
import RENT_STATE from "../constant/RENT_STATE";
import InfoListLayout from "../components/search/InfoListLayout";
import PageTitle from "../components/PageTitle";

function SearchAll() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rentees = [
    {
      id: "1",
      thumbnailUrl: "",
      title: "책1",
      authorName: "저자",
      rentState: RENT_STATE.RENTED,
    },
    {
      id: "2",
      thumbnailUrl: "",
      title: "책2",
      authorName: "저자",
      rentState: RENT_STATE.RENTABLE,
    },
    {
      id: "3",
      thumbnailUrl: "",
      title: "책3",
      authorName: "저자",
      rentState: RENT_STATE.UNRENTABLE,
    },
    {
      id: "4",
      thumbnailUrl: "",
      title: "기자재4",
      rentState: RENT_STATE.UNRENTABLE,
    },
  ];

  const initSearchList = async () => {};
  const loadSearchList = async () => {};
  const initAllList = async () => {};
  const loadAllList = async () => {};

  return (
    <InfoListLayout
      pageTitle={<PageTitle title={searchParams.get("keyword")} />}
      listType="검색"
      searchApiUrl={routes.searchAll}
      rentees={rentees}
      initSearchList={initSearchList}
      loadSearchList={loadSearchList}
      initTypeList={initAllList()}
      loadTypeList={loadAllList}
    />
  );
}

export default SearchAll;
