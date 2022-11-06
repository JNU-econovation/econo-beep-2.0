import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import routes from "../routes";
import RENT_STATE from "../constant/RENT_STATE";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";

function SearchAll() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rentees, setRentees] = useState([]);

  const initSearchList = async () => {
    setRentees([
      {
        id: "1",
        thumbnailUrl: "",
        title: "책1",
        authorName: "저자",
        type: "인공지능",
        rentState: RENT_STATE.RENTED,
      },
      {
        id: "2",
        thumbnailUrl: "",
        title: "책2",
        authorName: "저자",
        type: "인공지능",
        rentState: RENT_STATE.RENTABLE,
      },
      {
        id: "3",
        thumbnailUrl: "",
        title: "책3",
        authorName: "저자",
        type: "인공지능",
        rentState: RENT_STATE.UNRENTABLE,
      },
      {
        id: "4",
        thumbnailUrl: "",
        title: "기자재4",
        type: "인공지능",
        rentState: RENT_STATE.UNRENTABLE,
      },
    ]);
  };

  const loadSearchList = async () => {
    const newRentees = [
      {
        id: "5",
        thumbnailUrl: "",
        title: "책5",
        authorName: "저자",
        type: "인공지능",
        rentState: RENT_STATE.RENTED,
      },
      {
        id: "6",
        thumbnailUrl: "",
        title: "책6",
        authorName: "저자",
        type: "인공지능",
        rentState: RENT_STATE.RENTABLE,
      },
      {
        id: "7",
        thumbnailUrl: "",
        title: "책7",
        authorName: "저자",
        type: "인공지능",
        rentState: RENT_STATE.UNRENTABLE,
      },
      {
        id: "8",
        thumbnailUrl: "",
        title: "기자재8",
        type: "인공지능",
        rentState: RENT_STATE.UNRENTABLE,
      },
    ];
    setRentees((rentees) => [...rentees, ...newRentees]);
  };

  const initAllList = async () => {};
  const loadAllList = async () => {};

  return (
    <InfoListLayout
      pageTitle={searchParams.get("keyword")}
      listType="검색"
      searchApiUrl={routes.searchAll}
      rentees={rentees}
      initSearchList={initSearchList}
      loadSearchList={loadSearchList}
      initTypeList={initAllList}
      loadTypeList={loadAllList}
    />
  );
}

export default SearchAll;
