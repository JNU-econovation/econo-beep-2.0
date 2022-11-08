import { useParams } from "react-router-dom";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import DetailHeader from "../components/header/DetailHeader";
import DetailInfo from "../components/Detail/DetailInfo";

function Detail() {
  const id = useParams();
  console.log(id);

  return (
    <Body>
      <PageTitle title="상세 정보" />
      <DetailHeader />
      <DetailInfo />
    </Body>
  );
}

export default Detail;
