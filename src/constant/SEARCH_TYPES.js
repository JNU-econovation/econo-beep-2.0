const SEARCH_TYPE = {
  ALL: "ALL",
  BOOK: "BOOK",
  DEVICE: "DEVICE",
}

const KOREAN = {
  ALL: "검색",
  BOOK: "도서",
  DEVICE: "기자재"
}

Object.freeze(SEARCH_TYPE)
Object.freeze(KOREAN)

export default {...SEARCH_TYPE, KOREAN}
