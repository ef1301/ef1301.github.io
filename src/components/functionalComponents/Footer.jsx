import React from "react";
import PDF from "../assets/Resume.pdf";

const Footer = ({ japtrans }) => {
  return (
    <footer>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div id="side-footer">
        <a href={PDF} target="_blank" rel="noreferrer">
          {japtrans ? "履歴書" : "Resume"}
        </a>
        ・
        <a href="https://github.com/ef1301/ef1301.github.io">
          {japtrans ? "ソースコード" : "Source Code"}
        </a>
      </div>

      <h2>
        {japtrans
          ? "太陽はまた昇り、私たちはまた挑戦する"
          : "The sun will rise and we will try again."}
      </h2>


    </footer>
  );
};

export default Footer;
