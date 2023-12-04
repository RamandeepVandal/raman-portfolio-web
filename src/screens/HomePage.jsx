import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";

export const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
