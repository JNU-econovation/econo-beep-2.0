import { IoMdInformation } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import styled from "styled-components";
import Wave from "react-wavify";
import { useColor } from "color-thief-react";

function DetailInfo() {
  const IMG_URL = "https://image.yes24.com/goods/102347474/XL";

  const { data, loading, error } = useColor(IMG_URL, "hex", {
    crossOrigin: "Anonymous",
  });
  // const waveColor = data;

  return (
    <>
      <BasicInfoSection>
        <RenteeImg src={IMG_URL} />
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
        <WaveSection>
          <Wave
            mask="url(#mask)"
            fill={data}
            paused={false}
            options={{ height: 15, speed: 0.1, amplitude: 10, points: 3 }}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.3" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2000"
                  height="200"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave>
        </WaveSection>
      </BasicInfoSection>
      <AdditionalInfoSection>
        <AdditionalInfo>
          <div className="info">10</div>
          <div className="title">아이디</div>
        </AdditionalInfo>
        <AdditionalInfo>
          <div className="info">21</div>
          <div className="title">즐겨찾기</div>
        </AdditionalInfo>
        <AdditionalInfo>
          <div className="info">2</div>
          <div className="title">대여</div>
        </AdditionalInfo>
      </AdditionalInfoSection>
    </>
  );
}

const BasicInfoSection = styled.div`
  width: 100%;
  //margin: 15px 0;
  padding: 35px 20px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const RenteeImg = styled.img`
  width: 40%;
  max-width: 200px;
  object-fit: cover;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  z-index: 1;
`;

const InfoSection = styled.div`
  min-height: 145px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const TextInfoSection = styled.div`
  & > div {
    margin-bottom: 3px;
  }

  .publisher {
    color: ${(props) => props.theme.firstGray};
    font-size: 10px;
    font-weight: 500;
  }

  .title {
    color: ${(props) => props.theme.black};
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
  }

  .author-name {
    color: ${(props) => props.theme.firstGray};
    font-size: 14px;
    font-weight: 500;
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
  z-index: 1;

  .button {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.bgColor};
    border-radius: 1000px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    cursor: pointer;
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

const WaveSection = styled.div`
  width: 100vw;
  height: 10%;
  padding: 0;

  position: absolute;
  bottom: 80px;
  z-index: 0;
`;

const AdditionalInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AdditionalInfo = styled.div`
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .info {
    margin-bottom: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.black};
    font-weight: 500;
    font-size: 26px;
    line-height: 35px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.firstGray};
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export default DetailInfo;
