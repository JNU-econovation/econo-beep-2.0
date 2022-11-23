import BOOK_AREA_ARRAY from "../constant/RENTEE_TYPES"
import RENTEE_TYPES from "../constant/RENTEE_TYPES";

const INITIAL_RENTEE_INFO = {
  id: "",
  thumbnail: "",
  name: "",
  bookAuthorName: "",
  bookPublisherName: "",
  bookPublishedDate: "",
  type: "",
  bookArea: RENTEE_TYPES.BOOK_AREA_ARRAY[0],
  note: "",
};

Object.freeze(INITIAL_RENTEE_INFO);
export default INITIAL_RENTEE_INFO;
