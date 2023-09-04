import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ location, index, onClick }) => {
  const cardStyle = {
    backgroundImage: `url(${location.cover}) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link to={`/details/${location.id}`} style={cardStyle} className="card">
      <div className="title">
        <h3>{location.title}</h3>
      </div>
    </Link>
  );
};

export default Cards;
