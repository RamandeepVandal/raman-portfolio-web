import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="hero-section container d-flex justify-content-center align-items-center">
        <div className="text-center m-5 p-5">
          <h1 className="fs-1">
            Hi, I'm <span className="hero-span">Raman Vandal</span>.
          </h1>
          <h1 className="fs-1">I'm a Software Developer.</h1>
          <a href="#projects" className="btn hero-btn fs-5 mt-3 p-3">
            View my work{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="var(--purple)"
              className="bi bi-arrow-down hero-svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};
