import styled, {css} from "styled-components";
import { useState } from 'react';

function Button({numRentees, onRentClick, onReturnClick, onBookmarkClick}) {
  const [button, setButton] = useState({
    rented: true,
    returned: false,
    bookmarked: false,
  });
  return (
    <RentButtonSection>
      <RentButton
        state={button.rented}
        onClick={() => {
          setButton({ rented: true, returned: false, bookmarked: false });
          onRentClick();
        }}
      >
        <div className="rent-button-number">{numRentees.rented}</div>
        <div className="rent-button-title">대출 중</div>
      </RentButton>
      <RentButton
        state={button.returned}
        onClick={() => {
          setButton({ rented: false, returned: true, bookmarked: false });
          onReturnClick();
        }}
      >
        <div className="rent-button-number">{numRentees.returned}</div>
        <div className="rent-button-title">반납 완료</div>
      </RentButton>
      <RentButton
        state={button.bookmarked}
        onClick={() => {
          setButton({ rented: false, returned: false, bookmarked: true });
          onBookmarkClick();
        }}
      >
        <div className="rent-button-number">{numRentees.bookmarked}</div>
        <div className="rent-button-title">즐겨찾기</div>
      </RentButton>
    </RentButtonSection>
  )
}

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

export default Button;
