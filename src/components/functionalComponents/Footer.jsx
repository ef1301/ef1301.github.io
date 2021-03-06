import React from "react";
import { scrollToTop } from "../utils/basic-utils";
import PDF from "../assets/Resume.pdf";

const Footer = ({ japtrans }) => {
  return (
    <footer>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <button onClick={scrollToTop} id="to-the-top">
        π  To the Top!
      </button>
      <div id="side-footer">
        <p>
        <a href={PDF} target="_blank" rel="noreferrer">
          {japtrans ? "ε±₯ζ­΄ζΈ" : "Resume"}
        </a>
        γ»
        <a href="https://github.com/ef1301/ef1301.github.io">
          {japtrans ? "γ½γΌγΉγ³γΌγ" : "Source Code"}
        </a>
        </p>
      </div>

      <h2>
        {japtrans
          ? "ε€ͺι½γ―γΎγζγγη§γγ‘γ―γΎγζζ¦γγ"
          : "The sun will rise and we will try again."}
      </h2>


    </footer>
  );
};

export default Footer;
