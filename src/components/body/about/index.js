import React, { useEffect, useRef } from "react";
import SocialContact from "../../../common/social-contact";
import "./about.css";
import { init } from "ityped";

function About() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 70,
      strings: [" Competitive Programmer.", " Developer.", " Student."],
    });
  }, []);
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello World 👋, <br /> I'm a
          <span className="info-name" ref={textRef}></span>
          <div className="about-bottom" style={{position:"absolute"}}>
          <br />
            <SocialContact />
          </div>
        </div>
        <br /><br /><br />
        <div className="about-photo">
          <img
            src={require("../../../assets/ME.jpg")}
            className="picture"
          ></img>
        </div>
      </div>

    </div>
  );
}

export default About;