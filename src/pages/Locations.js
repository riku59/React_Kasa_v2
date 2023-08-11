import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import logements from "../logements.json";
import Footer from "../components/Footer";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import DescriptionLogement from "../components/DescriptionLogement";
import TagsLogements from "../components/TagsLogements";
import Star from "../components/Star";
import ButtonDisplayText from "../components/ButtonDisplayText";

const Location = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    return <Navigate to="/error" />;
  }
  console.log(logement);
  const description = logement.description;
  const equipments = logement.equipments;
  const equipmentsList = equipments.map((equipement, index) => (
    <li key={index}>{equipement}</li>
  ));
  console.log(equipmentsList);

  return (
    <div className="logement">
      <Navigation />
      <Carousel />
      <DescriptionLogement />
      <div className="tagsStar">
        <TagsLogements />
        <Star />
      </div>
      <div className="buttonLogement">
        <ButtonDisplayText texte="Description" description={description} />
        <ButtonDisplayText texte="Equipements" description={equipmentsList} />
      </div>
      <Footer />
    </div>
  );
};

export default Location;
