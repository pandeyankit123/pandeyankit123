import React from "react";
import { CpData } from "../../Data/cp";
import "./cp.css";
import CpCard from "./cp-card";
import Separator from '../../../common/separator/index'

function CP() {
  const data = CpData;
  return (
    <div className="cp">
      <Separator />
      <label className="section-title">Competitive Programming </label>
      <div className="cp-container">
        {data.map((item) => {
          return <CpCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default CP;