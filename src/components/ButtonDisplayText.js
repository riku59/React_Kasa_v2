import React, { useState } from "react";

const ButtonDisplayText = ({ texte, description }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="buttonDisplay">
      <button className="display">
        {texte}
        <img
          src="/images/Vector.png"
          alt="flèche"
          style={{
            transform: `rotate(${isRotated ? "180deg" : "0deg"})`,
            transition: "transform 0.9s ease",
          }}
          onClick={handleClick}
        />
      </button>
      <div className={`textContainer ${isRotated ? "showText" : ""}`}>
        {isRotated && (
          <div>
            <p className="textDisplay">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonDisplayText;
