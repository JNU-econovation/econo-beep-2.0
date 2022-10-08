import styled from "styled-components";
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
          도서
        </ModeButton>
        <ModeButton
          id="equipment"
          state={!isBookMode}
          onClick={handleMoreButtonClick}
        >
          기자재
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
            style={{ borderRadius: 20 }}
          >
            <MenuItem value={0}>최근에 추가된 순</MenuItem>
            <MenuItem value={1}>이전에 추가된 순</MenuItem>
            <MenuItem value={2}>최근에 대여된 순</MenuItem>
          </Select>
        </FormControl>
      </Holder>
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
  height: 42px;

  margin-bottom: 42px;

  display: grid;
  align-items: center;

  grid-template-columns: 1fr 1fr 3fr;
`;

const Holder = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModeButton = styled.div`
  width: 50%;
  max-width: 100px;
  height: 100%;
  margin: 0 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${(props) => props.theme.managerBorderRadius};
  color: ${(props) => (props.state === true ? "#FDFDFD" : "#001AFF")};
  background-color: ${(props) =>
    props.state === true ? "#001AFF" : "#CACFFF"};

  font-size: 18px;
  font-weight: 600;
`;

const SearchBar = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: ${(props) => props.theme.managerBorderRadius};
  background-color: ${(props) => props.theme.bgColor};
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
