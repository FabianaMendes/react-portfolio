import { faFacebook, faFacebookF, faFacebookSquare, faGithub, faInstagram, faInstagramSquare, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import Perfil1 from "../../assets/perfil 1.png";
import './style.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <header>
                <img src={Perfil1} alt="perfil1.png" />
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
            <nav className="navlinks">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About me</NavLink>
                <NavLink to="/experiences">Experiences</NavLink>
                <NavLink to="/skills">{`Courses & Skills`}</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
        </div>
    );
}