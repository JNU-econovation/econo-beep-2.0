import { useSearchParams } from "react-router-dom";
import routes from "../routes";
import InfoListLayout from "../components/info-list-layout/InfoListLayout";
import SEARCH_TYPES from "../constant/SEARCH_TYPES";
import RenteeAPI from "../lib/api/RenteeAPI";

function Books() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <InfoListLayout
      key={`books-${searchParams.get('keyword')}`}
      listType={SEARCH_TYPES.BOOK}
      searchApiUrl={routes.books}
      loadRenteeList={RenteeAPI.loadBookList}
    />
  );
}

export default Books;
