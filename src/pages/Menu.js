import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";

import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import MenuHeader from "../components/header/MenuHeader";

import literature from "../images/menu-literature.png";
import equipment from "../images/menu-equipment.png";
import infinity from "../images/menu-infinity.png";
import ranking from "../images/menu-ranking.png";
import recent from "../images/menu-recent-rent.png";
import email from "../images/menu-email.png";
import github from "../images/menu-github.png";
import admin from "../images/menu-admin.png";

function Menu() {
  const navigate = useNavigate();

  const showAlert = () => {
    alert("준비 중입니다.");
  };

  return (
    <Body>
      <PageTitle title="메뉴" />
      <MainPage>
        <MenuHeader />
        <MenuSection>
          <MenuHolder
            onClick={() => {
              navigate(routes.books);
            }}
          >
            <img className="menu-icon" src={literature} />
            <div className="menu-text">도서</div>
          </MenuHolder>
          <MenuHolder
            onClick={() => {
              navigate(routes.equipments);
            }}
          >
            <img className="menu-icon" src={equipment} />
            <div className="menu-text">기자재</div>
          </MenuHolder>
          <MenuHolder className="margin-bottom">
            <img className="menu-icon" src={infinity} />
            <div className="menu-text">전체</div>
          </MenuHolder>

          <MenuHolder
            onClick={() => {
              showAlert();
            }}
          >
            <img className="menu-icon" src={ranking} />
            <div className="menu-text">랭킹</div>
          </MenuHolder>
          <MenuHolder
            className="margin-bottom"
            onClick={() => {
              navigate(routes.myPage);
            }}
          >
            <img className="menu-icon" src={recent} />
            <div className="menu-text">최근 대여 기록</div>
          </MenuHolder>

          <MenuHolder
            onClick={() => {
              window.open("mailto:sckwon770@gmail.com", "_blank");
            }}
          >
            <img className="menu-icon" src={email} />
            <div className="menu-text">버그 리포트</div>
          </MenuHolder>
          <MenuHolder
            onClick={() => {
              window.open(
                "https://github.com/JNU-econovation/econo-beep-2.0",
                "_blank"
              );
            }}
          >
            <img className="menu-icon" src={github} />
            <div className="menu-text">깃허브</div>
          </MenuHolder>
          <MenuHolder
            onClick={() => {
              navigate(routes.manager);
            }}
          >
            <img className="menu-icon" src={admin} />
            <div className="menu-text">관리자 콘솔</div>
          </MenuHolder>
        </MenuSection>
      </MainPage>
    </Body>
  );
}

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) => props.theme.bgColor};
`;

const MenuSection = styled.div`
  margin-left: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin-bottom {
    margin-bottom: 60px;
  }
`;

const MenuHolder = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 60px auto;
  cursor: pointer;

  .menu-icon {
    width: 33px;
    height: 33px;
    object-fit: cover;
  }

  .menu-text {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme.black};
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: left;
  }
`;

export default Menu;
