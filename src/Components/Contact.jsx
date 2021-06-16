import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false,
  });
  // handle inputs
  const handleChange = (event) => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(state)
    try {
      const emailResponse = await fetch('https://shotsemail.herokuapp.com/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(state)
    });

    const email = await emailResponse.json();
    console.log(email);
    } catch (error) {
      console.log(error);
    }
  };

  // Resetting initial data
  // const resetForm = () => {
  //   setState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });

  //   setTimeout(() => {
  //     setState({
  //       sent: false,
  //     });
  //   }, 3000);
  // };

  return (
    <div>
      <Header />
      <section className="section-five">
        <div className="container">
          <div className="contact-top">
            <h3>CONTACT ME</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, nobis.
            </p>
          </div>

          <div className="contact-middle">
            <div>
              <span className="contact-icon">
                <i className="fas fa-map-signs"></i>
              </span>
              <span>Address</span>
              <p>110 7th Street Industrial Area, Kampala</p>
            </div>

            <div>
              <span className="contact-icon">
                <i className="fas fa-phone"></i>
              </span>
              <span>Contact Number</span>
              <p>+256 783 767 353</p>
            </div>

            <div>
              <span className="contact-icon">
                <i className="fas fa-paper-plane"></i>
              </span>
              <span>Email Address</span>
              <p>sidzphotography2016@gmail.com</p>
            </div>
          </div>

          <div className="contact-bottom">
            <form className="form" onSubmit={formSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                className="name"
                value={state.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                className="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                className="subject"
                value={state.subject}
                onChange={handleChange}
                required
              />
              <textarea
                rows="9"
                placeholder="Message"
                name="message"
                id="message"
                className="message"
                value={state.message}
                onChange={handleChange}
                required
              ></textarea>
              <input type="submit" className="btn" />
            </form>

            <div>
              <iframe
                title="map"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7586819875273!2d32.60683981471099!3d0.31327406411598796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0bb9ffc6cb%3A0x3e387c108f24e2e1!2s110%20Seventh%20St%2C%20Kampala!5e0!3m2!1sen!2sug!4v1623156887550!5m2!1sen!2sug"
              ></iframe>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  );
};

export default Contact;
