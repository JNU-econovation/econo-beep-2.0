import { useSearchParams } from "react-router-dom";
import routes from "../routes";
import RENT_STATE from "../constant/RENT_STATE";
import InfoListLayout from "../components/search/InfoListLayout";
import PageTitle from "../components/PageTitle";

function Books() {
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
  ];

  const initSearchList = async () => {};
  const loadSearchList = async () => {};
  const initBookList = async () => {};
  const loadBookList = async () => {};

  return (
    <InfoListLayout
      pageTitle={<PageTitle title="도서 " />}
      listType="도서"
      searchApiUrl={routes.searchBooks}
      rentees={rentees}
      initSearchList={initSearchList}
      loadSearchList={loadSearchList}
      initTypeList={initBookList}
      loadTypeList={loadBookList}
    />
  );
}

export default Books;
