import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";



const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Shiva Raghav.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/shiva-raghav-96b94a255"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/RaghavShiva"} target="_blank">
          <FaGithubSquare />
        </Link>
        <Link to={"https://x.com/raghav_shiva04"} target="_blank">
          <FaSquareXTwitter />
        </Link>
        <Link to={"https://www.instagram.com/ragshiv04/"} target="_blank">
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
