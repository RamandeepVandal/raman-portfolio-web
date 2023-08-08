import React from "react";
import { useInView } from "react-intersection-observer";
// project images
import otterClone from "../assets/otter-final.gif";
import socialX from "../assets/socialX.gif";
import shoeFlex from "../assets/shoeFlex-final.gif";
import dramaGif from "../assets/dramalist-final.gif";

export const Projects = () => {
  const { ref: myRef, inView: sectionIsVisible } = useInView();

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center`}
      id="projects"
    >
      <h1 ref={myRef} className={`hidden ${sectionIsVisible ? "show" : ""}`}>
        Projects
      </h1>
      <hr />
      <div
        ref={myRef}
        className={`projects d-flex justify-content-between align-items-center hidden ${
          sectionIsVisible ? "show" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div
                ref={myRef}
                className={`card d-flex m-5 justify-content-center align-items-center text-center proj-card`}
              >
                <img
                  src={socialX}
                  alt="dramalist demo"
                  className="img-fluid card-img-top"
                />
                <div className="p-5">
                  <h1 className="fs-3">SocialX</h1>
                  <p className="fs-5">
                    MERN Craiglist clone with user authentication using JWT and
                    allows users to sell their products online.
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }} className="hero-span">
                      Tech Stack:
                    </span>{" "}
                    MongoDB, ExpressJS, React, NodeJS
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <a
                      href="https://github.com/RamandeepVandal/mern-socialx"
                      className="btn hero-btn"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div
                ref={myRef}
                className={`card m-5 d-flex justify-content-center align-items-center text-center proj-card`}
              >
                <img
                  src={dramaGif}
                  alt="dramalist demo"
                  className="img-fluid card-img-top"
                />
                <div className="p-5">
                  <h1 className="fs-3">DramaList</h1>
                  <p className="fs-5">
                    Allows users to keep track of the dramas they have watched
                    and search for new dramas using the TMDB API.
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }} className="hero-span">
                      Tech Stack:
                    </span>{" "}
                    React, MongoDB, ExpressJS, NodeJS
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <a
                      href="https://github.com/RamandeepVandal/mern-dramalist-app"
                      className="btn hero-btn"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div
                ref={myRef}
                className={`card d-flex m-5 justify-content-center align-items-center text-center proj-card`}
              >
                <img
                  src={shoeFlex}
                  alt="dramalist demo"
                  className="img-fluid card-img-top"
                />
                <div className="p-5">
                  <h1 className="fs-3">ShoeFlex Store</h1>
                  <p className="fs-5">
                    Fully responsive MERN app that allows users to view the
                    products and place orders with a working cart system.
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }} className="hero-span">
                      Tech Stack:
                    </span>{" "}
                    React, Bootstrap, MongoDB, NodeJS
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <a href="#" className="btn hero-btn">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div
                ref={myRef}
                className={`card d-flex m-5 justify-content-center align-items-center text-center proj-card`}
              >
                <img
                  src={otterClone}
                  alt="dramalist demo"
                  className="img-fluid card-img-top"
                />
                <div className="p-5">
                  <h1 className="fs-3">Otter Landing Page Clone</h1>
                  <p className="fs-5">
                    This front-end web app uses React and Bootstrap to create a
                    clone of the Otter landing page. It is fully responsive!
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }} className="hero-span">
                      Tech Stack:
                    </span>{" "}
                    React, Bootstrap
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <a
                      href="https://github.com/RamandeepVandal/landing-page-otter-clone"
                      className="btn hero-btn"
                    >
                      Code
                    </a>
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
