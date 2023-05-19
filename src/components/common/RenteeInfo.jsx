import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import RentState from "@/components/info-list-layout/RentState";
import RENTEE_TYPES from "@/constant/RENTEE_TYPES";

function RenteeInfo({
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
          <RenteeType>
            <div>
              #
              {type === RENTEE_TYPES.BOOK
                ? RENTEE_TYPES.BOOK_AREA_KOREAN[bookArea]
                : RENTEE_TYPES.TYPE_KOREAN[type]}
            </div>
          </RenteeType>
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

const RenteeType = styled.div`
  padding: 0;
  display: inline-block;

  border: 1px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(
      ${(props) => props.theme.managerBgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.bluePurple};
  background-origin: border-box;
  background-clip: content-box, border-box;

  div {
    margin: 6px;
    font-size: 10px;
    background: ${(props) => props.theme.bluePurple};
    color: transparent;
    -webkit-background-clip: text;
  }
`;

export default React.memo(RenteeInfo);
