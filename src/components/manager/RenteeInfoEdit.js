import { useState, useEffect } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { MenuItem, Select, TextField } from "@mui/material";

import INITIAL_RENTEE_INFO from "../../constant/INITIAL_RENTEE_INFO";
import * as S from "../../styles/ManagerInfoEditStyle";
import RENTEE_TYPE from "../../constant/RENTEE_TYPES";
import BookAdditionalInfoEdit from "./BookAdditionalInfoEdit";

function RenteeInfoEdit({
  isBookMode,
  editRenteeInfo,
  setEditRenteeInfo,
  setIsEditMode,
}) {
  const [inputInfo, setInputInfo] = useState(editRenteeInfo);
  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  useEffect(() => {
    setInputInfo({ ...editRenteeInfo });

    const loadThumbnail = async () => {
      if (!editRenteeInfo.thumbnail || editRenteeInfo.thumbnail === "") {
        return;
      } else {
        const response = await fetch(editRenteeInfo?.thumbnail);
        const blob = await response.blob();
        setThumbnail(new File([blob], "image.jpg", { type: blob.type }));
        setThumbnailPreview(editRenteeInfo?.thumbnail);
      }
    };

    loadThumbnail();
  }, [editRenteeInfo]);

  useEffect(() => {
    if (!thumbnail || thumbnail === "") {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setThumbnailPreview(e.target.result);
    };
    reader.readAsDataURL(thumbnail);

    console.log(thumbnail);
  }, [thumbnail]);

  return (
    <Container>
      <TopSection>
        <S.TextInput
          className="title"
          type="text"
          placeholder="제목"
          value={inputInfo?.title}
          onChange={(e) => {
            setInputInfo({
              ...inputInfo,
              title: e.target.value,
            });
          }}
        />
        <div
          id="close-button"
          onClick={() => {
            setIsEditMode(false);
            setEditRenteeInfo(INITIAL_RENTEE_INFO);
            setInputInfo(INITIAL_RENTEE_INFO);
          }}
        >
          <MdClose />
        </div>
      </TopSection>
      <MediumSection>
        <S.InfoBox id="thumbnail-section">
          <S.Label>표지</S.Label>
          <ImgBox>
            <label htmlFor="input-thumbnail">
              {!thumbnailPreview ? (
                <div id="thumbnail-icon">
                  <AddPhotoAlternateOutlinedIcon />
                </div>
              ) : (
                <img
                  id="thumbnail-preview"
                  src={thumbnailPreview}
                  alt="thumbnail-preview"
                />
              )}
            </label>
            <input
              id="input-thumbnail"
              type="file"
              placeholder="이미지"
              style={{ display: "none" }}
              onChange={(e) => {
                setThumbnail(e.target.files[0]);
              }}
            />
          </ImgBox>
        </S.InfoBox>
        {!isBookMode ? undefined : (
          <BookAdditionalInfoEdit
            inputInfo={inputInfo}
            setInputInfo={setInputInfo}
          />
        )}
        <S.InfoBox>
          <S.Label>분야</S.Label>
          <Select
            labelId="SelectSortOrder"
            id="Select"
            value={inputInfo.type}
            onChange={(e) => {
              setInputInfo({ ...inputInfo, type: e.target.value });
            }}
            size="small"
            sx={{
              ".MuiInputBase-input": {
                height: "14px",
                fontSize: "13px",
                padding: "5px 0 10px 5px",
              },
            }}
          >
            <MenuItem disabled value={-1}>
              <i>종류</i>
            </MenuItem>
            {!isBookMode ? (
              <MenuItem key={0} value={0}>
                {RENTEE_TYPE.TYPE_KOREAN.DEVICE}
              </MenuItem>
            ) : (
              RENTEE_TYPE.BOOK_AREA_ARRAY.map((element, index) => (
                <MenuItem key={index} value={index}>
                  {RENTEE_TYPE.BOOK_AREA_KOREAN[element]}
                </MenuItem>
              ))
            )}
          </Select>
        </S.InfoBox>
        <S.InfoBox>
          <S.Label>비고</S.Label>
          <S.TextInput
            type="text"
            placeholder="비고"
            value={inputInfo?.note}
            onChange={(e) => {
              setInputInfo({
                ...inputInfo,
                note: e.target.value,
              });
            }}
          />
        </S.InfoBox>
      </MediumSection>
      <Button>
        <div>수정하기</div>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 0 10px 30px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
`;

const TopSection = styled.div`
  width: 100%;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #close-button {
    font-size: 26px;
    color: ${(props) => props.theme.firstGray};
    cursor: pointer;
  }

  .title {
    width: 100%;
    margin-right: 10px;
    font-size: 18px;
    border: none;
  }
`;

const MediumSection = styled.div`
  width: 100%;
  //height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  #thumbnail-icon {
    color: gray;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }

  & > label > img {
    height: 200px;
    object-fit: contain;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Button = styled.div`
  width: 50%;
  max-width: 100px;
  height: 35px;
  padding: 0;

  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid transparent;
  border-radius: 15px;
  background-image: linear-gradient(
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.bluePurple};
  background-origin: border-box;
  background-clip: content-box, border-box;

  div {
    background: ${(props) => props.theme.bluePurple};
    color: transparent;
    -webkit-background-clip: text;
  }
`;

export default RenteeInfoEdit;
