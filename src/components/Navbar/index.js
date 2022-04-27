import React, { useState } from 'react';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Perfil from "../../assets/perfil-2.png";
import './style.css';

export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="navbar-container">
            <div id="navbar">
                <header>
                    <NavLink exact to="/" className="nav-link" onClick={() => setShowLinks(false)}><img src={Perfil} alt="perfil1.png" /></NavLink>
                    
                    <h1>Fabiana Mendes</h1>
                    <h3>Desenvolvedora Front-End</h3>
                    <p>Apaixonada por design, mãe, estudante, programadora.</p>
                </header>
                <nav className="media">
                    <a href="https://github.com/FabianaMendes" target="new">
                        <i><FontAwesomeIcon icon={faGithub}/></i>
                    </a>
                    <a href="https://www.instagram.com/fabbymendes" target="new">
                        <i><FontAwesomeIcon icon={faInstagram}/></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fabianamoreiramendes" target="new">
                        <i><FontAwesomeIcon icon={faLinkedinIn}/></i>
                    </a>
                </nav>

                <FontAwesomeIcon
                    icon={showLinks ? faTimes : faBars }
                    id="icon"
                    onClick={() => setShowLinks(!showLinks)}
                />

                <nav className="navlinks" id={showLinks ? "hidden" : "" }>
                    <NavLink exact to="/" className="nav-link" onClick={() => setShowLinks(false)}>Home</NavLink>
                    <NavLink to="/about" className="nav-link" onClick={() => setShowLinks(false)}>About me</NavLink>
                    <NavLink to="/experiences" className="nav-link" onClick={() => setShowLinks(false)}>Experiences</NavLink>
                    <NavLink to="/skills" className="nav-link" onClick={() => setShowLinks(false)}>{`Courses & Skills`}</NavLink>
                    <NavLink to="/contacts" className="nav-link" onClick={() => setShowLinks(false)}>Contacts</NavLink>
                </nav>
            </div>
        </div>
    );
}