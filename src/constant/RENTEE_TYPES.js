const ARRAY = [
  "WEB",
  "APP",
  "LANGUAGE",
  "AI",
  "GAME",
  "DEVELOPMENT",
  "MAJOR",
  "BOOK",
  "EQUIPMENT",
];

const RENTEE_TYPE = {
  WEB: "WEB",
  APP: "APP",
  LANGUAGE: "LANGUAGE",
  AI: "AI",
  GAME: "GAME",
  DEVELOPMENT: "DEVELOPMENT",
  MAJOR: "MAJOR",
  BOOK: "BOOK",
  EQUIPMENT: "EQUIPMENT",
};

const INDEX = {
  WEB: 0,
  APP: 1,
  LANGUAGE: 2,
  AI: 3,
  GAME: 4,
  DEVELOPMENT: 5,
  MAJOR: 6,
  EQUIPMENT: 7,
};

const KOREAN = {
  WEB: "웹",
  APP: "앱",
  LANGUAGE: "언어",
  AI: "인공지능",
  GAME: "게임",
  DEVELOPMENT: "개발 교양",
  MAJOR: "전공 서적",
  EQUIPMENT: "기자재",
};

const URL = {
  WEB: "web",
  APP: "app",
  LANGUAGE: "language",
  AI: "ai",
  GAME: "game",
  DEVELOPMENT: "development",
  MAJOR: "major",
  EQUIPMENT: "equipment",
};

Object.freeze(ARRAY);
Object.freeze(RENTEE_TYPE);
Object.freeze(INDEX);
Object.freeze(KOREAN);
Object.freeze(URL);

export default { ARRAY, ...RENTEE_TYPE, INDEX, KOREAN, URL };
