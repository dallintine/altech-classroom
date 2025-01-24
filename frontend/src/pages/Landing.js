import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SubjectCategoriesSection from "../components/Subjects";
import CTA from "../components/CTA";
import About from "../components/About";

const Landing = () => {
  return (
    <section className="container mx-auto">
      <Hero />;
      <Features />
      <CTA />
      <SubjectCategoriesSection />
      <About/>
    </section>
  );
};

export default Landing;
