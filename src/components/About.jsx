import React from "react";
import { Projects } from "./Projects";
import { useInView } from "react-intersection-observer";

export const About = () => {

  const { ref: myRef, inView: sectionIsVisible } = useInView();

  return (
    <section className="mt-5 about-project-section" id="about">
      {/* ABOUT SECTION */}
      <div className="container p-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className={`fs-1 hidden ${sectionIsVisible ? 'show' : ''}`} ref={myRef}>About me</h1>
        <hr />

        <div className={`card m-5 p-5 text-left hidden ${sectionIsVisible ? 'show' : ''}`} ref={myRef}>
          <p className="fs-4">
            👨‍💻 I'm a <span className="hero-span">Software Developer</span> with
            a keen interest in all things web dev.
          </p>
          <p className="fs-4">
            🎓 B.Tech. in Information Technology from{" "}
            <span className="hero-span">Kwantlen Polytechnic University</span>.
          </p>
          <p className="fs-4">
            🌱 I'm always looking to expand my skill set and learn new
            technologies.
          </p>
          <p className="fs-4">
            🚀 Interests: keeping fit, watching movies, everything{" "}
            <span className="hero-span">Manchester United!</span>
          </p>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <Projects />
    </section>
  );
};
