import { useSearchParams } from "react-router-dom";
import axios from "axios";
import routes from "../routes";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";

function SearchAll() {
  const [searchParams, setSearchParams] = useSearchParams();

  const loadSearchAllList = async ({ keyword, pageIndex, pageSize }) => {
    const response = await axios.get(
      process.env.REACT_APP_BEEP_API + "api/rentee/search",
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
      pageTitle={searchParams.get("keyword")}
      listType="검색"
      searchApiUrl={routes.searchAll}
      loadRenteeList={loadSearchAllList}
    />
  );
}

export default SearchAll;
