import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import BluePurpleGradient from "../styles/BluePurpleGradient";

function SearchBar({ placeholder, searchApiUrl }) {
  const navigate = useNavigate();
  const [inputKeyword, setInputKeyword] = useState("");

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const keyword = inputKeyword.replace(/(\s*)/g, "");
      navigate({
        pathname: searchApiUrl,
        search: `?keyword=${keyword}`,
      });
    }
  };

  return (
    <SearchBox onKeyPress={onEnterPress}>
      <Icon>
        <BluePurpleGradient />
        <BiSearch style={{ fill: "url(#blue-purple-gradient)" }} />
      </Icon>
      <Search
        type="text"
        placeholder={placeholder}
        value={inputKeyword}
        onChange={(e) => {
          setInputKeyword(e.target.value);
        }}
      />
    </SearchBox>
  );
}

const SearchBox = styled.form`
  height: 42px;
  width: 100%;

  display: flex;
  align-items: center;

  border: 2px solid transparent;
  border-radius: 20px;

  background-image: linear-gradient(#fff, #fff),
    ${(props) => props.theme.bluePurple};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 15px;
  font-size: 24px;
`;

const Search = styled.input`
  width: 85%;
  padding: 0 0 0 10px;

  border: none;
  border-left: 1.5px solid #c8c8c8;

  font-size: 16px;
  color: ${(props) => props.theme.black};

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export default SearchBar;
