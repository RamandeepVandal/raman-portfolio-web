import React from "react";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const { ref: myRef, inView: sectionIsVisible } = useInView({
    triggerOnce: true
  });

  return (
    <section className={`skills-section mt-5`}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 ref={myRef} className={`hidden ${sectionIsVisible ? "show" : ""}`}>
          Skills
        </h2>
        <hr />
        <div
          ref={myRef}
          className={`d-flex flex-wrap justify-content-center align-items-center hidden ${
            sectionIsVisible ? "show" : ""
          }`}
        >
          <div className="card m-3 p-4 text-center logo">
            <img
              title="JavaScript"
              className="img-card-top img-fluid skill-card-img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="card m-3 p-4 text-center logo">
            <img
              title="React.js"
              className="img-card-top img-fluid skill-card-img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <p className="mt-2">React</p>
          </div>
          <div className="card m-3 p-4 text-center logo">
            <img
              title="Bootstrap"
              className="img-card-top img-fluid skill-card-img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <p className="mt-2">Bootstrap</p>
          </div>
          <div className="card m-3 p-4 text-center logo">
            <img
              title="MongoDB"
              className="img-card-top img-fluid skill-card-img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />
            <p className="mt-2">MongoDB</p>
          </div>
          <div className="card m-3 p-4 text-center logo">
            <img
              title="NodeJS"
              className="img-card-top img-fluid skill-card-img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <p className="mt-2">Node.js</p>
          </div>
          <div className="card m-3 p-4 text-center logo">
            <img
              title="Git"
              className="img-card-top img-fluid skill-card-img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <p className="mt-2">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};
