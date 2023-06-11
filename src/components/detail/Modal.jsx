import React, { useRef } from "react";
import styled from "styled-components";
import { Backdrop } from "@mui/material";
import useOutsideClick from "../../hooks/useOutsideClick";

const ModalContainer = styled.div`
  width: auto;
  max-width: 16rem;

  padding: 1.5rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor};
`;

const TextContent = styled.div`
  display: inline-block;
  font-size: 14px;
  color: ${(props) => props.theme.black};
  line-height: 1.5em;
  text-align: justify;
`;

function Modal({ open, setOpen, text }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, () => setOpen(false));
  return (
    <Backdrop sx={{ color: "#fff" }} open={open}>
      <ModalContainer ref={modalRef}>
        <TextContent>{text}</TextContent>
      </ModalContainer>
    </Backdrop>
  );
}
export default Modal;
