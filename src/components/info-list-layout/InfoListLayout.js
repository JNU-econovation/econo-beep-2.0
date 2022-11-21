import styled from "styled-components";
import ReactLoading from "react-loading";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import SearchBar from "../SearchBar";
import RenteeInfo from "../RenteeInfo";
import Body from "../../styles/Body";
import theme from "../../styles/Theme";
import PageTitle from "../PageTitle";
import InfoListHeader from "../header/InfoListHeader";
import SEARCH_TYPES from "../../constant/SEARCH_TYPES";
import RenteeAPI from "../../lib/api/RenteeAPI";

function InfoListLayout({ listType, searchApiUrl, loadRenteeList }) {
  const target = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 8;
  const [lastPage, setLastPage] = useState(false);

  const [rentees, setRentees] = useState([]);

  useEffect(() => {
    const onLoad = async () => {
      const loadRentees = await loadRenteeList({
        keyword: searchParams?.get("keyword"),
        pageIndex: pageIndex,
        pageSize: pageSize,
      });

      if (loadRentees.length !== 0) {
        setRentees((rentees) => [...rentees, ...loadRentees]);
        setPageIndex((pageIndex) => pageIndex + 1);
      } else {
        setLastPage(true);
      }
    };

    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await onLoad();
        observer.observe(entry.target);
      }
    };

    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, loadRenteeList, pageIndex, pageSize, searchParams]);

  return (
    <Body>
      <PageTitle
        title={
          searchParams.get("keyword") ? searchParams.get("keyword") : listType
        }
      />
      <InfoListHeader listType={SEARCH_TYPES.KOREAN[listType]} />
      <SearchBarHolder>
        <SearchBar placeholder={listType} searchApiUrl={searchApiUrl} />
      </SearchBarHolder>
      <ResultBox>
        {rentees.map((rentee) => (
          <RenteeInfo
            key={rentee?.id}
            thumbnailUrl={process.env.REACT_APP_BEEP_API + rentee.thumbnailUrl}
            id={rentee?.id}
            name={rentee?.name}
            type={rentee?.type}
            bookArea={rentee?.bookArea}
            bookAuthorName={rentee?.bookAuthorName}
            rentState={rentee?.rentState}
          />
        ))}
      </ResultBox>
      {lastPage !== true ? (
        <div ref={target} style={{ padding: "20px" }}>
          <ReactLoading
            type="spin"
            color={theme.firstGray}
            width="28px"
            height="28px"
          />
        </div>
      ) : undefined}
    </Body>
  );
}

const SearchBarHolder = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 0 15px;
  margin: 20px 0;
`;

const ResultBox = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default InfoListLayout;
