import { useState, useEffect } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MenuItem, Select, TextField } from "@mui/material";

import INITIAL_RENTEE_INFO from "../../constant/INITIAL_RENTEE_INFO";
import {
  DateObjectToEpochSecond,
  EpochSecondToDateObject,
} from "../EpochConverter";
import RENTEE_TYPE from "../../constant/RENTEE_TYPES";

function ManagerRenteeInfoEdit({
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
        <TextInput
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
        <InfoBox id="thumbnail-section">
          <Label>표지</Label>
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
        </InfoBox>
        <InfoBox>
          <Label>저자</Label>
          <TextInput
            type="text"
            placeholder="저자"
            value={inputInfo?.authorName}
            onChange={(e) => {
              setInputInfo({
                ...inputInfo,
                authorName: e.target.value,
              });
            }}
          />
        </InfoBox>
        <InfoBox>
          <Label>출판사</Label>
          <TextInput
            type="text"
            placeholder="출판사"
            value={inputInfo?.publisher}
            onChange={(e) => {
              setInputInfo({
                ...inputInfo,
                publisher: e.target.value,
              });
            }}
          />
        </InfoBox>
        <InfoBox>
          <Label>출판일</Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="yyyy-MM-dd"
              value={EpochSecondToDateObject(inputInfo?.publishedDay)}
              onChange={(e) => {
                setInputInfo({
                  ...inputInfo,
                  publishedDay: DateObjectToEpochSecond(e),
                });
              }}
              renderInput={(params) => (
                <TextField
                  size="small"
                  sx={{
                    ".MuiInputBase-input": {
                      height: "14px",
                      fontSize: "13px",
                      padding: "10px 0 10px 5px",
                    },
                  }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </InfoBox>
        <InfoBox>
          <Label>분야</Label>
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
            {RENTEE_TYPE.ARRAY.map((element, index) => (
              <MenuItem key={index} value={index}>
                {RENTEE_TYPE.KOREAN[element]}
              </MenuItem>
            ))}
          </Select>
        </InfoBox>
        <InfoBox>
          <Label>비고</Label>
          <TextInput
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
        </InfoBox>
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

const TextInput = styled.input`
  outline: none;
  border: none;
  padding: 5px 0;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.secondGray};
  }

  :focus {
    border-bottom: 1px solid ${(props) => props.theme.blue};
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

const InfoBox = styled.div`
  width: 100%;
  margin-top: 10px;

  border: none;
  outline: none;

  display: grid;
  grid-template-columns: 90px auto;

  &#thumbnail-section {
    height: 200px;
  }
`;

const Label = styled.div`
  font-size: 14px;
  padding: 5px 0;
  color: ${(props) => props.theme.firstGray};
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

export default ManagerRenteeInfoEdit;
