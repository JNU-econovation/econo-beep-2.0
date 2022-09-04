import routes from "../../routes";
import RENTEE_TYPES from "../../constant/RENTEE_TYPES";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Category() {
  const navigate = useNavigate();
  const type = RENTEE_TYPES.ARRAY;
  return (
    <CategoryBox>
      {type.map((item) => (
        <Type
          key={item}
          onClick={() => {
            navigate(`${routes.type}/${RENTEE_TYPES.URL[item]}`);
          }}
        >
          <TypeImg src={RENTEE_TYPES.ICON[item]} />
          <TypeText>{RENTEE_TYPES.KOREAN[item]}</TypeText>
        </Type>
      ))}
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Type = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TypeImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const TypeText = styled.div`
  margin-top: 10px;
  color: ${(props) => props.theme.black};
  font-size: 14px;
`;

export default Category;
