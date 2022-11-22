import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { TextField } from "@mui/material";
import {
  DateObjectToEpochSecond,
  EpochSecondToDateObject,
} from "../../lib/utils/EpochConverter";
import * as S from "../../styles/ManagerInfoEditStyle";

function BookAdditionalInfoEdit({ inputInfo, setInputInfo }) {
  return (
    <>
      <S.InfoBox>
        <S.Label>저자</S.Label>
        <S.TextInput
          type="text"
          placeholder="저자"
          value={inputInfo?.bookAuthorName}
          onChange={(e) => {
            setInputInfo({
              ...inputInfo,
              bookAuthorName: e.target.value,
            });
          }}
        />
      </S.InfoBox>
      <S.InfoBox>
        <S.Label>출판사</S.Label>
        <S.TextInput
          type="text"
          placeholder="출판사"
          value={inputInfo?.bookPublisherName}
          onChange={(e) => {
            setInputInfo({
              ...inputInfo,
              bookPublisherName: e.target.value,
            });
          }}
        />
      </S.InfoBox>
      <S.InfoBox>
        <S.Label>출판일</S.Label>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            inputFormat="yyyy-MM-dd"
            value={EpochSecondToDateObject(inputInfo?.bookPublishedDate)}
            onChange={(e) => {
              setInputInfo({
                ...inputInfo,
                bookPublishedDate: DateObjectToEpochSecond(e),
              });
            }}
            renderInput={(params) => (
              <TextField
                size="small"
                sx={{
                  ".MuiInputBase-input": {
                    height: "14px",
                    fontSize: "13px",
                    padding: "10px 0 10px 5px",
                  },
                }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </S.InfoBox>
    </>
  );
}

export default BookAdditionalInfoEdit;
