import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Mr.Kenlopezmartinez@gmail.com</span>
        <div className="f-icons">
          <Insta color="rgb(37, 79, 214)" size={"3rem"} />
          <Facebook color="rgb(37, 79, 214)" size={"3rem"} />
          <Gitub color="rgb(37, 79, 214)" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
