import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { useSearchParams } from "react-router-dom";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import SearchBar from "@/components/common/SearchBar";
import RenteeInfo from "@/components/common/RenteeInfo";
import Body from "@/styles/Body";
import theme from "@/styles/Theme";
import PageTitle from "@/components/common/PageTitle";
import InfoListHeader from "@/components/header/InfoListHeader";

import SEARCH_TYPES from "@/constant/SEARCH_TYPES";

function InfoListLayout({ listType, searchApiUrl, loadRenteeList }) {
  const [searchParams, _] = useSearchParams();
  const pageSize = 8;
  const [pageIndex, setPageIndex] = useState(0);
  const [rentees, setRentees] = useState([]);
  const [lastPage, setLastPage] = useState(false);

  const observer = useIntersectionObserver(() => {setPageIndex(pageIndex => pageIndex + 1)});
  const targetRef = useRef(null);

  const getRenteeInfo = async () => {
    const loadedRentees = await loadRenteeList({
      keyword: searchParams.get("keyword"),
      pageIndex: pageIndex,
      pageSize: pageSize,
    });

    setRentees((rentees) => [...rentees, ...loadedRentees]);
    if (loadedRentees.length === 0) {
      setLastPage(true);
    }
  };

  useEffect(() => {
    const unobserve = observer.observe(targetRef.current);
    return () => {
      observer && unobserve();
    }
  }, [targetRef])

  useEffect(() => {
    if (!lastPage) getRenteeInfo();
  }, [pageIndex, lastPage, pageSize, searchParams])

  return (
    <Body>
      <PageTitle
        title={
          searchParams.get("keyword")
            ? searchParams.get("keyword")
            : SEARCH_TYPES.KOREAN[listType]
        }
      />
      <InfoListHeader listType={SEARCH_TYPES.KOREAN[listType]} />
      <SearchBarHolder>
        <SearchBar
          placeholder={SEARCH_TYPES.KOREAN[listType]}
          searchApiUrl={searchApiUrl}
        />
      </SearchBarHolder>
      <ResultBox>
        {rentees.map((rentee) => (
          <RenteeInfo
            key={rentee?.id}
            thumbnailUrl={import.meta.env.VITE_BEEP_API + rentee.thumbnailUrl}
            id={rentee?.id}
            name={rentee?.name}
            type={rentee?.type}
            bookArea={rentee?.bookArea}
            bookAuthorName={rentee?.bookAuthorName}
            rentState={rentee?.rentState}
          />
        ))}
      </ResultBox>
      {lastPage !== true && (
        <div ref={targetRef} style={{ padding: "20px" }}>
          <ReactLoading
            type="spin"
            color={theme.firstGray}
            width="28px"
            height="28px"
          />
        </div>
      )}
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
