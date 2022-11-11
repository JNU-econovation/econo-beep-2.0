const RENT_STATE = {
  RENTABLE: "RENTABLE",
  RENTED: "RENTED",
  UNRENTABLE: "UNRENTABLE",
};

const KOREAN = {
  RENTABLE: "대출 가능",
  RENTED: "대출 중",
  UNRENTABLE: "대출 불가",
};

const RENT_BUTTON = {
  RENTABLE: "대출하기",
  RENTED: "반납하기",
  UNRENTABLE: "대출 불가",
};

Object.freeze(RENT_STATE);
Object.freeze(KOREAN);
Object.freeze(RENT_BUTTON);

export default { ...RENT_STATE, KOREAN, RENT_BUTTON };
