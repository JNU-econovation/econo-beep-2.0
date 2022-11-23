import { useSearchParams } from "react-router-dom";
import routes from "../routes";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";
import SEARCH_TYPES from "../constant/SEARCH_TYPES";
import RenteeAPI from "../lib/api/RenteeAPI"

function SearchAll() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <InfoListLayout
      key={`search-all-${searchParams.get('keyword')}`}
      listType={SEARCH_TYPES.ALL}
      searchApiUrl={routes.searchAll}
      loadRenteeList={RenteeAPI.loadSearchList}
    />
  );
}

export default SearchAll;
