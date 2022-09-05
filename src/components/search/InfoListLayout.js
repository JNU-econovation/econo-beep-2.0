import styled from "styled-components";
import ReactLoading from "react-loading";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Header from "../header/Header";
import SearchBar from "./SearchBar";
import RenteeInfo from "./RenteeInfo";
import Body from "../Body";
import theme from "../../styles/Theme";

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
    if (!searchParams.get("keyword")) {
      initTypeList();
      setIsInitLoaded(true);
    } else {
      initSearchList();
    }
  }, [searchParams]);

  useEffect(() => {
    const loadRenteeList = () => {
      if (!searchParams.get("keyword")) {
        loadTypeList();
        setIsInitLoaded(true);
      } else {
        loadSearchList();
      }
    };

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
  }, [target]);

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
