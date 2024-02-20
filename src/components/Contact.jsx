import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const { ref: myRef, inView: sectionIsVisible } = useInView({
    triggerOnce: true,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_rp2m21t", "template_co4h71c", form.current, "TMhG3JX27MQVYvYKO")
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="mt-5">
      <div
        className={`d-flex flex-column justify-content-center align-items-center`}
        id="contact"
      >
        <h2 ref={myRef} className={`hidden ${sectionIsVisible ? "show" : ""}`}>
          Contact
        </h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <form
                className={`card about-card m-5 p-5 hidden ${
                  sectionIsVisible ? "show" : ""
                }`}
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="form-floating mb-3">
                  <input type="text" className="form-control form-control-contact" id="name" name="user_name" />
                  <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control form-control-contact" id="email" name="user_email"/>
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea type="text" className="form-control form-control-contact" id="message" name="message" rows="5" style={{height: '100%'}} />
                  <label htmlFor="message" className="form-label">Message</label>
                </div>
                <button className="btn hero-btn fs-5 mt-3 p-3" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
