import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Body from "../styles/Body";
import PageTitle from "../components/PageTitle";
import DetailHeader from "../components/header/DetailHeader";
import DetailInfo from "../components/Detail/DetailInfo";
import RentalHistories from "../components/Detail/RentalHistories";
import RentButton from "../components/Detail/RentButton";

function Detail() {
  const params = useParams();
  const localStorage = window.localStorage;
  const [renteeId, setRenteeId] = useState(params.id);

  const [renteeDetail, setRenteeDetail] = useState({});
  const [rentalHistories, setRentalHistories] = useState([]);

  useEffect(() => {
    setRenteeId(params.id);
  }, [params]);

  useEffect(() => {
    const loadRenteeDetail = async () => {
      const response = await axios.get(
        process.env.REACT_APP_BEEP_API + "/api/rentee/" + renteeId,
        {
          params: {
            accessToken: localStorage?.getItem("accessToken"),
          },
        }
      );
      setRenteeDetail(response.data);
      setRentalHistories(response.data.rentalHistories);
    };

    loadRenteeDetail();
  }, [localStorage]);

  return (
    <Body>
      <PageTitle title="상세 정보" />
      <DetailHeader />
      <DetailInfo
        id={renteeDetail?.id}
        type={renteeDetail?.type}
        thumbnailUrl={renteeDetail?.thumbnailUrl}
        name={renteeDetail?.name}
        bookArea={renteeDetail?.bookArea}
        bookAuthorName={renteeDetail?.bookAuthorName}
        bookPublisherName={renteeDetail?.bookPublisherName}
        rentCount={renteeDetail?.rentCount}
        note={renteeDetail?.note}
        bookmark={renteeDetail?.isBookmarked}
        bookmarkCount={renteeDetail?.bookmarkCount}
      />
      <RentSection>
        <RentTopSection>
          <div className="title">대출 기록</div>
          <RentButton
            currentRentState={renteeDetail?.rentState}
            renteeId={renteeDetail?.id}
          />
        </RentTopSection>
        <RentalHistories rentalHistories={rentalHistories} />
      </RentSection>
    </Body>
  );
}

const RentSection = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  padding: 30px;
`;

const RentTopSection = styled.div`
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.borderGray};

  .title {
    color: ${(props) => props.theme.black};
    font-weight: 700;
    font-size: 20px;
  }
`;

export default Detail;
