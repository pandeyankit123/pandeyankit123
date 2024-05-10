import React from "react";
import "./contact.css";
import Separator from "../../../common/separator/index";
import SocialContact from "../../../common/social-contact/index";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p> Want to get in touch. Contact me on any platform. </p>
          <SocialContact />
          <p>Or mail me : <u style={{color: "blue"}}>ankit.sanupandey@gmail.com</u></p>
        </div>
        <div className="download">
          <a download href={require('../../../assets/Resume_AnkitPandey.pdf')}>
            <i className="fi fi-rr-download"></i> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;