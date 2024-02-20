import React from "react";
import { Projects } from "./Projects";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref: myRef, inView: sectionIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="mt-5 about-project-section" id="about">
      {/* ABOUT SECTION */}
      <div className="p-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h2 className={`hidden ${sectionIsVisible ? "show" : ""}`} ref={myRef}>
          About me
        </h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className={`card about-card mt-5 p-5 hidden ${
                  sectionIsVisible ? "show" : ""
                }`}
                ref={myRef}
              >
                <p className="p-sub">
                  👨‍💻 I'm a <span className="hero-span">Software Developer</span>{" "}
                  with a keen interest in all things web dev.
                </p>
                <p className="p-sub">
                  🎓 B.Tech. in Information Technology from{" "}
                  <span className="hero-span">
                    Kwantlen Polytechnic University
                  </span>
                  .
                </p>
                <p className="p-sub">
                  🌱 I'm always looking to expand my skill set and learn new
                  technologies.
                </p>
                <p className="p-sub">
                  🚀 I'm proficient with{" "}
                  <span className="hero-span">ReactJS</span>,{" "}
                  <span className="hero-span">NodeJS</span>,{" "}
                  <span className="hero-span">MongoDB</span>,{" "}
                  <span className="hero-span">Bootstrap</span>, and all the
                  wonderful technologies that encapsulate and support them to
                  bring my ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <Projects />
    </section>
  );
};
