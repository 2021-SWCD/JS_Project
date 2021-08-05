import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "./assets/astronaut.png";
import celebrating from "./assets/celebrating.png";
import education from "./assets/education.png";
import taken from "./assets/taken.png";
import Story from "../src/component/stories/Story"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const stories = [ "../src/component/stories/Story" ];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {stories.map((js, idx) => (
          <div
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <Story />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
