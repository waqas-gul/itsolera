import React from "react";

import Hero from "../components/homeComponents/Hero";
import Features from "../components/homeComponents/Features";
import About from "../components/homeComponents/About";
import ServicesSection from "../components/homeComponents/ServicesSection";
import Achievements from "../components/Achievements";
import TrainingPrograms from "../components/homeComponents/TrainingPrograms";
import ProductsSection from "../components/homeComponents/ProductsSection";

import AnimatedStats from "../components/AnimatedStats";
import TeamSlider from "../components/homeComponents/TeamSlider";
import BlogCards from "../components/BlogCards";
import NewsletterSignup from "../components/NewsletterSignup";
import Header from "../components/Navbar/Header";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <AnimatedStats />
      <ServicesSection />
      <Achievements />
      <TrainingPrograms />
      <ProductsSection />
      <TeamSlider />
      <BlogCards />
      <NewsletterSignup />
    </>
  );
};

export default Home;
