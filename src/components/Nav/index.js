/* eslint-disable no-unused-vars */
import React from "react";

function Nav(props) {
  const { option, setOption, navOption } = props;

  return (
    <nav className="hover">
      <ul className="flex">
        <li>
          <a
            href="#about"
            onClick={() => setOption("About")}
            className={option === "About" ?? "nav-link active"}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => setOption("Portfolio")}
           
            className={option === "Work" ?? "nav-link active"}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setOption("Contact")}
            className={option === "Contact" ?? "nav-link active"}
          >
            Contact Me
          </a>
        </li>
        <li>
          <div>
            <a
              className="nav-link active"
              href="https://drive.google.com/file/d/1h8BK73TFdqWdXfacm9z7cMrWUEIKU73QcpS8TNNLC2o/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
