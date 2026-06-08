import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/OUT/Hero/Hero";
import Features from "../components/OUT/FeaturesInfo/Features";
const Landing = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </>
  );
};

export default Landing;
