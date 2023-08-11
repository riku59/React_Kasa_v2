import React from "react";
import Navigation from "../components/Navigation";
import Image_accueil from "../components/Image_accueil";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Image_accueil />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
