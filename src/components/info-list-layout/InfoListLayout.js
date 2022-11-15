import styled from "styled-components";
import ReactLoading from "react-loading";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";

import SearchBar from "../SearchBar";
import RenteeInfo from "../RenteeInfo";
import Body from "../Body";
import theme from "../../styles/Theme";
import PageTitle from "../PageTitle";
import InfoListHeader from "../header/InfoListHeader";

function InfoListLayout({ listType, searchApiUrl, rentees, loadRenteeList }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [isInitLoaded, setIsInitLoaded] = useState(false);
  const target = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 8;

  // useEffect(() => {
  //   if (searchParams.get("keyword") === null) {
  //     initTypeList();
  //     setIsInitLoaded(true);
  //   } else if (searchParams.get("keyword")) {
  //     initSearchList(pageIndex, pageSize);
  //     setIsInitLoaded(true);
  //   }
  // }, [searchParams.get("keyword")]);
  //
  // const loadRenteeList = useCallback(() => {
  //   if (searchParams.get("keyword") === null) {
  //     loadTypeList();
  //   } else if (searchParams.get("keyword")) {
  //     loadSearchList();
  //   }
  // }, [searchParams.get("keyword")]);

  useEffect(() => {
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await loadRenteeList({
          keyword: searchParams?.get("keyword"),
          pageIndex: pageIndex,
          pageSize: pageSize,
        });
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
      <InfoListHeader listType={listType} />
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
            type={rentee.type}
            rentState={rentee.rentState}
          />
        ))}
      </ResultBox>
      <div ref={target} style={{ padding: "20px" }}>
        <ReactLoading
          type="spin"
          color={theme.firstGray}
          width="28px"
          height="28px"
        />
      </div>
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
