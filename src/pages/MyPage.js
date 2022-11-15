import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import MyPageHeader from "../components/header/MyPageHeader";
import styled, { css } from "styled-components";
import { useState } from "react";
import RenteeInfo from "../components/RenteeInfo";
import RENTEE_TYPES from "../constant/RENTEE_TYPES";

function MyPage() {
  const [button, setButton] = useState({
    rented: true,
    returned: false,
    bookmarked: false,
  });

  return (
    <Body>
      <PageTitle title="마이 페이지" />
      <MyPageHeader />
      <ProfileSection>
        <img
          className="profile-img"
          src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__480.jpg"
          alt="profile"
        />
        <div className="user-name">22기 경주원</div>
        <div className="user-email">joowon@gmail.com</div>
        <div className="logout-button">로그아웃</div>
      </ProfileSection>
      <RentSection>
        <RentButtonSection>
          <RentButton
            state={button.rented}
            onClick={() => {
              setButton({ rented: true, returned: false, bookmarked: false });
            }}
          >
            <div className="rent-button-number">2</div>
            <div className="rent-button-title">대출 중</div>
          </RentButton>
          <RentButton
            state={button.returned}
            onClick={() => {
              setButton({ rented: false, returned: true, bookmarked: false });
            }}
          >
            <div className="rent-button-number">21</div>
            <div className="rent-button-title">반납 완료</div>
          </RentButton>
          <RentButton
            state={button.bookmarked}
            onClick={() => {
              setButton({ rented: false, returned: false, bookmarked: true });
            }}
          >
            <div className="rent-button-number">10</div>
            <div className="rent-button-title">즐겨찾기</div>
          </RentButton>
        </RentButtonSection>
        <RenteeInfoSection>
          <RenteeInfo
            id="2"
            title="인공지능을 위한 수학책이다 하하하하"
            bookAuthorName="저자저자저자"
            type={RENTEE_TYPES.KOREAN.AI}
          />
          <RenteeInfo
            id="2"
            title="인공지능을 위한 수학책이다 하하하하"
            bookAuthorName="저자저자저자"
            type={RENTEE_TYPES.KOREAN.AI}
          />
        </RenteeInfoSection>
      </RentSection>
    </Body>
  );
}

const ProfileSection = styled.div`
  width: 100%;
  padding: 20px 0 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.myPageBgColor};

  .profile-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 1000%;
  }

  .user-name {
    margin: 15px 0 0px 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.black};
  }

  .user-email {
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
  }

  .logout-button {
    padding: 7px 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${(props) => props.theme.rentPink};
    border: 1.5px solid ${(props) => props.theme.rentPink};
    border-radius: 5px;
  }
`;

const RentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const RentButtonSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const RentButton = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.state === true &&
    css`
      color: ${(props) => props.theme.black};
      border-bottom: 2px solid ${(props) => props.theme.black};
    `}

  ${(props) =>
    props.state === false &&
    css`
      color: ${(props) => props.theme.firstGray};
      border-bottom: 1px solid ${(props) => props.theme.firstGray};
    `}

  .rent-button-number {
    font-weight: 500;
    font-size: 26px;
    line-height: 35px;
  }

  .rent-button-title {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

const RenteeInfoSection = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 15px;
  background-color: ${(props) => props.theme.bgColor};
`;

export default MyPage;
