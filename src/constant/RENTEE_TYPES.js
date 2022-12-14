const ARRAY = ["BOOK", "DEVICE"];

const BOOK_AREA_ARRAY = [
  "WEB",
  "APP",
  "LANGUAGE",
  "AI",
  "GAME",
  "DEVELOPMENT",
  "MAJOR",
];

const RENTEE_TYPE = {
  BOOK: "BOOK",
  DEVICE: "DEVICE",
};

const TYPE_KOREAN = {
  BOOK: "책",
  DEVICE: "기자재",
};

const BOOK_AREA_KOREAN = {
  WEB: "웹",
  APP: "앱",
  LANGUAGE: "언어",
  AI: "인공지능",
  GAME: "게임",
  DEVELOPMENT: "개발 교양",
  MAJOR: "전공 서적",
};

const BOOK_AREA = {
  WEB: "WEB",
  APP: "APP",
  LANGUAGE: "LANGUAGE",
  AI: "AI",
  GAME: "GAME",
  DEVELOPMENT: "DEVELOPMENT",
  MAJOR: "MAJOR",
}

Object.freeze(ARRAY);
Object.freeze(BOOK_AREA_ARRAY);
Object.freeze(BOOK_AREA_KOREAN);
Object.freeze(BOOK_AREA);
Object.freeze(RENTEE_TYPE);
Object.freeze(TYPE_KOREAN);

export default {
  ...RENTEE_TYPE,
  ARRAY,
  BOOK_AREA_ARRAY,
  BOOK_AREA,
  BOOK_AREA_KOREAN,
  TYPE_KOREAN,
};
