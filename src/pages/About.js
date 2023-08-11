import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BannerAPropos from "../components/BannerAPropos";
import ButtonDisplayText from "../components/ButtonDisplayText";

const About = () => {
  return (
    <div>
      <Navigation />
      <BannerAPropos />
      <ButtonDisplayText
        texte="Fiabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photo sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <ButtonDisplayText
        texte="Respect"
        description=" La bienveillance fait partie des valaurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <ButtonDisplayText
        texte="Service"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <ButtonDisplayText
        texte="Sécurité"
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />

      <Footer />
    </div>
  );
};

export default About;
