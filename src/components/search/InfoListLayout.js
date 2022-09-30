import styled from "styled-components";
import ReactLoading from "react-loading";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";

import Header from "../header/Header";
import SearchBar from "./SearchBar";
import RenteeInfo from "./RenteeInfo";
import Body from "../Body";
import theme from "../../styles/Theme";
import PageTitle from "../PageTitle";

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
  const [isInitLoaded, setIsInitLoaded] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    if (searchParams.get("keyword") === null) {
      initTypeList();
      setIsInitLoaded(true);
    } else if (searchParams.get("keyword")) {
      initSearchList();
      setIsInitLoaded(true);
    }
  }, [searchParams.get("keyword")]);

  const loadRenteeList = useCallback(() => {
    if (searchParams.get("keyword") === null) {
      loadTypeList();
    } else if (searchParams.get("keyword")) {
      loadSearchList();
    }
  }, [searchParams.get("keyword")]);

  useEffect(() => {
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting && !isInitLoaded) {
        observer.unobserve(entry.target);
        await loadRenteeList();
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
  }, [target, loadRenteeList]);

  return (
    <Body>
      <PageTitle title={pageTitle} />
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

// const MoreRenteeButton = styled.button`
//   width: 85%;
//   height: 40px;
//   max-width: 400px;
//
//   margin: 15px 0;
//
//   border: 1px solid ${(props) => props.theme.firstGray};
//   border-radius: 10px;
//
//   font-size: 16px;
//   font-weight: 500;
//   color: ${(props) => props.theme.firstGray};
//   background-color: ${(props) => props.theme.bgColor};
//   }
// `;

export default InfoListLayout;
