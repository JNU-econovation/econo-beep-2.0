import React, { useRef } from "react";
import styled from "styled-components";
import { Backdrop } from "@mui/material";
import useOutsideClick from "../../hooks/useOutsideClick";
import CreatePortal from "../common/CreatePortal";

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
  if (!open) return;

  const modalRef = useRef();
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <CreatePortal>
      <Backdrop sx={{ color: "#fff" }} open={open}>
        <ModalContainer ref={modalRef}>
          <TextContent>{text}</TextContent>
        </ModalContainer>
      </Backdrop>
    </CreatePortal>
  );
}
export default Modal;
