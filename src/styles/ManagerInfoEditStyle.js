import styled from "styled-components";

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

export { TextInput, InfoBox, Label };
