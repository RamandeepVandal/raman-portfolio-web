import React from "react";
// project images
import coding from "../assets/coding.png";

export const Projects = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" id="projects">
      <h1>Projects</h1>
      <hr className="border-2 hr" />
      <div className="projects d-flex justify-content-between align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <img
                  src={coding}
                  alt="project-img"
                  className="img-fluid img-thumbnail card-img-top"
                />
                <div className="mt-5">
                  <h1 className="fs-5">Something</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit numquam, ab aut fugit laudantium eaque labore!
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <button className="btn hero-btn">Demo</button>
                    <button className="btn hero-btn">Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <img
                  src={coding}
                  alt="project-img"
                  className="img-fluid img-thumbnail card-img-top"
                />
                <div className="mt-5">
                  <h1 className="fs-5">Something</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit numquam, ab aut fugit laudantium eaque labore!
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <button className="btn hero-btn">Demo</button>
                    <button className="btn hero-btn">Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <img
                  src={coding}
                  alt="project-img"
                  className="img-fluid img-thumbnail card-img-top"
                />
                <div className="mt-5">
                  <h1 className="fs-5">Something</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit numquam, ab aut fugit laudantium eaque labore!
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <button className="btn hero-btn">Demo</button>
                    <button className="btn hero-btn">Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <img
                  src={coding}
                  alt="project-img"
                  className="img-fluid img-thumbnail card-img-top"
                />
                <div className="mt-5">
                  <h1 className="fs-5">Something</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit numquam, ab aut fugit laudantium eaque labore!
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <button className="btn hero-btn">Demo</button>
                    <button className="btn hero-btn">Code</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
