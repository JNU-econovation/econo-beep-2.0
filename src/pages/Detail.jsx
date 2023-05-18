import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Body from "@/styles/Body";
import PageTitle from "@/components/PageTitle";
import DetailHeader from "@/components/header/DetailHeader";
import RenteeDetail from "@/components/detail/RenteeDetail";
import RentalHistoryList from "@/components/detail/RentalHistoryList";
import RentButton from "@/components/detail/RentButton";
import RenteeAPI from "@/lib/api/RenteeAPI";

function Detail() {
  const params = useParams();
  const localStorage = window.localStorage;
  const [renteeId, setRenteeId] = useState(params.id);

  const [renteeDetail, setRenteeDetail] = useState({});
  const [rentalHistories, setRentalHistories] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setRenteeId(params.id);
  }, [params]);

  useEffect(() => {
    const loadData = async () => {
      const data = await RenteeAPI.loadRenteeDetail(renteeId);
      setRenteeDetail(data);
      setRentalHistories(data.rentalHistories);
    };

    loadData();
  }, [localStorage, reload, renteeId]);

  return (
    <Body>
      <PageTitle title="상세 정보" />
      <DetailHeader />
      <RenteeDetail
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
        setReload={() => setReload((reload) => !reload)}
      />
      <RentSection>
        <RentTopSection>
          <div className="title">대출 기록</div>
          <RentButton
            currentRentState={renteeDetail?.rentState}
            renteeId={renteeDetail?.id}
            setReload={() => setReload((reload) => !reload)}
          />
        </RentTopSection>
        <RentalHistoryList
          rentalHistories={rentalHistories}
          rentState={renteeDetail?.rentState}
        />
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
  padding-bottom: 15px;
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
