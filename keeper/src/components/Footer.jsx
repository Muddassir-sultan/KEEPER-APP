import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} MUDDASSIR SULTAN</p>
    </footer>
  );
}

export default Footer;
