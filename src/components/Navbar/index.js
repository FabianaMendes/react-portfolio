import React, { useState } from "react";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Perfil from "../../assets/profile-photo.png";
import "./style.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar-container">
      <div id="navbar">
        <header>
          <NavLink
            exact
            to="/"
            className="nav-link"
            onClick={() => setShowLinks(false)}
          >
            <img src={Perfil} alt="profile" />
          </NavLink>

          <h1>Fabiana Mendes</h1>
          <h3>Desenvolvedora Frontend</h3>
          <p>Apaixonada por design, heavy metal e gatos.</p>
        </header>
        <nav className="media">
          <a href="https://github.com/FabianaMendes" target="new">
            <i>
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
          <a href="https://www.instagram.com/fabbymendes" target="new">
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/fabianamoreiramendes"
            target="new"
          >
            <i>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
          </a>
        </nav>

        <FontAwesomeIcon
          icon={showLinks ? faTimes : faBars}
          id="icon"
          onClick={() => setShowLinks(!showLinks)}
        />

        <nav className="navlinks" id={showLinks ? "hidden" : ""}>
          <NavLink
            exact
            to="/"
            className="nav-link"
            onClick={() => setShowLinks(false)}
          >
            Sobre
          </NavLink>
          <NavLink
            to="/experiencias"
            className="nav-link"
            onClick={() => setShowLinks(false)}
          >
            Experiências
          </NavLink>
          <NavLink
            to="/habilidades"
            className="nav-link"
            onClick={() => setShowLinks(false)}
          >
            Habilidades
          </NavLink>
          <NavLink
            to="/contato"
            className="nav-link"
            onClick={() => setShowLinks(false)}
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
