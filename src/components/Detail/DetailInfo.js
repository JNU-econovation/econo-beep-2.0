import { IoMdInformation } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import styled from "styled-components";
import Wave from "react-wavify";
import { useColor } from "color-thief-react";
import { useState } from "react";
import { Backdrop } from "@mui/material";
import RENTEE_TYPES from "../../constant/RENTEE_TYPES";

function DetailInfo({
  id,
  type,
  thumbnailUrl,
  name,
  bookArea,
  bookAuthorName,
  bookPublisherName,
  rentCount,
  note,
  isBookmarked,
  bookmarkCount,
}) {
  const [noteOpen, setNoteOpen] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const { data, loading, error } = useColor(thumbnailUrl, "hex", {
    crossOrigin: "Anonymous",
  });

  return (
    <>
      <BasicInfoSection>
        <RenteeImg
          src={process.env.REACT_APP_BEEP_API + "/api" + thumbnailUrl}
        />
        <InfoSection>
          <TextInfoSection>
            <div className="publisher">{bookPublisherName}</div>
            <div className="title">{name}</div>
            <div className="author-name">{bookAuthorName}</div>
            <RenteeType>
              <div>
                #
                {type === RENTEE_TYPES.BOOK
                  ? RENTEE_TYPES.BOOK_AREA_KOREAN[bookArea]
                  : RENTEE_TYPES.TYPE_KOREAN[type]}
              </div>
            </RenteeType>
          </TextInfoSection>
          <ButtonSection>
            <div
              className="note button"
              onClick={() => {
                setNoteOpen(true);
              }}
            >
              <IoMdInformation />
            </div>
            <Backdrop sx={{ color: "#fff" }} open={noteOpen}>
              <NoteSection>
                <div className="note-top">
                  <div
                    className="note-close"
                    onClick={() => {
                      setNoteOpen(false);
                    }}
                  >
                    <IoCloseOutline />
                  </div>
                  <div className="note-title">비고</div>
                </div>
                <div className="note-content">{note}</div>
              </NoteSection>
            </Backdrop>
            <div
              className="bookmark button"
              onClick={() => {
                setBookmark((bookmark) => !bookmark);
              }}
            >
              {bookmark ? <RiHeart3Fill /> : <RiHeart3Line />}
            </div>
          </ButtonSection>
        </InfoSection>
        <WaveSection>
          <Wave
            mask="url(#mask)"
            fill={data}
            paused={false}
            options={{ height: 15, speed: 0.1, amplitude: 10, points: 3 }}
            filter="brightness(0.85)"
          >
            <defs>
              <linearGradient
                id="gradient"
                gradientTransform="rotate(90)"
                filter="brightness(0.9)"
              >
                <stop offset="0" stopColor="white" />
                <stop offset="0.3" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2000"
                  height="200"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave>
        </WaveSection>
      </BasicInfoSection>
      <AdditionalInfoSection>
        <AdditionalInfo>
          <div className="info">{id}</div>
          <div className="title">아이디</div>
        </AdditionalInfo>
        <AdditionalInfo>
          <div className="info">{bookmarkCount}</div>
          <div className="title">즐겨찾기</div>
        </AdditionalInfo>
        <AdditionalInfo>
          <div className="info">{rentCount}</div>
          <div className="title">대여</div>
        </AdditionalInfo>
      </AdditionalInfoSection>
    </>
  );
}

const BasicInfoSection = styled.div`
  width: 100%;
  padding: 35px 20px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const RenteeImg = styled.img`
  width: 40%;
  max-width: 200px;
  object-fit: cover;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  z-index: 1;
`;

const InfoSection = styled.div`
  min-height: 145px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const TextInfoSection = styled.div`
  & > div {
    margin-bottom: 3px;
  }

  .publisher {
    color: ${(props) => props.theme.firstGray};
    font-size: 10px;
    font-weight: 500;
  }

  .title {
    color: ${(props) => props.theme.black};
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
  }

  .author-name {
    color: ${(props) => props.theme.firstGray};
    font-size: 14px;
    font-weight: 500;
  }
`;

const RenteeType = styled.div`
  margin-top: 10px;
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

const ButtonSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  float: right;
  z-index: 1;

  .button {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.bgColor};
    border-radius: 1000px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    cursor: pointer;
  }
  .note {
    font-size: 30px;
    color: ${(props) => props.theme.firstGray};
  }

  .bookmark {
    margin-left: 20px;
    font-size: 20px;
    color: ${(props) => props.theme.managerRed};
  }
`;

const NoteSection = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;

  padding: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor};

  position: relative;
  z-index: 10;

  .note-top {
    padding-bottom: 10px;
    color: ${(props) => props.theme.firstGray};
    border-bottom: 1px solid ${(props) => props.theme.borderGray};
    position: relative;
  }

  .note-title {
    width: 100%;
    font-weight: 600;
    font-size: 16px;
  }

  .note-close {
    color: ${(props) => props.theme.firstGray};
    font-size: 28px;
    position: absolute;
    top: -20px;
    right: -20px;
  }

  .note-content {
    padding: 20px 0;
    font-size: 14px;
    color: ${(props) => props.theme.black};
    line-height: 1.5em;
    text-align: justify;
  }
`;

const WaveSection = styled.div`
  width: 100vw;
  height: 10%;
  padding: 0;

  position: absolute;
  bottom: 80px;
  z-index: 0;
`;

const AdditionalInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AdditionalInfo = styled.div`
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .info {
    margin-bottom: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.black};
    font-weight: 500;
    font-size: 26px;
    line-height: 35px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.firstGray};
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export default DetailInfo;
