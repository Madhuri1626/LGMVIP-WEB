import React from "react";
import logo from "./grass.jpg";
import "./Girl.css";

function Girl() {
  return (
    <div className="pic">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={logo} alt="react" />
          </div>
          <div className="content">
            <div className="header">Matt Giampietro</div>
            <div className="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="learn"><b>LEARN MORE</b></span>
            <span className="share"><b>SHARE</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Girl;
