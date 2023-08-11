import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import logements from "../logements.json";
// import { useHistory } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery">
      <ul>
        {logements.map((location, index) => (
          <Cards key={index} location={location} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
