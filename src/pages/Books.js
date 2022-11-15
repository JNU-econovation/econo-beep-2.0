import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import routes from "../routes";
import RENT_STATE from "../constant/RENT_STATES";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";

function Books() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rentees, setRentees] = useState([]);

  const loadRenteeList = async ({ keyword, pageIndex, pageSize }) => {
    const response = await axios.get(
      process.env.REACT_APP_BEEP_API + "api/rentee/search/book",
      {
        params: {
          name: keyword,
          pageIndex: pageIndex,
          pageSize: pageSize,
        },
      }
    );

    const loadRentees = response.data;
    setRentees((rentees) => [...rentees, ...loadRentees]);

    console.log(response + "success");
  };

  // const initSearchList = async () => {
  // const response = await axios.get(
  //   process.env.REACT_APP_BEEP_API + "api/rentee/search/book",
  //   {
  //     params: {
  //       name: searchParams?.get("keyword"),
  //       pageIndex: pageIndex,
  //       pageSize: pageSize,
  //     },
  //   }
  // );
  //
  // console.log(response);
  // };
  //
  // const loadSearchList = () => {
  //   const newRentees = [
  //     {
  //       id: "100",
  //       title: "load search list",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTED,
  //     },
  //     {
  //       id: "101",
  //       title: "load search list",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTED,
  //     },
  //     {
  //       id: "102",
  //       title: "load search list",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTED,
  //     },
  //     {
  //       id: "103",
  //       title: "load search list",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTED,
  //     },
  //     {
  //       id: "104",
  //       title: "load search list",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTED,
  //     },
  //   ];
  //   setRentees((rentees) => [...rentees, ...newRentees]);
  // };
  //
  // const initBookList = () => {
  //   // setRentees([]);
  //   setRentees([
  //     {
  //       id: "1",
  //       thumbnailUrl: "",
  //       title: "책1",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTED,
  //     },
  //     {
  //       id: "2",
  //       thumbnailUrl: "",
  //       title: "책2",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTABLE,
  //     },
  //     {
  //       id: "3",
  //       thumbnailUrl: "",
  //       title: "책3",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.UNRENTABLE,
  //     },
  //   ]);
  // };
  //
  // const loadBookList = () => {
  //   const newRentees = [
  //     {
  //       id: "5",
  //       thumbnailUrl: "",
  //       title: "책5",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTED,
  //     },
  //     {
  //       id: "6",
  //       thumbnailUrl: "",
  //       title: "책6",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.RENTABLE,
  //     },
  //     {
  //       id: "7",
  //       thumbnailUrl: "",
  //       title: "책7",
  //       authorName: "저자",
  //       type: "인공지능",
  //       rentState: RENT_STATE.UNRENTABLE,
  //     },
  //   ];
  //   setRentees((rentees) => [...rentees, ...newRentees]);
  // };

  return (
    <InfoListLayout
      key={
        searchParams.get("keyword") !== null
          ? `book?${searchParams.get("keyword")}`
          : "book"
      }
      listType="도서"
      searchApiUrl={routes.books}
      rentees={rentees}
      // initSearchList={initSearchList}
      // loadSearchList={loadSearchList}
      // initTypeList={initBookList}
      // loadTypeList={loadBookList}
      loadRenteeList={loadRenteeList}
    />
  );
}

export default Books;
