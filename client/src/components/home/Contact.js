import React from "react";
import "../../css/Contact.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const Contact = () => {
  return (
    <section id="contact" className="contactContainer">
      <div className="innerContainer">
        <div className="contactTitle">
          <h1>
            <span>Get</span> In Touch
          </h1>
          <h2>
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </h2>
        </div>
        <div className="formAndContact">
          <div className="contactForm">
            <form action="/contact">
              <div className="topForm">
                <input
                  className="contactInput"
                  type="text"
                  required
                  id="fullName"
                  name="fullName"
                  placeholder="Name :"
                />
                <input
                  className="contactInput"
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email :"
                />
              </div>
              <div className="bottomForm">
                <input
                  className="contactInput"
                  required
                  id="subject"
                  name="subject"
                  placeholder="Subject :"
                />
                <textarea
                  className="message_box contactInput"
                  name="message"
                  cols="50"
                  rows="5"
                  type="text"
                  placeholder="Message :"
                ></textarea>
                <button className="contactButton" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="contactInfo">
            <h2>Contact Info</h2>
            <h4>
              Feel free to contact regarding any issues, questions, and any
              other inquries.
            </h4>
            <div className="contactIcon">
              <LocationOnIcon style={{ fill: "azure", width: "18px" }} />
              <h3>Location</h3>
            </div>
            <p>Des Moines, IA</p>
            <div className="contactIcon">
              <PhoneIcon style={{ fill: "azure", width: "18px" }} />
              <h3>Phone</h3>
            </div>
            <p>+1 123 456 7890</p>
            <div className="contactIcon">
              <MailIcon style={{ fill: "azure", width: "18px" }} />
              <h3>Email</h3>
            </div>
            <p>devfitsupport@company.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
