import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RenteeAPI from "@/lib/api/RenteeAPI";
import Layout from "@/components/common/layout/Layout";
import RenteeInfo from "../components/detail/RenteeInfo";
import RentalInfo from "../components/detail/RentalInfo";
import RentalHistory from "../components/detail/RentalHistory";

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
    <Layout title={renteeDetail?.name}>
      <RenteeInfo
        id={renteeDetail?.id}
        type={renteeDetail?.type}
        thumbnailUrl={renteeDetail?.thumbnailUrl}
        name={renteeDetail?.name}
        bookArea={renteeDetail?.bookArea}
        bookAuthorName={renteeDetail?.bookAuthorName}
        bookPublisherName={renteeDetail?.bookPublisherName}
        note={renteeDetail?.note}
        isBookmarked={renteeDetail?.isBookmarked}
        setReload={() => {
          setReload((reload) => !reload);
        }}
      />

      <RentalInfo
        id={renteeDetail?.id}
        bookmarkCount={renteeDetail?.bookmarkCount}
        rentCount={renteeDetail?.rentCount}
      />

      <RentalHistory
        id={renteeDetail?.id}
        rentState={renteeDetail?.rentState}
        rentalHistories={rentalHistories}
        setReload={() => {
          setReload((reload) => !reload);
        }}
      />
    </Layout>
  );
}

export default Detail;
