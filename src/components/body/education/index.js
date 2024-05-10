import React from "react";
import "./education.css";
import Separator from "../../../common/separator/index";

function Education() {
    return (
        <div className="education">
            <Separator />
            <label className="section-title">Education</label>
            <br/><br/>
            <div className="education-photo">
                <img
                    src={require("../../../assets/Capture.JPG")}
                    className="epicture"
                ></img>
            </div>
            <br />
        </div>
    );
}

export default Education