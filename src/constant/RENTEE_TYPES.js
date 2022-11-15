const ARRAY = [
  "WEB",
  "APP",
  "LANGUAGE",
  "AI",
  "GAME",
  "DEVELOPMENT",
  "MAJOR",
  "DEVICE",
];

const BOOK_AREA_ARRAY = [
  "WEB",
  "APP",
  "LANGUAGE",
  "AI",
  "GAME",
  "DEVELOPMENT",
  "MAJOR",
];

const BOOK_AREA_KOREAN = {
  WEB: "웹",
  APP: "앱",
  LANGUAGE: "언어",
  AI: "인공지능",
  GAME: "게임",
  DEVELOPMENT: "개발 교양",
  MAJOR: "전공 서적",
};

const RENTEE_TYPE = {
  WEB: "WEB",
  APP: "APP",
  LANGUAGE: "LANGUAGE",
  AI: "AI",
  GAME: "GAME",
  DEVELOPMENT: "DEVELOPMENT",
  MAJOR: "MAJOR",
  DEVICE: "DEVICE",
};

const INDEX = {
  WEB: 0,
  APP: 1,
  LANGUAGE: 2,
  AI: 3,
  GAME: 4,
  DEVELOPMENT: 5,
  MAJOR: 6,
  DEVICE: 7,
};

const TYPE_KOREAN = {
  BOOK: "책",
  DEVICE: "기자재",
};

const URL = {
  WEB: "web",
  APP: "app",
  LANGUAGE: "language",
  AI: "ai",
  GAME: "game",
  DEVELOPMENT: "development",
  MAJOR: "major",
  DEVICE: "equipment",
};

Object.freeze(ARRAY);
Object.freeze(BOOK_AREA_ARRAY);
Object.freeze(BOOK_AREA_KOREAN);
Object.freeze(RENTEE_TYPE);
Object.freeze(INDEX);
Object.freeze(TYPE_KOREAN);
Object.freeze(URL);

export default {
  ARRAY,
  BOOK_AREA_ARRAY,
  BOOK_AREA_KOREAN,
  ...RENTEE_TYPE,
  INDEX,
  TYPE_KOREAN,
  URL,
};
