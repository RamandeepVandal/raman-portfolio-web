import React from "react";
// project images
import dramaList from "../assets/drama-lsit.mp4";
import otterClone from "../assets/Otter-Clone (1) (1).mp4";
import restCountries from "../assets/rest-countries_compressed.mp4";
import shoeFlex from '../assets/ShoeFlex (1).mp4';

export const Projects = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      id="projects"
    >
      <h1>Projects</h1>
      <div className="projects d-flex justify-content-between align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <video
                    className="img-fluid"
                    src={restCountries}
                    controls
                    muted
                  ></video>
                </div>
                <div className="mt-5">
                  <h1 className="fs-5">REST Countries</h1>
                  <p>
                    Uses the REST Countries API to allow users to search for
                    countries, view details about each country, and filter
                    countries by continent.
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <a
                      href="https://github.com/RamandeepVandal/rest-api-countries"
                      className="btn hero-btn"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <div className="embed-responsive embed-responsive-16by9">
                  <video
                    className="img-fluid"
                    src={dramaList}
                    controls
                    muted
                  ></video>
                </div>
                <div className="mt-5">
                  <h1 className="fs-5">DramaList</h1>
                  <p>
                    Allows users to manage and keep track of the dramas they
                    have watched. The project is built using React, Bootstrap,
                    Node.js, MongoDB.
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
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <video
                  className="img-fluid"
                  src={otterClone}
                  controls
                  muted
                ></video>
                <div className="mt-5">
                  <h1 className="fs-5">Otter Landing Page Clone</h1>
                  <p>
                    This front-end web app uses React and Bootstrap to create a
                    clone of the Otter landing page. It is fully responsive!
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
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card d-flex m-5 p-5 justify-content-center align-items-center text-center">
                <video
                  className="img-fluid"
                  src={shoeFlex}
                  controls
                  muted
                ></video>
                <div className="mt-5">
                  <h1 className="fs-5">ShoeFlex Store</h1>
                  <p>
                    Fully responsive MERN app that allows users to
                    view the products and place orders with a working cart system.
                  </p>
                  <div className="d-flex justify-content-evenly align-items-center text-center card-btn">
                    <a href="#" className="btn hero-btn">
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
