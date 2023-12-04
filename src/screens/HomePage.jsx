import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";
// loading spinner
import { Spinner } from "react-bootstrap";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";

export const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Header />
          <div className="App">
            <Spinner
              animation="border"
              role="status"
              size="lg"
              className="spinner"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};
