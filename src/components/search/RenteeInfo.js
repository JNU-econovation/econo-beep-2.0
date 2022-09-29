import styled from "styled-components";
import React from "react";
import RENT_STATE from "../../constant/RENT_STATE";
import { useNavigate } from "react-router-dom";

function RenteeInfo({ src, id, title, authorName, rentState }) {
  const navigate = useNavigate();
  return (
    <InfoHolder
      onClick={() => {
        navigate("/rentee/" + id);
      }}
    >
      <InfoImg src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_311/3-2-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg" />
      <InfoTextBox>
        <DetailInfo>
          <RenteeId>{id}</RenteeId>
          <RenteeTitle>{title}</RenteeTitle>
          {authorName ? <RenteeAuthor>{authorName}</RenteeAuthor> : null}
        </DetailInfo>
        {rentState === RENT_STATE.RENTED ? (
          <RentInfoRed>반납하기</RentInfoRed>
        ) : null}
        {rentState === RENT_STATE.RENTABLE ? (
          <RentInfoBlue>대여하기</RentInfoBlue>
        ) : null}
        {rentState === RENT_STATE.UNRENTABLE ? (
          <RentInfoGray>대여 불가</RentInfoGray>
        ) : null}
      </InfoTextBox>
    </InfoHolder>
  );
}

const InfoHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 0;
  border-bottom: 0.2px solid darkgray;
`;

const InfoImg = styled.img`
  border-radius: 10px;
  object-fit: cover;

  width: 40%;
  max-width: 140px;
`;

const InfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  height: 100%;
  margin-left: 15px;
`;

const DetailInfo = styled.div`
  width: 100%;
  margin-bottom: 20%;
  text-align: left;
`;

const RenteeId = styled.div`
  font-size: 0.3rem;
  color: ${(props) => props.theme.secondGray};
`;

const RenteeTitle = styled.div`
  font-size: 1rem;
  padding: 0.3rem 0;

  color: ${(props) => props.theme.black};
`;

const RenteeAuthor = styled.div`
  font-size: 0.8rem;

  color: ${(props) => props.theme.firstGray};
`;

const RentInfo = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.8rem;

  font-weight: 500;
`;

const RentInfoRed = styled(RentInfo)`
  color: ${(props) => props.theme.rentRed};
`;

const RentInfoBlue = styled(RentInfo)`
  color: ${(props) => props.theme.rentBlue};
`;

const RentInfoGray = styled(RentInfo)`
  color: ${(props) => props.theme.rentGray};
`;

export default React.memo(RenteeInfo);
