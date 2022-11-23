import RENTEE_TYPE from "../../constant/RENTEE_TYPES";
import {MenuItem, Select} from "@mui/material";

function RenteeTypeSelect({inputInfo, setInputInfo, isBookMode}) {
  return (
    <Select
      labelId="SelectSortOrder"
      id="Select"
      value={
      !isBookMode ? RENTEE_TYPE.DEVICE : (
        !inputInfo.bookArea ? RENTEE_TYPE.BOOK_AREA["WEB"] : RENTEE_TYPE.BOOK_AREA[inputInfo.bookArea]
      )
      }
      onChange={(e) => {
        if (!isBookMode) {
          setInputInfo({...inputInfo, type: RENTEE_TYPE.DEVICE})
        } else {
          console.log(e.target.value)
          setInputInfo({...inputInfo, type: RENTEE_TYPE.BOOK, bookArea: e.target.value})
        }
      }}
      size="small"
      sx={{
        ".MuiInputBase-input": {
          height: "14px",
          fontSize: "13px",
          padding: "5px 0 10px 5px",
        },
      }}
    >
      <MenuItem disabled value="type">
        <i>종류</i>
      </MenuItem>
      {!isBookMode ? (
        <MenuItem key={0} value={RENTEE_TYPE.DEVICE}>
          {RENTEE_TYPE.TYPE_KOREAN.DEVICE}
        </MenuItem>
      ) : (
        RENTEE_TYPE.BOOK_AREA_ARRAY.map((element, index) => (
          <MenuItem key={index} value={element}>
            {RENTEE_TYPE.BOOK_AREA_KOREAN[element]}
          </MenuItem>
        ))
      )}
    </Select>
  );
}

export default RenteeTypeSelect;
