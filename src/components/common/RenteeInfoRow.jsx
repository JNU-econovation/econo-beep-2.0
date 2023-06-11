import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import RentState from "@/components/info-list-layout/RentState";
import RenteeTypeHashtag from "@/components/common/RenteeTypeHashtag";

function RenteeInfoRow({
  id,
  thumbnailUrl,
  name,
  type,
  bookArea,
  bookAuthorName,
  rentState,
}) {
  const navigate = useNavigate();
  return (
    <InfoHolder
      onClick={() => {
        navigate(`${routes.detail}/${id}`);
      }}
    >
      <InfoImg src={thumbnailUrl} />
      <InfoTextBox>
        <DetailInfo>
          {bookAuthorName ? (
            <RenteeAuthor>{bookAuthorName}</RenteeAuthor>
          ) : null}
          <RenteeName>{name}</RenteeName>
          <RenteeTypeHashtag type={type} bookArea={bookArea} />
        </DetailInfo>
        <RentState rentState={rentState} />
      </InfoTextBox>
    </InfoHolder>
  );
}

const InfoHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  width: 100%;
  padding: 15px 5px;
`;

const InfoImg = styled.img`
  border-radius: 10px;
  object-fit: cover;

  width: 35%;
  max-width: 140px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

const InfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 55%;
  height: 100%;
  margin-left: 15px;
`;

const DetailInfo = styled.div`
  width: 100%;
  margin-bottom: 20%;
  text-align: left;
`;

const RenteeAuthor = styled.div`
  font-size: 11px;

  color: ${(props) => props.theme.firstGray};
`;

const RenteeName = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0 10px 0;

  color: ${(props) => props.theme.black};
`;

export default React.memo(RenteeInfoRow);
