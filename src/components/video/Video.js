import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import videoHero from "../../videos/video2.mp4";

const Video = () => {
  return (
    <div className="video-hero">
      <video autoPlay loop muted id="video">
        <source src={videoHero} type="video/mp4" />
      </video>
      <div className="content">
        <h1>
          <span>Application Managment</span>
        </h1>
        <p className="p-3 mb-2 bg-secondary text-white text-center">
          Die AM-GmbH wurde zum zweiten mal in Folge als einer „Der besten
          IT-Dienstleister in Deutschland“ insbesondere für die Bereiche "Cloud
          Services", "Managed Service" und "Outsourcing" ausgezeichnet.
        </p>
        <div className="position-absolute top-50 start-50 translate-middle d-none d-md-block">
          <Link to="/dev" className="btn btn-warning btn-lg text-light">
            DEV
          </Link>
          <Link to="/ops" className="btn btn-warning btn-lg text-light">
            OPS
          </Link>
          <Link to="/hlp" className="btn btn-warning btn-lg text-light">
            HLP
          </Link>
          <Link to="/app" className="btn btn-warning btn-lg text-light">
            APP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
