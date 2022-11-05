import styled, { css } from "styled-components";
import { FormControl, MenuItem, Select } from "@mui/material";
import { BiSearch } from "react-icons/bi";

function ManagerButtonSearchHolder({
  isBookMode,
  setIsBookMode,
  sortOrder,
  setSortOrder,
  setLastRenteeId,
  keyword,
  setKeyword,
  handleSearchPress,
}) {
  const handleMoreButtonClick = (e) => {
    if (e.target.id === "book") {
      setIsBookMode(true);
      setKeyword("");
    } else if (e.target.id === "equipment") {
      setIsBookMode(false);
      setKeyword("");
    }
  };

  const handleSearchKeywordChange = (e) => {
    const input = e.target.value.replace(/(\s*)/gi, "");
    setKeyword(input);
  };

  return (
    <Container>
      <Holder id="mode-button">
        <ModeButton
          id="book"
          state={isBookMode}
          onClick={handleMoreButtonClick}
        >
          <div id="book" onClick={handleMoreButtonClick}>
            도서
          </div>
        </ModeButton>
        <ModeButton
          id="equipment"
          state={!isBookMode}
          onClick={handleMoreButtonClick}
        >
          <div id="equipment" onClick={handleMoreButtonClick}>
            기자재
          </div>
        </ModeButton>
      </Holder>
      <Holder id="sort-order-button">
        <FormControl fullWidth size="small">
          <Select
            labelId="SelectSortOrder"
            id="Select"
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setLastRenteeId(null);
            }}
          >
            <MenuItem value={0}>최근에 추가된 순</MenuItem>
            <MenuItem value={1}>이전에 추가된 순</MenuItem>
            <MenuItem value={2}>최근에 대여된 순</MenuItem>
          </Select>
        </FormControl>
      </Holder>
      <div className="blank-space" />
      <Holder id="search-bar">
        <SearchBar
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearchPress();
            }
          }}
        >
          <Icon>
            <BiSearch />
          </Icon>
          <SearchInput
            value={keyword}
            placeholder={isBookMode ? "도서" : "기자재"}
            onChange={handleSearchKeywordChange}
          />
        </SearchBar>
      </Holder>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 40px;

  margin-bottom: 30px;

  display: grid;
  align-items: center;

  grid-template-columns: 1fr 1fr 2fr 380px;
`;

const Holder = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  .MuiInputBase-root {
    border-radius: ${(props) => props.theme.managerBorderRadius};
  }
`;

const ModeButton = styled.div`
  width: 50%;
  max-width: 100px;
  height: 100%;
  margin: 0 5%;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  border-radius: 15px;

  ${(props) =>
    props.state === false &&
    css`
      border: 2px solid transparent;
      background-image: linear-gradient(
          ${(props) => props.theme.managerBgColor},
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
    `}

  ${(props) =>
    props.state === true &&
    css`
      background: ${(props) => props.theme.bluePurple};
      border: none;
      color: ${(props) => props.theme.bgColor};
    `}
`;

const SearchBar = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  background: linear-gradient(#fff, #fff) padding-box,
    ${(props) => props.theme.bluePurple} border-box;
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.managerBorderRadius};
`;

const Icon = styled.div`
  margin: 0px 0px 0px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: #7280ff;
`;

const SearchInput = styled.input`
  width: 100%;
  margin: 4px 6px;
  padding-left: 8px;

  border: none;
  border-left: 2px solid #c8c8c8;

  font-size: 16px;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.bgColor};

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export default ManagerButtonSearchHolder;
