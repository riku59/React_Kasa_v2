import React from "react";
import logements from "../logements.json";
import { useParams } from "react-router-dom";

const DescriptionLogement = () => {
  const { id } = useParams();
  console.log("id", id);
  const logement = logements.find((item) => item.id === id);
  const [firstName, lastName] = logement.host.name.split(" ");
  console.log("logement", logement);
  return (
    <div className="Description">
      <div className="titleLocation">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
      </div>
      <div>
        <div className="nameLocation">
          <p>
            {firstName} <br /> {lastName}
          </p>
          <img src={logement.host.picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionLogement;
