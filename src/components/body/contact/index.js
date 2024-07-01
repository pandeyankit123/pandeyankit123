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
          <p>Want to get in touch? Contact me on any platform.</p>
          <SocialContact />
          <p>
            Or mail me: <u style={{ color: "blue" }}>ankit.sanupandey@gmail.com</u>
          </p>
        </div>
        <div className="download">
          <a className="resume-link" download href={require("../../../assets/Resume_AnkitPandeyPr.pdf")}>
            <i className="fi fi-rr-download"></i> Download Resume
          </a>
          <a className="simple-link" target="_blank" href="https://drive.google.com/file/d/1_TCK8I4_Hce_vLU4GwEBA_V6hIWybQF7/view">
            (Or go with the Link)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;