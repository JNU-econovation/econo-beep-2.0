import React from "react";
import styled from "styled-components";
import RENTEE_TYPES from "@/constant/RENTEE_TYPES";
import { PropTypes } from "prop-types";

const Container = styled.div`
  padding: 0;
  display: inline-block;

  border: 1px solid transparent;
  border-radius: 9999px;
  background-image: linear-gradient(
      ${(props) => props.theme.managerBgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.bluePurple};
  background-origin: border-box;
  background-clip: content-box, border-box;

  div {
    margin: 0.4rem;
    font-size: 0.7rem;
    background: ${(props) => props.theme.bluePurple};
    color: transparent;
    -webkit-background-clip: text;
  }
`;

function RenteeTypeHashtag({ type, bookArea }) {
  return (
    <Container>
      <div>
        #
        {type === RENTEE_TYPES.BOOK
          ? RENTEE_TYPES.BOOK_AREA_KOREAN[bookArea]
          : RENTEE_TYPES.TYPE_KOREAN[type]}
      </div>
    </Container>
  );
}

RenteeTypeHashtag.propTypes = {
  type: PropTypes.string,
  bookArea: PropTypes.string,
};

RenteeTypeHashtag.defaultTypes = {
  type: RENTEE_TYPES.ARRAY[0],
  bookArea: RENTEE_TYPES.BOOK_AREA_ARRAY[0],
};

export default RenteeTypeHashtag;
