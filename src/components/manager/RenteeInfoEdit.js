import { useState, useEffect } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import INITIAL_RENTEE_INFO from "../../constant/INITIAL_RENTEE_INFO";
import * as S from "../../styles/ManagerInfoEditStyle";
import BookAdditionalInfoEdit from "./BookAdditionalInfoEdit";
import ManagementAPI from "../../lib/api/ManagementAPI";
import RenteeTypeSelect from "./RenteeTypeSelect";
import {DateObjectToEpochSecond} from "../../lib/utils/EpochConverter";

function RenteeInfoEdit({
  isBookMode,
  editRenteeInfo,
  setEditRenteeInfo,
  setIsEditOpen,
  isEditMode,
  setReload,
}) {
  const [inputInfo, setInputInfo] = useState(INITIAL_RENTEE_INFO);
  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  useEffect(() => {
    if (!editRenteeInfo.bookPublishedDate) {
      let today = new Date()
      setInputInfo({...editRenteeInfo, bookPublishedDate: DateObjectToEpochSecond(today)})
    } else {
      setInputInfo({...editRenteeInfo})
    }

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

  const createForm = () => {
    const form = new FormData();
    form.append('thumbnail', thumbnail);
    console.log(thumbnail);
    form.append('name', inputInfo.name);
    form.append('note', inputInfo.note);

    if (isBookMode !== false) {
      form.append('bookArea', inputInfo.bookArea);
      form.append('bookAuthorName', inputInfo.bookAuthorName);
      form.append('bookPublisherName', inputInfo.bookPublisherName);
      form.append('bookPublishedDateEpochSecond', inputInfo.bookPublishedDate);
    }

    return form;
  }

  const onButtonClick = async () => {
    const form = createForm();

    if (isBookMode && !isEditMode) {
      try {
        await ManagementAPI.createBook(form);
        alert(`${inputInfo.name}의 정보를 등록했습니다`);
        setReload();
      } catch (e) {
        alert(`${inputInfo.name}의 정보 등록을 실패했습니다.`);
      }
    }

    if (isBookMode && isEditMode) {
      try {
        await ManagementAPI.editBook(form, inputInfo.id);
        alert(`${inputInfo.name}의 정보를 수정했습니다`);
        setReload();
      } catch (e) {
        alert(`${inputInfo.name}의 정보 수정을 실패했습니다.`);
      }
    }

    if (!isBookMode && !isEditMode) {
      try {
        await ManagementAPI.createDevice(form);
        alert(`${inputInfo.name}의 정보를 등록했습니다`);
        setReload();
      } catch (e) {
        alert(`${inputInfo.name}의 정보 등록을 실패했습니다.`);
      }
    }

    if (!isBookMode && isEditMode) {
      try {
        await ManagementAPI.editDevice(form, inputInfo.id);
        alert(`${inputInfo.name}의 정보를 수정했습니다`);
        setReload();
      } catch (e) {
        alert(`${inputInfo.name}의 정보 수정을 실패했습니다.`);
      }
    }

  }

  useEffect(() => {
    if (!thumbnail || thumbnail === "") {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setThumbnailPreview(e.target.result);
    };
    reader.readAsDataURL(thumbnail);
  }, [thumbnail]);

  return (
    <Container>
      <TopSection>
        <S.TextInput
          className="title"
          type="text"
          placeholder="제목"
          value={inputInfo?.name}
          onChange={(e) => {
            setInputInfo({
              ...inputInfo,
              name: e.target.value,
            });
          }}
        />
        <div
          id="close-button"
          onClick={() => {
            setIsEditOpen(false);
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
          <RenteeTypeSelect inputInfo={inputInfo} setInputInfo={setInputInfo} isBookMode={isBookMode} />
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
      <Button onClick={onButtonClick}>
        <div>{!isEditMode ? "추가하기" : "수정하기"}</div>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
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
    :hover {
      border-bottom: 1px solid ${(props) => props.theme.secondGray};
    }

    :focus {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

const MediumSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 80%;

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
    height: 150px;
    object-fit: contain;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
    cursor: pointer;
  }
`;

const Button = styled.div`
  width: 50%;
  max-width: 100px;
  height: 35px;
  margin-top: 10px;
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
