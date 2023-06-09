import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { useSearchParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import Layout from "@/components/common/layout/Layout";
import SearchBar from "@/components/common/SearchBar";
import RenteeInfo from "@/components/common/RenteeInfo";
import theme from "@/styles/Theme";
import SEARCH_TYPES from "@/constant/SEARCH_TYPES";

function InfoListLayout({ listType, searchApiUrl, loadRenteeList }) {
  const [searchParams, _] = useSearchParams();
  const pageSize = 8;
  const [pageIndex, setPageIndex] = useState(0);
  const [rentees, setRentees] = useState([]);
  const [lastPage, setLastPage] = useState(false);

  const observer = useIntersectionObserver(() => {
    setPageIndex((pageIndex) => pageIndex + 1);
  });
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
    };
  }, [targetRef]);

  useEffect(() => {
    if (!lastPage) getRenteeInfo();
  }, [pageIndex, lastPage, pageSize, searchParams]);

  return (
    <Layout
      title={
        searchParams.get("keyword")
          ? searchParams.get("keyword")
          : SEARCH_TYPES.KOREAN[listType]
      }
      pageType={SEARCH_TYPES.KOREAN[listType]}
    >
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
    </Layout>
  );
}

const SearchBarHolder = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const ResultBox = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

InfoListLayout.propTypes = {
  listType: PropTypes.string.isRequired,
  searchApiUrl: PropTypes.string.isRequired,
  loadRenteeList: PropTypes.func.isRequired,
};

export default InfoListLayout;
