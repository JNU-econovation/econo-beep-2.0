import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import routes from "../routes";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";

function Books() {
  const [searchParams, setSearchParams] = useSearchParams();

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

    return response.data;
  };

  return (
    <InfoListLayout
      key={
        searchParams.get("keyword") !== null
          ? `book?${searchParams.get("keyword")}`
          : "book"
      }
      listType="도서"
      searchApiUrl={routes.books}
      loadRenteeList={loadRenteeList}
    />
  );
}

export default Books;
