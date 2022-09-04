import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function RecommendBookSlider() {
  const navigate = useNavigate();
  const recommendBooks = [
    {
      id: 1,
      to: "/인공지능책",
      src: "http://image.yes24.com/goods/66913718/XL",
    },
    { id: 2, to: "/소설", src: "http://image.yes24.com/goods/109705390/XL" },
    {
      id: 3,
      to: "/인공지능책",
      src: "http://image.yes24.com/goods/66913718/XL",
    },
    { id: 4, to: "/소설", src: "http://image.yes24.com/goods/109705390/XL" },
  ];
  return (
    <StyledSlider
      dots={false}
      arrows={false}
      infinite
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay
      autoplaySpeed={2000}
      pauseOnHover
    >
      {recommendBooks.map((book) => (
        <Book
          key={book.id}
          onClick={() => {
            navigate(book.to);
          }}
        >
          <BookImg src={book.src} />
        </Book>
      ))}
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  width: 100%;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  .slick-track {
    overflow-x: hidden;
    display: flex;
    align-items: center;
  }
`;

const Book = styled.div`
  width: 30%;
  padding: 0 10px;
`;

const BookImg = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export default RecommendBookSlider;
