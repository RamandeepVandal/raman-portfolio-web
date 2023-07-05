import React from "react";
import { Projects } from "./Projects";

export const About = () => {
  return (
    <section className="mt-5 about-project-section" id="about">
      {/* ABOUT SECTION */}
      <div className="container p-5 mb-5 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="fs-1">About me</h1>
        <hr />
        <p className="fs-4">
          Fullstack JS developer with a keen interest in all things web dev.
          When I'm not at my computer I like to spend my time keeping up to date
          with Manchester United F.C., keeping fit, and watching movies, all
          time favorite: <span className="hero-span">Interstellar!</span>
        </p>
      </div>
      {/* PROJECTS SECTION */}
      <Projects />
    </section>
  );
};
