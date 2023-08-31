import React from "react";
import logements from "../logements.json";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Star = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        key={i}
        className={i <= rating ? "rating-star" : "empty-star"}
      />
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default Star;
