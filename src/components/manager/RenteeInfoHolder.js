/* eslint-disable */
import styled from "styled-components";
import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { EpochSecondToDateObject} from "../../lib/utils/EpochConverter";
import RENTEE_TYPE from "../../constant/RENTEE_TYPES";
import routes from "../../routes";
import ManagementAPI from "../../lib/api/ManagementAPI";

function RenteeInfoHolder({
  setEditRenteeInfo,
  setIsEditOpen,
  setIsEditMode,
  isBookMode,
  rentee
}) {
  const navigate = useNavigate();

  const date = EpochSecondToDateObject(rentee?.bookPublishedDateEpochSecond);
  const publishedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  const handleEditClick = () => {
    setIsEditOpen(true);
    setIsEditMode(true);
    setEditRenteeInfo({
      id: rentee?.id,
      thumbnail: process.env.REACT_APP_BEEP_API + rentee?.thumbnailUrl,
      name: rentee?.name,
      bookAuthorName: rentee?.bookAuthorName,
      bookPublisherName: rentee?.bookPublisherName,
      bookPublishedDate: rentee?.bookPublishedDateEpochSecond,
      type: rentee?.type,
      bookArea: rentee?.bookArea,
      note: rentee?.note,
    });
  };

  const deleteRentee = async () => {
    if (rentee.type === RENTEE_TYPE.BOOK) {
      try {
        await ManagementAPI.deleteBook(rentee.id);
        alert(`${rentee.name}을 삭제했습니다.`);

      } catch (e) {
        alert(`${rentee.name} 삭제를 실패했습니다`);
      }
    } else if (rentee.type === RENTEE_TYPE.DEVICE) {
      try {
        const response = await ManagementAPI.deleteDevice(rentee.id);
        alert(`${rentee.name}을 삭제했습니다.`);
      } catch (e) {
        alert(`${rentee.name} 삭제를 실패했습니다`);
      }
    }
  }

  const handleDeleteClick = async () => {
    if (!confirm(`${rentee.name} 삭제하시겠습니까?`)) {
      return;
    } else {
      await deleteRentee();
    }
  };

  return (
    <Container>
      <RenteeDetailButton
        onClick={() => {
          navigate(`${routes.detail}/${rentee.id}`);
        }}
      >
        <IdImgBox>
          <div id="id">{rentee?.id}</div>
          <div id="image">
            <img src={process.env.REACT_APP_BEEP_API + rentee?.thumbnailUrl} />
          </div>
        </IdImgBox>
        {!isBookMode ? (
          <DeviceTextInfo>
            <div id="name">{rentee?.name}</div>
            <div id="note">{rentee?.note}</div>
          </DeviceTextInfo>
        ) : (
          <BookTextInfo>
            <div id="name">{rentee?.name}</div>
            <div id="author">{rentee?.bookAuthorName}</div>
            <div id="publisher">{rentee?.bookPublisherName}</div>
            <div id="published-day">{publishedDate}</div>
            <div id="note">{rentee?.note}</div>
          </BookTextInfo>
        )}
      </RenteeDetailButton>
      <RenteeInfoButtonHolder>
        <button id="edit" onClick={handleEditClick}>
          <RiPencilFill />
        </button>
        <button id="delete" onClick={handleDeleteClick}>
          <RiDeleteBinLine />
        </button>
      </RenteeInfoButtonHolder>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 2.5px 0;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 9fr 1fr;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.black};
  box-shadow: ${(props) => props.theme.managerBoxShadow};
  line-height: 100%;
  border-radius: ${(props) => props.theme.managerBorderRadius};

  :hover {
    box-shadow: 0 5px 20px 4px rgba(0, 0, 0, 0.06);
    transform: scale(1.015);
    transition: 0.17s;
  }
`;

const RenteeDetailButton = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 8fr;

  cursor: pointer;
`;

const IdImgBox = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.firstGray};
    text-align: center;
    font-size: 14px;
  }

  img {
    height: 40px;
  }
`;

const TextInfo = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  div {
    width: 100%;
    height: 100%;

    padding: 5px 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.black};
    text-align: center;
    font-size: 14px;
  }
`;

const BookTextInfo = styled(TextInfo)`
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`

const DeviceTextInfo = styled(TextInfo)`
  grid-template-columns: 1fr 1fr;
`;

const RenteeInfoButtonHolder = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  & button {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.firstGray};
    font-size: 22px;

    cursor: pointer;
  }
  & #edit:hover {
    color: ${(props) => props.theme.managerBlue};
  }

  & #delete:hover {
    color: ${(props) => props.theme.rentRed};
  }
`;

export default RenteeInfoHolder;
