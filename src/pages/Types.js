import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import routes from "../routes";
import RENT_STATE from "../constant/RENT_STATE";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";
import RENTEE_TYPES from "../constant/RENTEE_TYPES";

function Types() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const [rentees, setRentees] = useState([]);
  const [category, setCategory] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  useEffect(() => {
    setCategory(RENTEE_TYPES.KOREAN[params.type.toUpperCase()]);
    setSearchUrl(params.type);
  }, [params.type]);

  const initSearchList = () => {
    setRentees([]);
  };

  const loadSearchList = () => {
    const newRentees = [
      {
        id: "100",
        title: "load search list",
        authorName: "저자",
        rentState: RENT_STATE.RENTED,
      },
      {
        id: "101",
        title: "load search list",
        authorName: "저자",
        rentState: RENT_STATE.RENTED,
      },
      {
        id: "102",
        title: "load search list",
        authorName: "저자",
        rentState: RENT_STATE.RENTED,
      },
      {
        id: "103",
        title: "load search list",
        authorName: "저자",
        rentState: RENT_STATE.RENTED,
      },
      {
        id: "104",
        title: "load search list",
        authorName: "저자",
        rentState: RENT_STATE.RENTED,
      },
    ];
    setRentees((rentees) => [...rentees, ...newRentees]);
  };

  const initBookList = () => {
    // setRentees([]);
    setRentees([
      {
        id: "1",
        thumbnailUrl: "",
        title: "타입1",
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
    ]);
  };

  const loadBookList = () => {
    const newRentees = [
      {
        id: "5",
        thumbnailUrl: "",
        title: "책5",
        authorName: "저자",
        rentState: RENT_STATE.RENTED,
      },
      {
        id: "6",
        thumbnailUrl: "",
        title: "책6",
        authorName: "저자",
        rentState: RENT_STATE.RENTABLE,
      },
      {
        id: "7",
        thumbnailUrl: "",
        title: "책7",
        authorName: "저자",
        rentState: RENT_STATE.UNRENTABLE,
      },
    ];
    setRentees((rentees) => [...rentees, ...newRentees]);
  };

  return (
    <InfoListLayout
      key={
        searchParams.get("keyword") !== null
          ? `type?${searchParams.get("keyword")}`
          : "type"
      }
      pageTitle={
        searchParams.get("keyword") ? searchParams.get("keyword") : category
      }
      listType={category}
      searchApiUrl={`${routes.type}/${searchUrl}`}
      rentees={rentees}
      initSearchList={initSearchList}
      loadSearchList={loadSearchList}
      initTypeList={initBookList}
      loadTypeList={loadBookList}
    />
  );
}

export default Types;
