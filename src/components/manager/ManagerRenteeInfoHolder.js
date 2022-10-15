/* eslint-disable */
import styled from "styled-components";
import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function ManagerRenteeInfoHolder() {
  const navigate = useNavigate();

  const handleEditClick = () => {};

  const handleDeleteClick = () => {
    if (!confirm("삭제하시겠습니까?")) {
      return;
    } else {
      // 삭제하기
    }
  };

  return (
    <Container>
      <RenteeDetailButton
        onClick={() => {
          navigate(`/`);
        }}
      >
        <IdImgBox>
          <div id="id">101</div>
          <div id="image">
            <img src="http://image.yes24.com/goods/66913718/XL" />
          </div>
        </IdImgBox>
        <TextInfo>
          <div id="title">제목이당ㄴㅇㄹㅁㄹㅇㄴㄹㅇㄴㅇㄴㄴㅇㄹ</div>
          <div id="author">저자다</div>
          <div id="publisher">출판사이이이이이이이이임</div>
          <div id="published-day">출판일!!!!!!!!1</div>
          <div id="note">비고비고비고비고</div>
        </TextInfo>
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
  height: 46px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 9fr 1fr;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.black};
  box-shadow: ${(props) => props.theme.managerBoxShadow};
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
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;

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
    color: ${(props) => props.theme.rentBlue};
  }

  & #delete:hover {
    color: ${(props) => props.theme.rentRed};
  }
`;

export default ManagerRenteeInfoHolder;
