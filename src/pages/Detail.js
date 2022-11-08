import { useParams } from "react-router-dom";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import DetailHeader from "../components/header/DetailHeader";
import styled from "styled-components";
import { IoMdInformation } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

function Detail() {
  const id = useParams();
  console.log(id);

  return (
    <Body>
      <PageTitle title="상세 정보" />
      <DetailHeader />
      <BasicInfoSection>
        <img src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_311/3-2-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg" />
        <InfoSection>
          <TextInfoSection>
            <div className="publisher">프리껙머시깽이</div>
            <div className="title">인공지능을 위한 수학이다 가나다라마다바</div>
            <div className="author-name">저자저자저자저자</div>
            <RenteeType>
              <div>#인공지능</div>
            </RenteeType>
          </TextInfoSection>
          <ButtonSection>
            <div className="note button">
              <IoMdInformation />
            </div>
            <div className="like button">
              <IoHeart />
            </div>
          </ButtonSection>
        </InfoSection>
      </BasicInfoSection>
    </Body>
  );
}

const BasicInfoSection = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  display: flex;
  justify-content: center;

  img {
    width: 40%;
    object-fit: cover;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  }
`;

const InfoSection = styled.div`
  min-height: 145px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextInfoSection = styled.div`
  & > div {
    margin-bottom: 3px;
  }

  .publisher {
    color: ${(props) => props.theme.firstGray};
    font-size: 10px;
  }

  .title {
    color: ${(props) => props.theme.black};
    font-size: 18px;
  }

  .author-name {
    color: ${(props) => props.theme.firstGray};
    font-size: 14px;
  }
`;

const RenteeType = styled.div`
  margin-top: 10px;
  padding: 0;
  display: inline-block;

  border: 1px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(
      ${(props) => props.theme.managerBgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.bluePurple};
  background-origin: border-box;
  background-clip: content-box, border-box;

  div {
    margin: 6px;
    font-size: 10px;
    background: ${(props) => props.theme.bluePurple};
    color: transparent;
    -webkit-background-clip: text;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  float: right;

  .button {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1000px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  .note {
    font-size: 30px;
    color: ${(props) => props.theme.firstGray};
  }

  .like {
    margin-left: 20px;
    font-size: 20px;
    color: ${(props) => props.theme.managerRed};
  }
`;

export default Detail;
