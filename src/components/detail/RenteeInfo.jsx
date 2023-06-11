import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdInformation } from "react-icons/io";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { useColor } from "color-thief-react";

import ColorWave from "./ColorWave";
import RenteeAPI from "@/lib/api/RenteeAPI";
import RenteeTypeHashtag from "@/components/common/RenteeTypeHashtag";
import CreatePortal from "@/components/common/CreatePortal";
import Modal from "@/components/detail/Modal";

const Container = styled.div`
  position: relative;
  z-index: 0;

  max-width: 600px;
  width: 100%;
  padding: 1rem 1.25rem;

  display: grid;
  grid-template-columns: auto auto;
`;

const RenteeImg = styled.img`
  z-index: 1;
  width: 90%;
  margin: 0 auto;
  max-width: 160px;

  object-fit: cover;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
`;

const RightBox = styled.div`
  z-index: 1;
  min-height: 145px;
  margin-left: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextInfoSection = styled.div`
  & > div {
    margin-bottom: 0.25rem;
  }

  .publisher {
    color: ${(props) => props.theme.firstGray};
    font-size: 0.75rem;
    font-weight: 500;
  }

  .title {
    color: ${(props) => props.theme.black};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.1rem;
  }

  .author-name {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.firstGray};
    font-size: 14px;
    font-weight: 500;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  float: right;
`;

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
  border-radius: 1000px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  &.note {
    font-size: 30px;
    color: ${(props) => props.theme.firstGray};
  }

  &.bookmark {
    margin-left: 20px;
    font-size: 20px;
    color: ${(props) => props.theme.managerRed};
  }
`;

const WaveSection = styled.div`
  width: 100vw;
  height: 10%;
  padding: 0;

  z-index: 0;
  position: absolute;
  bottom: 80px;

  @media screen and (min-width: 601px) {
    left: calc(300px - 50vw);
  }

  @media screen and (max-width: 600px) {
    left: 0;
  }
`;

function RenteeInfo({
  id,
  name,
  thumbnailUrl,
  type,
  bookPublisherName,
  bookAuthorName,
  bookArea,
  note,
  isBookmarked: bookmark,
  setReload,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const thumbnailRef = useRef();

  const { data: thumbnailMainColor } = useColor(
    thumbnailUrl && thumbnailRef.current.src,
    "hex",
    {
      crossOrigin: "Anonymous",
    }
  );

  const onNoteClick = async () => {
    setIsModalOpen(true);
    if (!note) {
      return setModalText("비고사항이 없습니다.");
    }
    setModalText(note);
  };

  const onBookmarkClick = async () => {
    if (isBookmarked !== false) {
      try {
        await RenteeAPI.deleteBookmark(id);
        setIsBookmarked((isBookmarked) => !isBookmarked);
        setReload();
      } catch (e) {
        setIsModalOpen(true);
        setModalText("error");
      }
    } else {
      try {
        await RenteeAPI.putBookmark(id);
        setIsBookmarked((isBookmarked) => !isBookmarked);
        setReload();
      } catch (e) {
        setIsModalOpen(true);
        setModalText("로그인 후 이용해주세요.");
      }
    }
  };

  useEffect(() => {
    setIsBookmarked(bookmark);
  }, [bookmark]);

  return (
    <Container>
      <RenteeImg
        ref={thumbnailRef}
        src={import.meta.env.VITE_BEEP_API + thumbnailUrl}
      />
      <RightBox>
        <TextInfoSection>
          <div className="publisher">{bookPublisherName}</div>
          <div className="title">{name}</div>
          <div className="author-name">{bookAuthorName}</div>
          <RenteeTypeHashtag type={type} bookArea={bookArea} />
        </TextInfoSection>

        <ButtonSection>
          <Button className="note" onClick={onNoteClick}>
            <IoMdInformation />
          </Button>
          <Button className="bookmark" onClick={onBookmarkClick}>
            {isBookmarked ? <RiHeart3Fill /> : <RiHeart3Line />}
          </Button>
        </ButtonSection>
      </RightBox>

      {isModalOpen && (
        <CreatePortal>
          <Modal open={isModalOpen} setOpen={setIsModalOpen} text={modalText} />
        </CreatePortal>
      )}

      <WaveSection>
        <ColorWave color={thumbnailMainColor} />
      </WaveSection>
    </Container>
  );
}

export default RenteeInfo;
