import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { Backdrop } from "@mui/material";

function Modal({ open, setOpen, text }) {
  return (
    <Backdrop sx={{ color: "#fff" }} open={open}>
      <PopUpSection>
        <div
          className="pop-up-close"
          onClick={() => {
            setOpen(false);
          }}
        >
          <IoCloseOutline />
        </div>
        <div className="pop-up-content">{text}</div>
      </PopUpSection>
    </Backdrop>
  );
}

const PopUpSection = styled.div`
  width: 100%;
  max-width: 300px;
  height: 200px;

  padding: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor};

  position: relative;
  z-index: 100;

  .pop-up-content {
    padding: 10px 0;
    font-size: 14px;
    color: ${(props) => props.theme.black};
    line-height: 1.5em;
    text-align: justify;
  }

  .pop-up-close {
    padding: 10px;
    color: ${(props) => props.theme.firstGray};
    font-size: 28px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
export default Modal;
