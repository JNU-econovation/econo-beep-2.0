const ARRAY = ["BOOK", "DEVICE"];

const BOOK_AREA_ARRAY = [
  "FRONTEND",
  "BACKEND",
  "AI",
  "GAME",
  "GENERAL_EDUCATION",
  "TEXTBOOK",
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
  FRONTEND: "프론트엔드",
  BACKEND: "백엔드",
  AI: "인공지능",
  GAME: "게임",
  GENERAL_EDUCATION: "교양",
  TEXTBOOK: "교제",
};

const BOOK_AREA = {
  FRONTEND: "FRONTEND",
  BACKEND: "BACKEND",
  AI: "AI",
  GAME: "GAME",
  GENERAL_EDUCATION: "GENERAL_EDUCATION",
  TEXTBOOK: "TEXTBOOK",
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
