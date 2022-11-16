import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import DetailHeader from "../components/header/DetailHeader";
import DetailInfo from "../components/Detail/DetailInfo";
import DetailRent from "../components/Detail/DetailRent";
import axios from "axios";

function Detail() {
  const params = useParams();
  const localStorage = window.localStorage;
  const [renteeId, setRenteeId] = useState(params.id);

  const [renteeDetail, setRenteeDetail] = useState({});
  const [rentalHistories, setRentalHistories] = useState([]);
  const [thumbnailUrl, setThumbnailUrl] = useState(undefined);

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
    <StyledBody>
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
        isBookmarked={renteeDetail?.isBookmarked}
        bookmarkCount={renteeDetail?.bookmarkCount}
      />
      <DetailRent
        rentalHistories={rentalHistories}
        rentState={renteeDetail?.rentState}
      />
    </StyledBody>
  );
}

const StyledBody = styled(Body)`
  height: 100vh;
`;

export default Detail;
