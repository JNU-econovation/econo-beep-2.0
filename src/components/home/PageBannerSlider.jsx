import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PageBannerSlider() {
  const bannerInfos = [
    {
      id: 1,
      url: "https://econovation.kr/about",
      background: "black",
      text: "ECONOVATION",
    },
    {
      id: 2,
      url: "https://econovation.kr/about",
      background: "#2269fa",
      text: "T-econo",
    },
    {
      id: 3,
      url: "https://www.youtube.com/channel/UCepdmgc4w5EQIc1J0lqXVtA/featured",
      background: "#c4302b",
      text: "youtube",
    },
    {
      id: 4,
      url: "https://www.instagram.com/cnu_econovation/",
      background:
        "radial-gradient(circle at 10% 400%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      text: "instagram",
    },
  ];

  return (
    <StyledSlider
      dots={true}
      arrows={false}
      infinite={true}
      speed={1000}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
      pauseOnHover={true}
    >
      {bannerInfos.map((item) => (
        <PageBanner
          key={item.id}
          background={item.background}
          onClick={() => {
            window.open(item.url, "_blank");
          }}
        >
          <PageText> {item.text} </PageText>
        </PageBanner>
      ))}
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  height: 100px;
  width: 90vw;
  max-width: 500px;

  position: absolute;
  bottom: 20px;

  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  .slick-dots {
    z-index: 1;

    padding-right: 5px;
    padding-top: 5px;

    position: absolute;
    text-align: end;

    top: 0;
    right: 0;

    height: 30%;
  }

  .slick-dots button {
    display: block;

    width: 8px;
    height: 8px;
    padding: 0;

    border: none;
    border-radius: 100%;
    background-color: ${(props) => props.theme.bgColor};

    cursor: pointer;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots li.slick-active button {
    background-color: #ff7c7c;
  }
`;

const PageBanner = styled.div`
  width: 100%;
  height: 100px;

  background: ${(props) => props.background};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageText = styled.div`
  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.bgColor};
  font-size: 18px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PageBannerSlider;
