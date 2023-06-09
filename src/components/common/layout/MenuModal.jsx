import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Backdrop } from "@mui/material";
import { BiX } from "react-icons/bi";

import routes from "@/routes";
import MenuButton from "@/components/common/layout/MenuButton";

const Container = styled.div`
  width: 250px;
  height: calc(var(--vh, 1vh) * 100);
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) => props.theme.bgColor};
  overflow-y: auto;
`;

const TopBox = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  background: ${({ theme }) => theme.managerBlue};
  color: white;
`;

const UserBtn = styled.button`
  background-color: ${({ theme }) => theme.managerBlue};
  color: white;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 1rem;
  top: 1.25rem;
  font-size: 2.25rem;
`;

const MenuBtnSection = styled.div`
  margin: 2rem;
  height: 100%;
`;

function MenuModal({ isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  const showPreparingAlert = () => {
    alert("준비 중입니다.");
  };

  const MENU_INFO = [
    {
      type: "홈",
      imgSrc: "https://img.icons8.com/color/48/home--v1.png",
      handleClick: () => {
        navigate(routes.home);
      },
    },
    {
      type: "도서",
      imgSrc: "https://img.icons8.com/color/48/open-book--v1.png",
      handleClick: () => {
        navigate(routes.books);
      },
    },
    {
      type: "기자재",
      imgSrc: "https://img.icons8.com/color/48/usb-memory-stick.png",
      handleClick: () => {
        navigate(routes.device);
      },
    },
    {
      type: "랭킹",
      imgSrc: "https://img.icons8.com/color/48/prize.png",
      handleClick: () => {
        showPreparingAlert();
      },
    },
    {
      type: "최근 대여 기록",
      imgSrc: "https://img.icons8.com/color/48/clock--v1.png",
      handleClick: () => {
        showPreparingAlert();
      },
    },
    {
      type: "버그 리포트",
      imgSrc: "https://img.icons8.com/color/48/filled-message.png",
      handleClick: () => {
        window.open("mailto:sckwon770@gmail.com", "_blank");
      },
    },
    {
      type: "깃허브",
      imgSrc: "https://img.icons8.com/color/48/github--v1.png",
      handleClick: () => {
        window.open(
          "https://github.com/JNU-econovation/econo-beep-2.0",
          "_blank"
        );
      },
    },
    {
      type: "관리자 콘솔",
      imgSrc: "https://img.icons8.com/color/48/admin-settings-male.png",
      handleClick: () => {
        navigate(routes.manager);
      },
    },
  ];

  return (
    <Backdrop open={isMenuOpen} transitionDuration={500}>
      <Container>
        <TopBox>
          <UserBtn
            onClick={() => {
              navigate(routes.myPage);
            }}
          >
            경주원 님
          </UserBtn>
          <CloseBtn>
            <BiX onClick={() => setIsMenuOpen(false)} />
          </CloseBtn>
        </TopBox>
        <MenuBtnSection>
          {MENU_INFO.map((menu) => (
            <MenuButton
              key={menu.type}
              type={menu.type}
              imgSrc={menu.imgSrc}
              handleClick={() => {
                menu.handleClick();
                setIsMenuOpen(false);
              }}
            />
          ))}
        </MenuBtnSection>
      </Container>
    </Backdrop>
  );
}

export default React.memo(MenuModal);
