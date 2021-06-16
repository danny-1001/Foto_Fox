import React from "react";
function Footer() {
  return (
    <footer>
      <h4>
        <a href="/#">FotoFox © 2021</a>
      </h4>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/danny-aviles-a1730a178"
          >
            <img
              src="/images/iconmonstr-linkedin-3.svg"
              alt="Danny Aviles' linkedin page."
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/marywenphotography/"
          >
            <img
              src="/images/instagram 1.svg"
              alt="Mary Wen's instagram. She was a contributing photographer on this project."
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/danny-1001"
          >
            <img src="/images/github.svg" alt="Danny Aviles' github page" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
