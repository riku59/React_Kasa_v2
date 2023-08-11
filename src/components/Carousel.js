import React, { useState } from "react";
import logements from "../logements.json";
import { useParams } from "react-router-dom";

const Carousel = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  const pictures = logement.pictures;
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    let previousSlideIndex = currentSlide - 1;
    if (previousSlideIndex < 0) {
      previousSlideIndex = pictures.length - 1;
    }
    setCurrentSlide(previousSlideIndex);
  };

  const nextSlide = () => {
    let nextSlideIndex = currentSlide + 1;
    if (nextSlideIndex === pictures.length) {
      nextSlideIndex = 0;
    }
    setCurrentSlide(nextSlideIndex);
  };

  const slideNumber = `${currentSlide + 1}/${pictures.length}`;
  console.log("slideNumber", slideNumber);
  return (
    <div className="slide">
      <img
        src="/images/arrow_back.png"
        alt="back"
        className="arrow arrow-back"
        onClick={() => previousSlide()}
      />
      <div className="slide-content">
        <img src={pictures[currentSlide]} alt="slide" className="picture" />
        <div className="slide-number"> {slideNumber}</div>
      </div>
      <img
        src="/images/arrow_forward.png"
        alt="Next"
        className="arrow arrow-next"
        onClick={() => nextSlide()}
      />
    </div>
  );
};

export default Carousel;
