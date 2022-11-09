import { useParams } from "react-router-dom";
import styled from "styled-components";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import DetailHeader from "../components/header/DetailHeader";
import DetailInfo from "../components/Detail/DetailInfo";

function Detail() {
  const id = useParams();
  console.log(id);

  return (
    <StyledBody>
      <PageTitle title="상세 정보" />
      <DetailHeader />
      <DetailInfo />
    </StyledBody>
  );
}

const StyledBody = styled(Body)`
  max-width: 800px;
`;

export default Detail;
