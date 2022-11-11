import styled from "styled-components";
import React from "react";
import RENT_STATE from "../../constant/RENT_STATES";
import RentState from "./RentState";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

function RenteeInfo({ src, id, title, authorName, type, rentState }) {
  const navigate = useNavigate();
  return (
    <InfoHolder
      onClick={() => {
        navigate(`${routes.detail}/${id}`);
      }}
    >
      <InfoImg src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_311/3-2-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg" />
      <InfoTextBox>
        <DetailInfo>
          {authorName ? <RenteeAuthor>{authorName}</RenteeAuthor> : null}
          <RenteeTitle>{title}</RenteeTitle>
          <RenteeType>
            <div>#{type}</div>
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

  width: 100%;
  padding: 15px 5px;
`;

const InfoImg = styled.img`
  border-radius: 10px;
  object-fit: cover;

  width: 35%;
  max-width: 140px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)); ;
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

const RenteeTitle = styled.div`
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
