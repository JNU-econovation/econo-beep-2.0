import Header from "../header/Header";
import SearchBar from "./SearchBar";
import RenteeInfo from "./RenteeInfo";
import Body from "../Body";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function InfoListLayout({
  pageTitle,
  listType,
  searchApiUrl,
  rentees,
  initSearchList,
  loadSearchList,
  initTypeList,
  loadTypeList,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("keyword")) {
      initTypeList();
    } else {
      initSearchList();
    }
  }, [searchParams.get("keyword")]);

  return (
    <Body>
      {pageTitle}
      <Header />
      <SearchBarHolder>
        <SearchBar placeholder={listType} searchApiUrl={searchApiUrl} />
      </SearchBarHolder>
      <ResultBox>
        {rentees.map((rentee) => (
          <RenteeInfo
            key={rentee.id}
            src={process.env.REACT_APP_BEEP_API + rentee.thumbnailUrl}
            id={rentee.id}
            title={rentee.title}
            authorName={rentee.authorName}
            rentState={rentee.rentState}
          />
        ))}
      </ResultBox>
      {searchParams.get("keyword") ? (
        <MoreRenteeButton onClick={loadSearchList}>
          검색 결과 더 보기
        </MoreRenteeButton>
      ) : (
        <MoreRenteeButton onClick={loadTypeList}>
          {listType} 더 보기
        </MoreRenteeButton>
      )}
    </Body>
  );
}

const SearchBarHolder = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 20px 0;
`;

const ResultBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MoreRenteeButton = styled.button`
  width: 85%;
  height: 40px;
  max-width: 400px;
  
  margin: 15px 0;
  
  border: 1px solid ${(props) => props.theme.firstGray};
  border-radius: 10px;
  
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.firstGray};
  background-color: ${(props) => props.theme.bgColor};
  }
`;

export default InfoListLayout;
