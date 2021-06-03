import React from 'react';

const Footer = ({japtrans}) => {
  return (
    <footer>
      <h2>{japtrans ? "太陽はまた昇り、私たちはまた挑戦する" : "The sun will rise and we will try again."}</h2>
    </footer>
  );
}

export default Footer;
